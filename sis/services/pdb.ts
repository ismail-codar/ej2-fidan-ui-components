export const Pdb = {
  jsonData(
    db: PouchDB.Database,
    sendData?,
    method: "get_all" | "upsert" | "delete" = "get_all",
    stateCallback?: ((json: any, isEdit?: boolean) => Object)
  ) {
    return new Promise<any>((resolve, reject) => {
      if (method === "upsert") {
        const isEdit = sendData._id != null;
        db
          .upsert(sendData._id || new Date().toJSON(), doc => {
            return Object.assign(doc, sendData);
          })
          .then(response => {
            sendData._id = response.id;
            sendData._rev = response.rev;
            if (stateCallback) {
              resolve(stateCallback(sendData, isEdit));
            } else resolve(sendData);
          });
      } else if (method == "get_all") {
        db.allDocs({ include_docs: true }).then(docs => {
          const json = docs.rows.map(row => row.doc);
          if (stateCallback) {
            resolve(stateCallback(json));
          } else resolve(json);
        });
      } else if (method == "delete") {
        db.get(sendData).then(doc => {
          db.remove(doc).then(response => {
            if (stateCallback) {
              resolve(stateCallback(null));
            } else resolve(null);
          });
        });
      }
    });
  },
  jsonDataAuthorized(
    db: PouchDB.Database,
    sendData?,
    method: "get_all" | "upsert" | "delete" = "get_all",
    stateCallback?: ((json: any, isEdit?: boolean) => Object)
  ) {
    return Pdb.jsonData(db, sendData, method, stateCallback);
  }
};
