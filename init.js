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
            li[i].style.display = "none";
            li[i].style.visibility="hidden";
        }
    }

    /*for(i=0 ; i< li.length; i++){
        a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) ){
            li[i].style.display = "none";
            li[i].style.visibility="hidden";
        }
    }*/
}
$(function() {
    $("li").on("click",function() {
      showLoader();
      $("#loading-content").load("dataSearch.php?"+this.id, hideLoader);
    });
  });
  
function open() {
    var opens=document.getElementById('openable');
    opensLi=opens.getElementsByTagName('li');
    opensLi.style.box-shadow="0 5px 5px rgba(0, 0, 0, 0.5)";
    opensLi.style.background="skyblue";
    opensLi.style.height="500px";
    opensLi.style.transition="0.5s";
}
