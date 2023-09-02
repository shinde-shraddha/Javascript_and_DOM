function valid() {
    let text;
    let x = document.getElementById("txt").value;
    if (x == "") {
        text = "value is empty"
    }
    else {
        text = "value is not empty"
    }

    document.getElementById("error").innerHTML = text;
}