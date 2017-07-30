

export default function GetTree(array, parentsID = []) {
  var parents = {};

  for (var i = 0; i < array.length; i++) {

    if (!Object.keys(parents).includes(array[i]['parent'])) {
      Object.defineProperty(parents, array[i]['parent'], {value : array[i]['id']})
    } else {


    }

  }

  console.log('------ID Родителей------');

  console.log('--------Родители--------');
  console.log(parents);

}
