// 하이라이트 애니메이션

const tabTitles = document.querySelectorAll('.tab-menu > li > a'); 
const tabContents = document.querySelectorAll('#tab-content > div');
const highlight = document.querySelector('.highlight');

let highlightTop = tabTitles[0].offsetHeight + 'px';
let highlightLeft = tabTitles[0].offsetLeft + 'px';
let highlightWidth = tabTitles[0].offsetWidth + 'px';

highlight.style.left = highlightLeft;
highlight.style.width = highlightWidth;
highlight.style.top = highlightTop;

tabTitles.forEach((elem, idx)=>{

    elem.addEventListener('click', function(event){
        event.preventDefault();
        for(var i = 0; i < tabTitles.length; i++){
            tabTitles[i].classList.remove('active');
            tabContents[i].classList.remove('active');
        }
        tabTitles[idx].classList.add('active');
        tabContents[idx].classList.add('active');

        highlightTop = tabTitles[idx].offsetHeight + 'px';
        highlightLeft = tabTitles[idx].offsetLeft + 'px';
        highlightWidth = tabTitles[idx].offsetWidth + 'px';

        highlight.style.left = highlightLeft;
        highlight.style.width = highlightWidth;
        highlight.style.top = highlightTop;
    })

})
