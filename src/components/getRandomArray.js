
const getRandomArray = (arr, num) => {
    let result = [];
    let index = 0;
    while (index < num) {
      let random = Math.floor(Math.random() * arr.length);
      if (result.indexOf(arr[random]) === -1) {
        result.push(arr[random]);
        index++;
      }
    }
    return result;
  };

export default getRandomArray;
