import { AuthServerProvider, IAuthCredentials } from '../auth/auth-jwt.service';
import { Principal } from '../auth/principal.service';

export class LoginService {
  constructor(
    public principal: Principal,
    public authServerProvider: AuthServerProvider
  ) {}

  login(credentials: IAuthCredentials, callback?) {
    const cb = callback || function() {};

    return new Promise((resolve, reject) => {
      this.authServerProvider.login(credentials).then(
        data => {
          this.principal.identity(true).then(account => {
            resolve(data);
          });
          return cb();
        },
        err => {
          this.logout();
          reject(err);
          return cb(err);
        }
      );
    });
  }

  loginWithToken(jwt, rememberMe) {
    return this.authServerProvider.loginWithToken(jwt, rememberMe);
  }

  logout() {
    this.authServerProvider.logout();
    this.principal.authenticate(null);
  }
}
