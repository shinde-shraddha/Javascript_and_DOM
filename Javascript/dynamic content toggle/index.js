const btn = document.getElementById('btn');
const txt = document.getElementById('txt');

txt.style.display = 'none';

btn.addEventListener('click',function(){
    if(txt.style.display == 'none'){
        txt.style.display = 'block';
    }
    else{
        txt.style.display = 'none';
    }
})