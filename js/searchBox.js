// JS for Search Icon in Navbar
var searchLink = document.getElementById('searchLink');
var searchLink2 = document.getElementById('searchLink2');

var searchBox = document.getElementById('searchBox');
var searchBoxVisible = false;

searchLink.addEventListener('click', function(){
    if (searchBoxVisible){
        searchBox.style.display = 'none';
    }else {
        searchBox.style.display = 'block';
    }

    searchBoxVisible = !searchBoxVisible;
});

searchLink2.addEventListener('click', function(){
    if (searchBoxVisible){
        searchBox.style.display = 'none';
    }else {
        searchBox.style.display = 'block';
    }

    searchBoxVisible = !searchBoxVisible;
});