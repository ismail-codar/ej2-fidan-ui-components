declare namespace PouchDB {
  interface Database<Content extends {} = {}> {
    setSchema(items: any);
    rel: any;
  }
}
