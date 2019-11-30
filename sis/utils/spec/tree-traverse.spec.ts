import { traverseArrayTreeBFS, traverseArrayTreeDFS } from '../data-structure-utils';

it("traverse", () => {
  const tree = {
    text: "root",
    childs: [
      {
        text: "1",
        childs: [
          {
            text: "1.1",
            childs: [
              {
                text: "1.1.1",
                childs: []
              },
              {
                text: "1.1.2",
                childs: [
                  {
                    text: "1.1.2.1",
                    childs: []
                  }
                ]
              }
            ]
          },
          {
            text: "1.2",
            childs: [
              {
                text: "1.2.1",
                childs: []
              }
            ]
          }
        ]
      }
    ]
  };

  traverseArrayTreeDFS(tree, (item): boolean => {
    if (tree.text === "1.1.2") expect(item.parent.text).toBe("1.1");
    // console.log(item.text, item.parent ? item.parent.text : '-');
    return true;
  });

  traverseArrayTreeBFS(tree, (item): boolean => {
    if (tree.text === "1.1.2") expect(item.parent.text).toBe("1.1");
    // console.log(item.text, item.parent ? item.parent.text : '-');
    return true;
  });

  traverseArrayTreeDFS(tree.childs, (item): boolean => {
    if (tree.text === "1.1.2") expect(item.parent.text).toBe("1.1");
    // console.log(item.text, item.parent ? item.parent.text : '-');
    return true;
  });

  traverseArrayTreeBFS(tree.childs, (item): boolean => {
    if (tree.text === "1.1.2") expect(item.parent.text).toBe("1.1");
    // console.log(item.text, item.parent ? item.parent.text : '-');
    return true;
  });
});
