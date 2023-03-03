let chapterHeading = document.querySelectorAll('.head');



chapterHeading.forEach(e => {
    e.target;
    e.addEventListener('click', ()=>{
        chapterHeading.forEach(item => {
            if (e!= item){
                item.style.display = 'blue'
            }      
        });
            
    });
});