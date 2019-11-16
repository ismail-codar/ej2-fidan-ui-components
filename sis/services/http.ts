import wretch from 'wretch';

declare var APP;

export const Http = {
  serverError(err) {
    if (typeof err.message === "string" && err.message.startsWith("{")) {
      alert(JSON.parse(err.message).title);
    } else alert(err.message);
  },
  request(url: string) {
    return wretch(url);
  },
  requestAuthorized(url: string, token?: string) {
    if (!token) token = APP.loginService.authServerProvider.getToken();
    if (!token) return wretch("");
    url = url
      .replace("://", "|")
      .replace("//", "/")
      .replace("|", "://");
    return wretch(url).auth("Bearer " + token);
  },
  jsonDataAuthorized(
    url: string,
    sendData?,
    method: "get" | "post" | "put" | "delete" = "get",
    stateCallback?: ((json: any[]) => Object)
  ) {
    return new Promise((resolve, reject) => {
      let wretchReq = Http.requestAuthorized(url);
      if (method == "delete") {
        wretchReq.delete().res(resonse => {
          if (stateCallback) {
            resolve(stateCallback(null));
          } else resolve(null);
        });
      } else {
        if (sendData != null) {
          wretchReq = wretchReq.json(sendData);
        }
        wretchReq[method]()
          .json()
          .then((json: any[]) => {
            if (stateCallback) {
              resolve(stateCallback(json));
            } else resolve(json);
          })
          .catch(Http.serverError);
      }
    });
  }
};
