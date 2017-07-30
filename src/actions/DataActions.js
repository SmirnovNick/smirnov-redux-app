export function addNode(id, title, parent) {
  return {
    type: 'ADD_NODE',
    id,
    title,
    parent,
  };
}

export function deleteNode(id) {
  return {
    type: 'DELETE_NODE',
    id
  };
}
