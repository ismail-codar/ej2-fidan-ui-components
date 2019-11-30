import * as diff from "diff";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

import { fileTypeToJson } from "./tsjs";

export const codeDiffLinesMerge = (prevCode, nextCode) => {
  const differences = diff.diffLines(prevCode, nextCode);
  let str = "";
  differences.forEach((difference, index) => {
    if (difference.added) {
      const prev = differences[index - 1];
      if (prev && prev.removed) return;
    }
    str += difference.value;
  });
  return str;
};

const fileCodeOptions = (code: string) => {
  let idx = code.indexOf("@fileCodeOptions");
  if (idx === -1)
    return {
      modelsPath: "../-types",
      stateFormPath: "../../../../../sis/model/state-form",
      stateListPath: "../../../../../sis/model/state-list"
    };
  else {
    idx = code.indexOf("{", idx);
    const idx2 = code.indexOf("*/", idx);
    code = code.substr(idx, idx2 - idx);
    return JSON.parse(code);
  }
};

const generateStateCodes = (
  commentTagName: string,
  codeGenerator: (def, name, allDefs, options) => string,
  fileName: string,
  fileCode: string,
  fileExtention: string
) => {
  const options = fileCodeOptions(fileCode);
  const baseDir = resolve(fileName, "..", "_generated");
  if (existsSync(baseDir) === false) mkdirSync(baseDir);
  let idx = fileCode.indexOf(commentTagName);
  // TODO TÜMÜ İÇİN OLMALI..............................................................................................
  while (idx != -1) {
    idx = fileCode.indexOf("*/", idx);
    const strTmp = fileCode.substr(idx, fileCode.indexOf("{", idx) - idx);
    //sonraki idx
    idx = fileCode.indexOf(commentTagName, idx + 1);
    const typeName = strTmp
      .trim()
      .split(" ")
      .pop();
    const json = fileTypeToJson(fileName, typeName);
    for (var definitionName in json.definitions) {
      if (definitionName !== typeName) continue; // sadece 1 adet definition için kod oluştur.
      const definitionPath = resolve(baseDir, definitionName) + fileExtention;
      console.log("generateStateCodes", definitionPath);
      //TODO $ref i bağla
      if (existsSync(definitionPath)) {
        const prevCode = readFileSync(definitionPath).toString();
        const nextCode = codeGenerator(
          json.definitions[definitionName],
          definitionName,
          json.definitions,
          options
        );
        writeFileSync(definitionPath, codeDiffLinesMerge(prevCode, nextCode));
      } else {
        writeFileSync(
          definitionPath,
          codeGenerator(
            json.definitions[definitionName],
            definitionName,
            json.definitions,
            options
          )
        );
      }
    }
  }
};

export const stateCodeRun = (
  commentTagName: string,
  codeGenerator: (def, name, definitions, options) => string,
  fileExtention: string,
  path: string
) => {
  const fileName = path || process.argv.slice(process.argv.length - 1)[0];
  const fileCode = readFileSync(fileName).toString();
  if (fileCode.includes(commentTagName)) {
    generateStateCodes(
      commentTagName,
      codeGenerator,
      fileName,
      fileCode,
      fileExtention
    );
  }
};
