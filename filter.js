const imageList = document.querySelector('.image-list');
const imageListItems = imageList.querySelectorAll('li');
const buttons = document.querySelectorAll('.view-options button');
const inputRange = document.querySelector('input[type="range"]');

// 클래스명 변수
const ACTIVE = "active",
      LISTVIEW = "list-view",
      GRIDVIEW = "grid-view",
      DNONE = "d-none";
    
// 버튼 활성화
for(const btn of buttons){
    btn.addEventListener('click', function(){
        const parent = this.parentElement;
        document.querySelector(".view-options .active").classList.remove(ACTIVE);
        parent.classList.add(ACTIVE);
        showRangeBar(parent);
    })
}

function showRangeBar(elem){
    if(elem.classList.contains("show-list")){
        inputRange.classList.add(DNONE);
        imageList.classList.remove(GRIDVIEW);
        imageList.classList.add(LISTVIEW);
    } else {
        inputRange.classList.remove(DNONE);
        imageList.classList.remove(LISTVIEW);
        imageList.classList.add(GRIDVIEW);
    }
}

// 그리드 뷰 너비 조절 - [레인지 인풋]
inputRange.addEventListener('input', function(){
    console.dir(document.documentElement.style)    
    imageList.style.gridTemplateColumns = `repeat(auto-fit, minmax(${this.value}px, 1fr))`;
})
