//on click
var projectCards = document.getElementsByClassName("card");
var menuArrow = document.getElementById("menu-arrow");
var articles = document.getElementsByClassName("article");
//var isTrayHidden = false;

//calculating the initial margin needed for the article
var screenWidth = $(window).width();
//var trayWidth = document.getElementsByClassName("projects-tray")[0].offsetWidth;
var articleWrapperWidth = document.getElementsByClassName("article-wrapper")[0].offsetWidth;
var margin = (screenWidth - articleWrapperWidth) / 2;
console.log(margin);

//$(".article-wrapper").css({"margin-left": margin + "px"});

function centerArticle() {

    var articleWrapper = $(".article-wrapper");
    var article = $(".article");
    //var trayWidth = $(".projects-tray").width();
    /*var windowWidth = $(window).width();
    //getting rid of the 'px' in padding-left
    var paddingLeft = parseInt(articleWrapper.css("padding-left"));
    var margin = windowWidth/2 - (articleWrapper.width()/2 + paddingLeft);

    articleWrapper.css({"margin-left": margin});*/

    //article.removeClass("shrunk");
    articleWrapper.removeClass("shrunk");


    //articleWrapper.removeClass("col-md-9");
    //articleWrapper.addClass("col-md-8");
    //article.removeClass("col-md-9");


    //article.addClass("col-md-8");

}

function shrinkProjectsTray() {
    var projectsTray = $(".projects-tray");
    projectsTray.addClass("slide-out");
    /*if($(window).width() < 700) {
        projectsTray.removeClass("slide-out");
    }*/
    centerArticle();
}

function removeCurrentArticle() {
    var currentArticle = $(".article.show").removeClass("show");
}

function removeClickedCard(index) {
    projectCards[index].className += " removed";
}

function addClickedArticle(index) {
    articles[index].className += " show";
}

function revealMenuArrow() {
    $("#menu-arrow").addClass("show");
}

function addOldCard() {
    $(".card.removed").removeClass("removed");
}

function openNewArticle() {
    document.getElementById('pokemon-video').pause();

    shrinkProjectsTray();

    var cardIndex = $(this).index(".card");
    //console.log(cardIndex);
    addOldCard();
    removeClickedCard(cardIndex);
    removeCurrentArticle();
    addClickedArticle(cardIndex);

    setTimeout(revealMenuArrow, 700);
}

for(var i=0; i < 4 ;i++){
    projectCards[i].addEventListener("click", openNewArticle, false);
}



//clicking the menu-button
function openProjectsTray() {
    var articleWrapper = $(".article-wrapper");
    var article = $(".article");
    var projectsTray = $(".projects-tray");
    var menuArrow = $("#menu-arrow");

    menuArrow.removeClass("show");
    projectsTray.removeClass("slide-out");

    //articleWrapper.removeClass("col-md-8");
    //articleWrapper.addClass("col-md-9");

    //article.removeClass("col-md-8");

    //article.addClass("col-md-9");

    articleWrapper.addClass("shrunk");
    //article.addClass("shrunk");

    //mobile
    /*if($(window).width() < 700) {
        projectsTray.addClass("slide-out");
    }*/
}

menuArrow.addEventListener("click", openProjectsTray, false);


$(function(){
    $(".profile-card .intro-message").typed({
        strings: ["Hi! My name is Jeffrey and I like to code things :)"],
        typeSpeed: 40,
        startDelay: 500,
        showCursor: false
    });
});