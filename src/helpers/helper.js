export function rateAvarage(arr){
    arr.map(post=>{
        post.avarageRate = +(post.comments.reduce((total,next)=> total + next.rate,0) / post.comments.length).toFixed(1);
        post.isInList = false;
      })
    return Sort(arr,"descending order");
}

export function Sort(arr,type){
  switch(type){
    case "ascending order":
      return arr.sort((a,b)=> a.avarageRate - b.avarageRate);
    case "descending order":
      return arr.sort((a,b)=> b.avarageRate - a.avarageRate);
    default:
      break;
  }
}

export function rateColor(rate){
  switch(true){
    case rate >= 8:
      return {backgroundColor: 'green'};
    case rate >= 6 && rate < 8:
      return {backgroundColor: 'lightgreen'};
    case rate >= 4 && rate < 6:
      return {backgroundColor: 'yellow'};
    case rate < 4:
      return {backgroundColor: 'red'};
  }
}

export function search(arr,value){
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