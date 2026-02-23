let totalInterview = [];
let totalRejection = [];

let total = document.getElementById('total');
let selectInterview = document.getElementById('interview');
let rejectedList = document.getElementById ('rejected');

const cardSection = document.getElementById ('cardsItems')
const mainContainer =document.querySelector('main')


function jobCount(){
    total.innerText =cardSection.children.length
    selectInterview.innerText = totalInterview.length
    rejectedList.innerText = totalRejection.length
}
jobCount();

function toggleStyle(id){
    console.log('click', id)
}
