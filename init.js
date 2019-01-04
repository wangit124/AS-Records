function hoverup() {
    document.getElementById('search-bar').style.margin="30px auto auto auto";
    //document.getElementsByClassName('title').style.visibility="hidden";
}

function open() {
    var opens=ul.getElementByTagName('a');
    opens.style.height="300px";
}

$("li").mouseleave(function () {
    $(this).animate({
      "scrollTop": 0
    }, 500);
  });
