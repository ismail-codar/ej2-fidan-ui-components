import * as CircularJSON from "circular-json";

//yukardan aşağı dallanmış ağacı yandan tarar
export const traverseArrayTreeDFS = (
  tree,
  callback: (item) => boolean,
  parentProperty: string = "parent",
  childsProperty: string = "childs"
) => {
  let stack = Array.isArray(tree) ? tree : [tree];
  let n, childs;

  while (stack.length > 0) {
    n = stack.pop();
    if (callback(n) === false) break;

    if (!n[childsProperty]) {
      continue;
    }

    childs = n[childsProperty];
    if (typeof childs == "function") childs = childs();
    for (var i = childs.length - 1; i >= 0; i--) {
      if (parentProperty) childs[i][parentProperty] = n;
      stack.push(childs[i]);
    }
  }
};

export const findTreeItemPath = (tree: any[], checkFn: (item) => boolean) => {
  var path = null;
  var iter = p => (a, index) => {
    if (checkFn(a)) {
      path = p.concat(index);
      return true;
    }
    return (
      Array.isArray(a.childs) && a.childs.some(iter(p.concat(index, "childs")))
    );
  };
  tree.some(iter([]));
  return path;
};

//Yukardan aşağı dallanmış ağacı aynen tarar. Çoğunlukla kullanılmalıdır.
export const traverseArrayTreeBFS = (
  tree,
  callback: (item) => boolean,
  childsProperty: string = "childs"
) => {
  let queue = Array.isArray(tree) ? Object.assign([], tree) : [tree];
  let n,
    childs = tree;

  while (queue.length > 0) {
    n = queue.shift();
    if (callback(n) === false) break;

    if (!n[childsProperty]) {
      continue;
    }

    childs = n[childsProperty];
    if (typeof childs == "function") childs = childs();
    for (var i = 0; i < childs.length; i++) {
      queue.push(childs[i]);
    }
  }
};

export const traverseObjectTreeBFS = (
  tree,
  callback: (parent, key) => boolean,
  childsProperty: string = "childs"
) => {
  let queue = Array.isArray(tree) ? tree : [tree];
  let n, childs;

  while (queue.length > 0) {
    n = queue.shift();
    for (var key in n) {
      if (callback(n, key) === false) break;
      if (n[key][childsProperty]) {
        childs = n[key][childsProperty];
        if (typeof childs == "function") childs = childs();
        queue.push(childs);
      }
    }
  }
};

export const JSONStringify = (
  json,
  space: number = 1,
  ...ignoreKeys: string[]
) => {
  return CircularJSON.stringify(
    json,
    (key, value) => {
      if (ignoreKeys && ignoreKeys.indexOf(key) != -1) return undefined;
      return typeof value == "function" ? value() : value;
    },
    space
  );
};

export const JSONParse = (
  json: string,
  options?: {
    replacer: (parent, key: string) => void;
    ignoreTraverse: (parent, key: string) => boolean;
  }
) => {
  const deserializedJson = CircularJSON.parse(json);
  if (options)
    JSONTraverse(deserializedJson, options.replacer, options.ignoreTraverse);
  return deserializedJson;
};
export const JSONParseDefaultTraverse = (
  json: string,
  dataKeys: string[],
  arrayKeys: string[],
  ignoreTraverse = (parent, key) => {
    return key === "parent";
  }
) =>
  JSONParse(json, {
    //TODO dataKeys global arrayKeys yerine objelere $className gibi bir property ekleyip onun değerine göre yapılabilir
    replacer: (parent, key) => {
      //TODO CLIENT4
      // if (dataKeys.indexOf(key) != -1) parent[key] = S.data(parent[key]);
      // else if (arrayKeys.indexOf(key) != -1) parent[key] = SArray(parent[key]);
    },
    ignoreTraverse: ignoreTraverse
  });

export const JSONTraverse = (
  json,
  visitor: (parent, key: string) => void,
  ignoreTraverse?: (parent, key: string) => boolean
) => {
  for (const key in json) {
    if (ignoreTraverse && ignoreTraverse(json, key) === true) {
      continue;
    }
    if (Array.isArray(json[key])) {
      for (let i = 0; i < json[key].length; i++) {
        JSONTraverse(json[key][i], visitor, ignoreTraverse);
      }
    } else if (typeof json[key] === "object") {
      JSONTraverse(json[key], visitor, ignoreTraverse);
    }
    if (typeof json[key] != "function") visitor(json, key);
  }
};

export const ObjectTraverse = (
  obj: Object,
  callback: (obj, key: string, path: string) => boolean,
  nested?: boolean,
  _path: string = ""
) => {
  for (let key in obj) {
    if (nested) {
      _path += ".";
      _path += key;
      //TODO Array.isArray
      if (!callback(obj, key, _path)) return;
      else if (Array.isArray(obj[key])) {
        for (let i = 0; i < obj[key].length; i++) {
          ObjectTraverse(obj[key][i], callback, nested, _path);
        }
      } else if (typeof obj[key] === "object")
        ObjectTraverse(obj[key], callback, nested, _path);
      _path = _path.substr(0, _path.lastIndexOf("."));
    } else callback(obj, key, _path);
  }
};
