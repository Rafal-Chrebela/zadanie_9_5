var buttons = document.getElementsByClassName("button");
var numberOfelements = buttons.length;

for (var i = 0; i < numberOfelements; i++) {
    var txt = buttons[i].innerText;
    alert(txt);
}    