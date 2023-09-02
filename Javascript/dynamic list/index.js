var counter = 0;

function addItem(){

    txt = document.getElementById("text").value;
    const mylist = document.getElementById("mylist");
    const newItemText = document.createElement("li");
    newItemText.textContent = txt;
    mylist.appendChild(newItemText);
    newItemText.value = "";
    document.getElementById("text").value="";
}