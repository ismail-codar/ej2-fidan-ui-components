import * as ts from "typescript";
import * as TJS from "typescript-json-schema";
import { PartialArgs } from "typescript-json-schema";

export const fileTypeToJson = (filePath, type) => {
  // optionally pass argument to schema generator
  const settings: PartialArgs = {
    required: true,
    aliasRef: true,
    topRef: true,
    titles: false,
    defaultProps: false,
    noExtraProps: false,
    strictNullChecks: false,
    typeOfKeyword: false,
    ignoreErrors: true,
    excludePrivate: false,
    validationKeywords: ["extra"]
  };

  const program = TJS.getProgramFromFiles([filePath], {
    target: 5,
    emitDecoratorMetadata: true,
    experimentalDecorators: true,
    removeComments: false,
    noImplicitAny: false,
    allowUnreachableCode: true,
    strictFunctionTypes: false,
    allowJs: true,
    jsx: ts.JsxEmit.Preserve
  });

  // We can either get the schema for one file and one type...
  const schema = TJS.generateSchema(program, type, settings);

  // ... or a generator that lets us incrementally get more schemas

  const generator = TJS.buildGenerator(program, settings);

  // all symbols
  const symbols = generator.getUserSymbols();

  // Get symbols for different types from generator.
  return generator.getSchemaForSymbol(type);
};
