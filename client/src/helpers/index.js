export function rateAvarage(arr) {
  arr.map(post => {
    post.averageRate = +(post.comments.reduce((total, next) => total + next.rate, 0) / post.comments.length).toFixed(1);
    post.isInList = false;
  })
  return sortBy(arr, "averageRate", "descending order");
}

export function sortBy(arr, prop, type) {
  switch (type) {
    case "ascending order":
      return arr.sort((a, b) => a[prop] - b[prop]);
    case "descending order":
      return arr.sort((a, b) => b[prop] - a[prop]);
    default:
      break;
  }
}

export function rateColor(rate) {
  switch (true) {
    case rate >= 8:
      return { backgroundColor: 'green' };
    case rate >= 6 && rate < 8:
      return { backgroundColor: 'lightgreen' };
    case rate >= 4 && rate < 6:
      return { backgroundColor: 'yellow' };
    case rate < 4:
      return { backgroundColor: 'red' };
  }
}

export function searchComent(arr, value) {
  const newArr = arr.map((post) => {
    const isFound = post.comments.find((com) =>
      com.text.toLowerCase().includes(value.toLowerCase())
    );

    if (isFound) {
      return post;
    }

  }).filter((post) => post);

  return newArr;
};