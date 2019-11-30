import { AccountService } from "./services/auth/account.service";
import { AuthServerProvider } from "./services/auth/auth-jwt.service";
import { Principal } from "./services/auth/principal.service";
import { LoginService } from "./services/login/login.service";
import { appConstants } from "./constants";
import { Pdb } from "./services/pdb";

import PouchDB from "pouchdb";
import {
  UIRouterReact,
  pushStateLocationPlugin,
  servicesPlugin
} from "@uirouter/react";
import { routerUiStates } from "./components/react/route-items/types";

interface IAPP {
  loginService: LoginService;
}

const APP: IAPP = {
  loginService: new LoginService(
    new Principal(new AccountService()),
    new AuthServerProvider()
  )
};

declare global {
  var APP: IAPP;
}

declare global {
  var React: typeof ReactObj;
  var ReactDOM: typeof ReactDOMObj;
}

global["React"] = ReactObj;
global["ReactDOM"] = ReactDOMObj;
global["PouchDB"] = PouchDB;

export const pageRouter = new UIRouterReact();

export const initPouchDB = showServerSettings => {
  PouchDB.plugin(require("pouchdb-find").default);
  PouchDB.plugin(require("pouchdb-upsert"));
  PouchDB.plugin(require("pouchdb-authentication"));

  Pdb.jsonData(new PouchDB(appConstants.PDB_SERVER_SETTINGS_DB))
    .then(data => {
      if (data.length) {
        //TODO bir server yerine birden çok ayarlanacak...
        appConstants.SERVER_API_URL = data[0].serverUrl;
      } else {
        showServerSettings();
      }
    })
    .catch(err => {
      showServerSettings();
    });
};

export const initPagesRouter = (appRoutes, IndexMain) => {
  const routerStates = routerUiStates(appRoutes);
  routerStates.push({
    name: "$main",
    component: IndexMain
  });

  pageRouter.plugin(pushStateLocationPlugin);
  pageRouter.plugin(servicesPlugin);
  routerStates.forEach(state => pageRouter.stateRegistry.register(state));
  pageRouter.urlService.rules.initial({ state: "$main" });
  window.requestAnimationFrame(() => {
    const name = window.location.pathname.substr(1).replace(/\//g, "_");
    if (name) pageRouter.stateService.go(name);
  });
};

global["APP"] = APP;
