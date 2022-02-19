## Highlight Moving Animation


##### HTML
```html
<div class="tab-menu">
    <nav>
        <ul>
            <li><a href="#tabs-1" class="active">menu 1</a></li>
            <li><a href="#tabs-2">menu 2</a></li>
            <li><a href="#tabs-3">menu 3</a></li>
        </ul>
        <span class="highlight"></span>
    </nav>
    <div id="tab-content">
        <div id="tabs-1" class="active">
            <h2>menu 1</h2>
            <p>content</p>
        </div>
        <div id="tabs-3">
            <h2>menu 2</h2>
            <p>content</p>
        </div>
        <div id="tabs-2">
            <h2>menu 3</h2>
            <p>content</p>
        </div>
    </div>
</div>
```
자바스크립트에서 id 값을 사용하는 방법과 사용하지 않는 방법이 있지만, 사용하지 않더라도 id값 사용 필수.  

`<a href=""></a>`의 속성을 연결할 요소의 id 값과 연결하여 CSS나 JAVASCRIPT가 없이 HTML기능 만으로도 웹을 이용하는데 문제가 없어야 한다.  


##### CSS
```css
.highlight {
    /* 고정될 스타일만 값을 주고 변경되는 값들은 비워둠. */

    /* width: 0; */
    /* top: 0; */
    /* left: 0; */

    position: absolute;
    height: 3px;
    background: #000;
    transition: 0.4s cubic-bezier(0.65, 0, 0.35, 1);

}
```

##### javaScript
```javascript
const tabMenu = document.querySelectorAll('a'); 
const tabContents = document.querySelectorAll('#tab-content > div');
const highlight = document.querySelector('.highlight');

// highlight css 초기설정.
let highlightTop = tabMenu[0].offsetHeight + 'px';
let highlightLeft = tabMenu[0].offsetLeft + 'px';
let highlightWidth = tabMenu[0].offsetWidth + 'px';

highlight.style.left = highlightLeft;
highlight.style.width = highlightWidth;
highlight.style.top = highlightTop;

tabMenu.forEach((elem, idx)=>{

    elem.addEventListener('click', function(event){
        event.preventDefault();
        for(var i = 0; i < tabMenu.length; i++){
            tabMenu[i].classList.remove('active');
            tabContents[i].classList.remove('active');
        }
        tabMenu[idx].classList.add('active');
        tabContents[idx].classList.add('active');

        // 클릭한 요소의 크기 값 가져오기.
        highlightTop = tabMenu[idx].offsetHeight + 'px';
        highlightLeft = tabMenu[idx].offsetLeft + 'px';
        highlightWidth = tabMenu[idx].offsetWidth + 'px';

        // 위에 값들로 highlight 의 css 스타일 재설정.
        highlight.style.left = highlightLeft;
        highlight.style.width = highlightWidth;
        highlight.style.top = highlightTop;
    })
})
```
offset 의 위치는 상대값, 부모요소중 포지션이 기본값이 아닌 요소를 기준. 
- Element.offsetWidth :  요소의 width 값
- Element.offsetHeight : 요소의 height 값
- Element.offsetTop :    요소의 top 값
- Element.offsetLeft :   요소의 left 값



## Image Filter - Input Range 를 이용한 방법

input range 의 `addEventListener` 적용시...
- addEventListener('change') : 값이 변할 때 이벤트가 일어나지만 range의 thumb 조절시 드래그 중에는 이벤트 발생 않함.
- addEventListener('input')  : thumb 드래그중에도 이벤트 발생.
---
```html
<input type="range" min="180" max="380" value="280">
```
`min`속성과 `max`속성 그리고 `value`속성을 활용해야 한다.


```javascript
inputRange.addEventListener('input', function(){    
    const value = this.value;
    // value 변수를 활용

    // 활용 예시
    element.style.margin-left = `${value}px`;
    element.style.width = `${value}px`;

    // CSS 변수 활용 예시   
    const width = "--gird-width"; // CSS 사용자 변수 값
    document.documentElement.style.setProperty(width, `${value}px`);
})
```
사용자가 정의한 CSS 속성을 사용하려면 `setProperty()`를 사용해야함.
```javascript
element.style.setProperty("background-color", `#000`); 
// CSS 속성명 그대로 사용. 
```

##### 기본스타일의 input range 커스텀 참고 [SITE]:https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/

## Search Input Image filter