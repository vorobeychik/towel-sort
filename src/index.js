
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let arr = [];
    if(matrix === undefined){return arr}
  if(matrix.length === 0){return arr}
  for(let i of matrix){
      if(matrix.indexOf(i) % 2 !== 0){ i.reverse()}
      for(let b of i){
          arr.push(b)
      }

  }
  return arr
}
