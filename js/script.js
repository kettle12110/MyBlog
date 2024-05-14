const btn =document.querySelector('#btn');
btn.addEventListener('click',()=>{
    document.body.classList.toggle('light-theme');
    if(btn.textContent ==='ライトモードにする'){
        btn.textContent ='ダークモードにする'
    }else{
        btn.textContent='ダークモードにする';
        }
});