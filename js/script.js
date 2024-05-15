//フレンズが教えてくれたやつ
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    if (btn.textContent === 'ライトモードにする') {
        btn.textContent = 'ダークモードにする';
        document.body.classList.replace('main-color-dark', 'main-color-light');
        document.body.classList.replace('sub-color-dark', 'sub-color-light');

        // 他の要素のクラスを置き換える
        document.querySelectorAll('.sub-color-dark').forEach(element => {
            element.classList.replace('sub-color-dark', 'sub-color-light');
        });
        document.querySelectorAll('.main-color-dark').forEach(element => {
            element.classList.replace('main-color-dark', 'main-color-light');
        });
    } else {
        btn.textContent = 'ライトモードにする';
        document.body.classList.replace('main-color-light', 'main-color-dark');
        document.body.classList.replace('sub-color-light', 'sub-color-dark');

        // 他の要素のクラスを置き換える
        document.querySelectorAll('.sub-color-light').forEach(element => {
            element.classList.replace('sub-color-light', 'sub-color-dark');
        });
        document.querySelectorAll('.main-color-light').forEach(element => {
            element.classList.replace('main-color-light', 'main-color-dark');
        });
    }
});
