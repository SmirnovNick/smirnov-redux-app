import getTree from './getTreeOLD';



export default function GetTree(array, parentsID = []) {
  var tqwerty = getTree(array);
  var parents = {};

  for (var i = 0; i < array.length; i++) {
    if (!parentsID.includes(array[i]['parent'])){
      parentsID.push(array[i]['parent']);
      let rrrr = parseInt(array[i]['id']);
      Object.defineProperty(parents, array[i]['parent'], {value :  [{
        id:array[i]['id'],
        title:array[i]['title'],
        level: 0,
        child: parents[array[i]['id']]
      }]});
    } else {
        parents[array[i]['parent']].push({
          id:parseInt(array[i]['id']),
          title:array[i]['title'],
          level: 0,
          child: parents[array[i]['id']]
        });


  }
var output = parents[null];


}
console.log('------ID Родителей------');

console.log(tqwerty);
console.log(output);
}
