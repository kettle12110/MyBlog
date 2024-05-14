const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    if (btn.textContent === 'ライトモードにする') {
        btn.textContent = 'ダークモードにする'
        document.body.classList.replace('main-color-dark', 'main-color-light');

        let classes = document.getElementsByClassName("sub-color-dark");
        for (let i = 0; i < classes.length; i++) {
            classes[i].classList.add("sub-color-light");
        }
        for (let i = 0; i < classes.length; i++) {
            classes[i].classList.remove("sub-color-dark");
        }
    } else {
        btn.textContent = 'ライトモードにする';
        document.body.classList.replace('main-color-light', 'main-color-dark');

        let classes = document.getElementsByClassName("sub-color-light");
        for (let i = 0; i < classes.length; i++) {
            classes[i].classList.add("sub-color-dark");
        }
        for (let i = 0; i < classes.length; i++) {
            classes[i].classList.remove("sub-color-light");
        }
    }
});