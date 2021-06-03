let subBtn = document.querySelector('body > div.buttons > button.subtract');
let addBtn = document.querySelector('body > div.buttons > button.add');
let input = document.querySelector('body > div.buttons > .input');
let theCount = document.querySelector('body > div.count').innerHTML;
const val = parseInt(input.value, 10);

console.log(val)



class Bob {
  constructor(count, value){
    this.count = 0;
    // this.value = val;
    // this.value = parseInt(document.querySelector('body > div.buttons > input.input').value, 10);
  }
  countUp(){
    let input = document.querySelector('body > div.buttons > .input');
    const val = parseInt(input.value, 10);
    this.count+= val;
    if(this.count < 0){
      document.querySelector('body > div.count').style.color = 'red';
    }else if (this.count >= 0){
      document.querySelector('body > div.count').style.color = 'black';
    }
    // this.count+= val;
  }
  countDown(){
    let input = document.querySelector('body > div.buttons > .input');
    const val = parseInt(input.value, 10);
    this.count-= val;
    if(this.count < 0){
      document.querySelector('body > div.count').style.color = 'red';
    }
  }
}
const thing = new Bob();
/*FUNCTIONS*/
const updateStatsOnDom = (domClass, playerInstance) => {
  const domNode = document.querySelector(domClass)
  domNode.innerHTML = playerInstance.count
}
const addCount = function addCount(){
  thing.countUp();
}
const subCount = function subCount(){
  thing.countDown();
}
// let countColor = function countColor(){
//   let theCount = document.querySelector('body > div.count').innerHTML;
//   if(theCount < 0){
//     document.querySelector('body > div.count').innerHTML.style.color = "red";
//   }
// }
// countColor();
/*EVENT LISTENERS*/
subBtn.addEventListener('click', (e)=>{
  subCount();
  updateStatsOnDom('.count', thing);
});
addBtn.addEventListener('click', (e)=>{
  addCount();
  updateStatsOnDom('.count', thing);
});
