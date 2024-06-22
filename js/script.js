const heading =document.querySelector('.page-title');
const keyframes={
    translate:['200px 0',0],
};
const options={
    duration:2000,
    easing:'ease',
};
heading.animate(keyframes,options);


//色変える
function replaceClass(currentColor, ChangedColor){
document.querySelectorAll('.' + currentColor).forEach(element => {
    element.classList.replace(currentColor, ChangedColor);
});
}

//記事の情報を宣言する
const lists=[
    {
        Link:'1つ目の記事',
        Title:'1つ目の記事',
        Date:'2024/06/01',
        Tag:'test'
    },
    {
        Link:'test.html',
        Title:'2つ目の記事',
        Date:'2024/07/01',
        Tag:'test'
    },
    {
        Link:'test.html',
        Title:'2つ目の記事',
        Date:'2024/07/01',
        Tag:'testt2'
    }
    ]
    
// タグの数を集計する
const tagCounts = lists.reduce((acc, { Tag }) => {
    acc[Tag] = (acc[Tag] || 0) + 1;
    return acc;
}, {});

// タグボタンを作る
if (window.location.pathname.endsWith('explore.html')) {
    const article = document.querySelector('.tagbtn');
    Object.entries(tagCounts).forEach(([tag, count]) => {
        const content = `<button id="tagbtn">${tag} (${count})</button>`;
        article.insertAdjacentHTML('beforeEnd', content);
    });
}

//記事一覧の表示
if(window.location.pathname.endsWith('index.html')){
const article = document.querySelector('.mokuzi');
for(let i=0; i<lists.length; i++){
const content = 
`<a class="articles main-color-dark" href="${lists[i].Link}.html">
<span class="article-title main-color-dark">${lists[i].Title}</span>
<span class="article-date sub-color-dark">${lists[i].Date}</span>
</a>`;
article.insertAdjacentHTML('beforeEnd',content);
}
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    if (btn.textContent === 'ライトモードにする') {
        btn.textContent = 'ダークモードにする';
        // 他の要素のクラスを置き換える
        replaceClass('main-color-dark', 'main-color-light')
        replaceClass('sub-color-dark', 'sub-color-light')
        localStorage.setItem('lightmode','true')
    } else {
        btn.textContent = 'ライトモードにする';
        replaceClass('main-color-light', 'main-color-dark')
        replaceClass('sub-color-light', 'sub-color-dark')
        localStorage.removeItem('lightmode')
        };
    }
);
}

if(localStorage.getItem('lightmode',true)){
    replaceClass('main-color-dark', 'main-color-light')
    replaceClass('sub-color-dark', 'sub-color-light')
    btn.textContent = 'ダークモードにする';
}

const getScrollPercent =()=>{
    const scrolled =window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    const viewHeight = document.documentElement.clientHeight;
    const percentage = scrolled /(pageHeight - viewHeight)*100;
    document.querySelector('#bar').style.width=`${percentage}%`;
}
window.addEventListener('scroll',getScrollPercent);
