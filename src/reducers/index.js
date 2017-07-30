const initialState = { data:[
    {
      id: 0,
      title: "Pictures",
      parent: null },
    {
      id: 3,
      title: "Purple Lotus 1.jpg",
      parent: 0 },
    {
      id: 4,
      title: "Blue Orchid.png",
      parent: 0 },
    {
      id: 1,
      title: "Other Flowers",
      parent: null },
    {
      id: 2,
      title: "Tree",
      parent: null },
    {
      id: 5,
      title: "Branch",
      parent: 2 },
    {
      id: 6,
      title: "Another Branch",
      parent: 2 },
    {
      id: 7,
      title: "A Leaf",
      parent: 6 }]
  };


export default function data(state = initialState, action) {
  switch (action.type) {

    case 'ADD_NODE':

      return {
        data: [
          ...state.data,
          {
            id: action.id,
            title: action.title,
            parent: action.parent
          }
        ]
      }

    case 'DELETE_NODE':

      return {
        data: state.data.filter(function(value){return this.id !== value.id;},{id : action.id})
      }

    default:
      return state;

  }
}
