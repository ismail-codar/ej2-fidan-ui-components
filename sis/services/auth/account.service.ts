import { appConstants } from "../../constants";
import { IUserAccount } from "../../model/auth/user-account";
import { Http } from "../http";
import { Pdb } from "../pdb";

let accountDb: PouchDB.Database = null;
const initDbCheck = () => {
  if (accountDb === null) accountDb = new PouchDB("account");
};

export class AccountService {
  get(): Promise<IUserAccount> {
    initDbCheck();
    return Pdb.jsonDataAuthorized(accountDb);
    // return Http.requestAuthorized(appConstants.SERVER_API_URL + "api/account")
    //   .get()
    //   .json();
  }
  save(account: IUserAccount): Promise<any> {
    initDbCheck();
    return Pdb.jsonDataAuthorized(accountDb, account, "upsert");
    // return Http.requestAuthorized(appConstants.SERVER_API_URL + "api/account")
    //   .json(account)
    //   .post();
  }
  register(account: IUserAccount): Promise<any> {
    initDbCheck();
    return Pdb.jsonDataAuthorized(accountDb, account, "upsert");
    // return Http.request(appConstants.SERVER_API_URL + "api/register")
    //   .json(account)
    //   .post()
    //   .json();
  }
  authenticate(username: string, password: string) {
    return accountDb.find({
      selector: {
        username: username,
        password: password
      }
    });
  }
}
