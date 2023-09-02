const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener('click',function(event){
    const paragraph = document.createElement('p');

    paragraph.textContent = 'Hello, DOM';
    container.appendChild(paragraph);
})