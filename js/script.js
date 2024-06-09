const getScrollPercent =()=>{
    const scrolled =window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    const viewHeight = document.documentElement.clientHeight;
    const percentage = scrolled /(pageHeight - viewHeight)*100;
    document.querySelector('#bar').style.width=`${percentage}%`;
}
window.addEventListener('scroll',getScrollPercent);

//色変える
function replaceClass(currentColor, ChangedColor){
document.querySelectorAll('.' + currentColor).forEach(element => {
    element.classList.replace(currentColor, ChangedColor);
});
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    if (btn.textContent === 'ライトモードにする') {
        btn.textContent = 'ダークモードにする';
        // 他の要素のクラスを置き換える
        replaceClass('main-color-dark', 'main-color-light')
        replaceClass('sub-color-dark', 'sub-color-light')
    } else {
        btn.textContent = 'ライトモードにする';
        replaceClass('main-color-light', 'main-color-dark')
        replaceClass('sub-color-light', 'sub-color-dark')
        };
    }
);

//記事一覧の表示
const lists=[
{
    Link:'1つ目の記事.html',
    Title:'1つ目の記事',
    Date:'2024/06/01',
    Tag:'test'
},
{
    Link:'2つ目の記事.html',
    Title:'2つ目の記事',
    Date:'2024/07/01',
    Tag:'test'
}
]

const article = document.querySelector('.mokuzi');
for(let i=0; i<lists.length; i++){
const content = 
`<a class="articles main-color-dark" href="${lists[i].Title}.html">
<span class="article-title main-color-dark">${lists[i].Title}</span>
<span class="article-date sub-color-dark">${lists[i].Date}</span>
</a>`;
article.insertAdjacentHTML('beforeEnd',content);
}