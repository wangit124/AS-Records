function hoverup() {
    document.getElementById('search-bar').style.margin="30px auto auto auto";
    //document.getElementsByClassName('title').style.visibility="hidden";
}

function searchFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('myinput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('wrapper');
    li = ul.getElementsByTagName('li');

    for(i=0 ; i< li.length; i++){
        a = li[i].getElementsByTagName('a')[0];

        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.visibility="visible";
            li[i].style.display = "";
        }
        else{
            li[i].style.display = 'none';
            li[i].style.visibility="hidden";
        }
    }

}

function open() {
    var opens=ul.getElementByTagName('a');
    opens.style.height="300px";
}
