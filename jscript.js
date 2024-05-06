/*const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelectorAll('.ctrl-btns');
const sectionBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-cnt');

function pageTrans(){
    for(let x=0; x < sectionBtn.length; x++){
        sectionBtn[x].addEventListener('click', function(){
            let currbtn = document.querySelectorAll('.active-btn');
            currbtn[0].className = currbtn[0].className.replace('active-btn','');
            this.className += ' active-btn';
        })
    }
    
    /*Activate Sections*/
 /*   allSections = addEventListener('click', (e)=> {
    const id = e.target.dataset.id;
    if(id){
        /*sectionBtns.forEach((btn)=>{
            btn.classList.remove('active')
        })
        e.target.classList.add('active');*/

  /*      sections.forEach((section)=>{
            section.classList.remove('active');
        })
        
        const activeElem = document.getElementById(id);
        activeElem.classList.add('active');
        console.log(activeElem);
    }
})
} 

pageTrans();
*/


(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();