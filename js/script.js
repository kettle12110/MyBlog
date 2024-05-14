const btn =document.querySelector('#btn');
btn.addEventListener('click',()=>{
    if(btn.textContent ==='ライトモードにする'){
        btn.textContent ='ダークモードにする'
        document.body.classList.replace('main-color-dark','main-color-light');
        document.body.classList.replace('sub-color-dark','sub-color-light');
    }else{
        btn.textContent='ライトモードにする';
        document.body.classList.replace('main-color-light','main-color-dark');
        document.body.classList.replace('sub-color-light','sub-color-dark');
        }
});