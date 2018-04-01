$(document).ready(function() {
    setTimeout(function() {
        var preloader = document.getElementById("page-preloader");
        var app = document.getElementById("app");
        if( !preloader.classList.contains('done') ){
            preloader.classList.add('done');
            app.classList.remove('hide');
        }
    }, 1500)
});