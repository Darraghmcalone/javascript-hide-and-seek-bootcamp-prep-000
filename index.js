function getFirstSelector(selector) {
   return document.querySelector(selector);
 }
function nestedTarget(target) {
  return document.querySelector('#nested .target')
}
function deepestChild(child) {
  return document.querySelector('#grand-node div div div div')
}
function increaseRankBy(n){
   const list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
   for (let i = 0; i<list.length; i++){
     list[i].innerHTML = parseInt(list[i].innerHTML)+n
   }
 }
