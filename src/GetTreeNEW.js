

export default function GetTree(array, parentsID = []) {
  var parents = {};

  for (var i = 0; i < array.length; i++) {
    if (!parentsID.includes(array[i]['parent'])){
      parentsID.push(array[i]['parent']);
      Object.defineProperty(parents, array[i]['parent'], {value :  [{
        id:array[i]['id'],
        title:array[i]['title'],
        level: 0,
        child: parents[parseInt(array[i]['id'])]
      }]});
    } else {
        parents[array[i]['parent']].push({
          id:parseInt(array[i]['id']),
          title:array[i]['title'],
          level: 0,
          child: parents[parseInt(array[i]['id'])]
        });


  }



}
console.log('------ID Родителей------');

console.log('--------Родители--------');
console.log(parents);
}
