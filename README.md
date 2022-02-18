#### Highlight Moving Animation

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
```
자바스크립트에서 id 값을 사용하는 방법과 사용하지 않는 방법이 있지만, 사용하지 않더라도 id값 사용 필수.  

`<a href=""></a>`의 속성은 id 값과 연결하여 CSS나 JAVASCRIPT가 없어도 HTML기능 만으로도 웹을 이용하는데 문제가 없어야 한다.  

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

#### Image Filter