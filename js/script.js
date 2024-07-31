//タイトルを動かす
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
        Tag:['test4','test3']
    },
    {
        Link:'2つ目の記事',
        Title:'2つ目の記事',
        Date:'2024/07/01',
        Tag:['test4']
    },
    {
        Link:'test.html',
        Title:'3つ目の記事',
        Date:'2024/07/01',
        Tag:['test2']
    }
    ]

//文字列(キー):その文字列の出現数(値)　という配列を作る

//入れ物
const Tagcount= {};

//listsの要素数まで繰り返す
for(var i = 0;i<lists.length;i++){
    //listsごとのTagの数まで繰り返す
    for(var j =0;j<lists[i].Tag.length;j++){
        //既にTagcountに同じ文字列(キー)がある？
        if(Tagcount[lists[i].Tag[j]]){
            //同じ文字列のTagcountの出現数(値)に1を加える
            Tagcount[lists[i].Tag[j]]++;
        }else{
            //Tagcountに文字列(キー)を追加して出現数(値)に1をいれる
            Tagcount[lists[i].Tag[j]]=1;
        }
        }
    }

// exploreにタグボタンを作る

//ページがexplore.htmlの場合
if (window.location.pathname.endsWith('explore.html')) {
    //exploreに#tagbtnのエレメントを入れる
    const explore = document.querySelector('#tagbtn');
    //Tagcountの要素数だけ繰り返す
    Object.entries(Tagcount).forEach(([tag, count]) => {
        //タグボタンを作る
        const exploreTag = `<a class="tagbtn" href='index.html'>${tag} (${count})</a>`;
        explore.insertAdjacentHTML('beforeend', exploreTag);
    });
}

//記事にタグボタンを作る
if (!window.location.pathname.endsWith('index.html') && !window.location.pathname.endsWith('explore.html')) {
//urlを取得する
const currentPageUrl = window.location.href;
//%%とかで取得されるので日本語に直す
const decodedUrl = decodeURI(currentPageUrl);
console.log(decodedUrl)
//listsを今表示しているページのLINKが含まれる要素のみに絞り込む
const currentPagelists = lists.filter(value => {
    return decodedUrl.includes(value.Link);
});

console.log(currentPagelists)
//今表示しているページのタグの数を取得する
const articleTagCount = currentPagelists[0].Tag.length;
console.log(articleTagCount);
//今表示しているページのタグの数繰り返す
for(var i = 0;i<articleTagCount;i++){
//htmlにタグボタンを入れる
    const articles = document.querySelector('#tagbtn');
const articlesTag = `<a class="tagbtn" href='index.html'>${currentPagelists[0].Tag[i]}</a>`;
articles.insertAdjacentHTML('beforeEnd', articlesTag);
}
}



// タグボタンにクリックイベントを追加
document.querySelectorAll('.tagbtn').forEach(button => {
        button.addEventListener('click', (event) => {
            // クリックされたタグを取得
            const clickedTag = event.target.textContent.split(' ')[0];
            // クリックされたタグをローカルストレージに保存
            localStorage.setItem('clickedTag', clickedTag);
    });
});

const btn = document.querySelector('#btn');
if (btn !== null){
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
});
}

if(localStorage.getItem('clickedTag')){
    const savedTag = localStorage.getItem('clickedTag'); // ローカルストレージからタグを取得
    localStorage.removeItem('clickedTag')
    const article = document.querySelector('.articleList');
    // フィルタリングされたリストを生成
    const filteredLists = lists.filter(list => list.Tag === savedTag);
    // フィルタリングされた記事のみを表示
    filteredLists.forEach(list => {
        const content =
        `<a class="articles main-color-dark" href="${list.Link}.html">
        <span class="article-title main-color-dark">${list.Title}</span>
        <span class="article-date sub-color-dark">${list.Date}</span>
        </a>`;
        article.insertAdjacentHTML('beforeEnd', content);
    });
    localStorage.removeItem('clickedTag');
} else {
    //記事一覧の表示
    if(window.location.pathname.endsWith('index.html')){
        const article = document.querySelector('.articleList');
        for(let i=0; i<lists.length; i++){
            const content =
            `<a class="articles main-color-dark" href="${lists[i].Link}.html">
            <span class="article-title main-color-dark">${lists[i].Title}</span>
            <span class="article-date sub-color-dark">${lists[i].Date}</span>
            </a>`;
            article.insertAdjacentHTML('beforeEnd',content);
        }
    }
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
