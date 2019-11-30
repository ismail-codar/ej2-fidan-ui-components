import { routeDirGenerator } from '../route-dir';

it("route-dir", () => {
  const baseDir =
    "Users/macbook/DEV/bulutcrm/bulutcrm-repo/client-react/apps/bulutcrm/src/pages/";
  const files = [
    "/Users/macbook/DEV/bulutcrm/bulutcrm-repo/client-react/apps/bulutcrm/src/pages/__index.tsx",
    "/Users/macbook/DEV/bulutcrm/bulutcrm-repo/client-react/apps/bulutcrm/src/pages/2_hello.tsx",
    "/Users/macbook/DEV/bulutcrm/bulutcrm-repo/client-react/apps/bulutcrm/src/pages/about.tsx",
    "/Users/macbook/DEV/bulutcrm/bulutcrm-repo/client-react/apps/bulutcrm/src/pages/ekip-gorev/_index.tsx",
    "/Users/macbook/DEV/bulutcrm/bulutcrm-repo/client-react/apps/bulutcrm/src/pages/ekip-gorev/ekip.tsx",
    "/Users/macbook/DEV/bulutcrm/bulutcrm-repo/client-react/apps/bulutcrm/src/pages/ekip-gorev/gorevler.tsx",
    "/Users/macbook/DEV/bulutcrm/bulutcrm-repo/client-react/apps/bulutcrm/src/pages/hello2.tsx",
    "/Users/macbook/DEV/bulutcrm/bulutcrm-repo/client-react/apps/bulutcrm/src/pages/hello3.tsx"
  ];

  const groupped = routeDirGenerator.routeDirFiles(baseDir, files);
  routeDirGenerator.setupChilderenPages(groupped);

  console.log(JSON.stringify(groupped, null, 1));
});
