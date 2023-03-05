let chapterHeading = document.querySelectorAll('.head');
let passageTittle = document.querySelectorAll('.title')
let passageHead = document.querySelectorAll('.txt')
let psgCnt = document.querySelector('.container');
// let passageContainers = document.querySelectorAll('.container');

// main window left tab

let sideButtons =()=>{
    chapterHeading.forEach(e => {
        e.addEventListener('click', ()=>{
            chapterHeading.forEach(item => {
                if (item!= e){
                    item.style.backgroundColor = 'initial'
                }      
                else{
                    item.style.backgroundColor = 'rgb(65, 102, 158)';
                }
            });
                       
        });
        e.style.transition = "all 400ms ease"
    });
} 
sideButtons()