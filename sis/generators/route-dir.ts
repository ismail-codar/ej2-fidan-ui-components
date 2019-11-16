const glob = require("glob");
const fs = require("fs");
const path = require("path");

const routeDirFiles = (baseDir: string, files: string[]) => {
  const routes = files
    .map(file => {
      const filePath = file.substr(baseDir.length);
      if (filePath.substr(2, 1) === "_") return null;
      return {
        name: filePath
          .substr(1, filePath.length - 5)
          .replace(/\//g, "_")
          .replace(/\./g, ""),
        url: filePath.substr(0, filePath.length - 4)
      };
    })
    .filter(route => route != null);
  const groupped = {};
  routes.forEach(route => {
    var group = groupped;
    let paths = route.name.split("_");
    let order = -1;
    paths.forEach((path, index) => {
      if (!isNaN(Number(path))) {
        order = Number(path);
      } else {
        if (!group[path]) {
          group[path] = {};
          if (index === paths.length - 1) {
            group[path].path = route.url;
            let idx = route.name.indexOf("_");
            if (idx != -1 && !isNaN(Number(route.name.substr(0, idx)))) {
              route.name = route.name.substr(idx + 1);
              route.url = "/" + route.url.substr(idx + 2);
            }
            group[path].name = route.name;
            group[path].page = `__req(.${route.url})req__`;
            group[path].order = order;
          }
        }
        group = group[path];
      }
    });
  });
  return groupped;
};

const setupChilderenPages = grouppedJson => {
  for (var key in grouppedJson) {
    if (grouppedJson[key].path == undefined) {
      const items = grouppedJson[key];
      const indexPage = items.index;
      const indexPageName = indexPage.name.substr(0, indexPage.name.length - 7);
      delete items.index;
      grouppedJson[key] = {
        name: indexPageName,
        path: "/" + indexPageName,
        page: indexPage.page,
        order: indexPage.order,
        childs: items
      };
    }
  }
};

const routeDir = (baseDir, pattern, configJsonPath, callback?) => {
  glob(path.join(baseDir, pattern), function(er, files) {
    const groupped = routeDirFiles(baseDir, files);
    setupChilderenPages(groupped);
    let code = JSON.stringify(groupped, null, 1);
    code = code.replace(/\"__req\(/g, 'require("');
    code = code.replace(/\)req__\"/g, '")');
    fs.writeFile(
      path.join(baseDir, configJsonPath),
      `export const appRoutes = ${code}`,
      callback || function() {}
    );
  });
};

const routeDirRun = () => {
  const fileName = process.argv.slice(process.argv.length - 1)[0];
  if (fileName.endsWith("__route-paths.ts")) return;
  if (fileName.indexOf("/pages/") !== -1) {
    console.log("routeDir");
    const baseDir = fileName.substr(0, fileName.lastIndexOf("/pages") + 6);
    routeDir(baseDir, "**/*.tsx", "__route-paths.ts");
  }
};

export const routeDirGenerator = {
  routeDirRun,
  routeDirFiles,
  setupChilderenPages
};

// routeDir(
//   "/Users/macbook/DEV/bulutcrm/bulutcrm-repo/client-react/apps/bulutcrm/src/pages",
//   "**/*.tsx",
//   "__route-paths.ts"
// );
