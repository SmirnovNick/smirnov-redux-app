export default function getTree(data, level = 0, id = 0, index = 0) {

  let output = [];


  if (index < data.length && data[index]['parent'] === null ) {
    for (let i = index; i < data.length; i++) {
      if (data[i]['parent'] === null && level === 0) {
        output.push(
          {
            id: data[i]['id'],
            title: data[i]['title'],
            level: 0,
            children: getTree(data, 1, data[i]['id'], i + 1)
          }
        );
      } else if (data[i]['parent'] === null && level !== 0) {
        return getTree(data, 1, id, i + 1);
      }
    }
  } else {
    for (let i = 0; i < data.length; i++) {
      if (data[i]['parent'] === id) {
        output.push(
          {
            id: data[i]['id'],
            title: data[i]['title'],
            level: level,
            children: getTree(data, level + 1, data[i]['id'], index + 1)
          }
        );
      }
    }

    if (output.length === 0) {
      return null;
    } else {
      return output;
    }
  }
  return output;
}
