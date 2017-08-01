import getTree from './getTreeOLD';



export default function GetTree(array) {
  let parents = {};

  const getNode = (id) => {
    if (typeof parents[id] === 'undefined') {
      parents[id]  = {
        children: [],
      };
    }
    return parents[id];
  }

  for (let item of array) {
    let node = getNode(item.id);
    node = { ...node, ...item };
    let parent = getNode(item.parent);
    parent.children.push(node);
  }

  return parents[null];
}
