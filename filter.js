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

// 검색키워드로 필터 적용
const inputSearch = document.querySelector('input[type="search"]');
const filteredNum = document.querySelector('.toolbar .counter span');
const figcaptions = document.querySelectorAll("figcaption > p:first-of-type");
const figcaptionsArray = [];
let counter = 0;

for(const figcaption of figcaptions) {
    figcaptionsArray.push({
        idx: counter++,
        text: figcaption.textContent
    });
}

inputSearch.addEventListener('keyup', keyupHandler);

function keyupHandler(){    
    for(const list of imageListItems){
        list.classList.add(DNONE);
    }

    const keywords = this.value;
    const filteredArray = figcaptionsArray.filter( element => element.text.toLowerCase().includes(keywords.toLowerCase()));
    
    if(filteredArray.length > 0){
        for(const item of filteredArray){
            imageListItems[item.idx].classList.remove(DNONE);
        }        
    }

    filteredNum.textContent = filteredArray.length;

}

