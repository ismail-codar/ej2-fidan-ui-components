import { appConstants } from "../../constants";
import { Http } from "../http";
import { Pdb } from "../pdb";
import { AccountService } from "./account.service";

export interface IAuthCredentials {
  username: string;
  password: string;
  rememberMe: boolean;
}

export class AuthServerProvider {
  keyAuthenticationToken = "authenticationToken";

  constructor() {}

  getToken() {
    let token = localStorage.getItem(this.keyAuthenticationToken);
    if (token == null)
      token = sessionStorage.getItem(this.keyAuthenticationToken);
    return token;
  }

  login(credentials: IAuthCredentials): Promise<string> {
    const data = {
      username: credentials.username,
      password: credentials.password,
      rememberMe: credentials.rememberMe
    };

    return new Promise((resolve, reject) => {
      APP.loginService.principal.account
        .authenticate(credentials.username, credentials.password)
        .then(json => {
          debugger;
        })
        .catch(err => {
          debugger;
        });

      // Http.request(appConstants.SERVER_API_URL + "api/authenticate")
      //   .json(data)
      //   .post()
      //   .res(response => {
      //     const bearerToken = response.headers.get("Authorization");
      //     if (bearerToken && bearerToken.slice(0, 7) === "Bearer ") {
      //       const jwt = bearerToken.slice(7, bearerToken.length);
      //       this.storeAuthenticationToken(jwt, credentials.rememberMe);
      //       resolve(jwt);
      //     } else reject(response);
      //   })
      //   .catch(err => {
      //     reject(
      //       err.message.startsWith("{") ? JSON.parse(err.message) : err.message
      //     );
      //   });
    });
  }

  loginWithToken(jwt, rememberMe) {
    if (jwt) {
      this.storeAuthenticationToken(jwt, rememberMe);
      return Promise.resolve(jwt);
    } else {
      return Promise.reject("auth-jwt-service Promise reject"); // Put appropriate error message here
    }
  }

  storeAuthenticationToken(jwt, rememberMe) {
    if (rememberMe) {
      localStorage.setItem(this.keyAuthenticationToken, jwt);
    } else {
      sessionStorage.setItem(this.keyAuthenticationToken, jwt);
    }
  }

  logout() {
    localStorage.removeItem(this.keyAuthenticationToken);
    sessionStorage.removeItem(this.keyAuthenticationToken);
  }
}
