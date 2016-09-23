/*function projectMapsSlideShow(currentSlide) {
    console.log("currentSlide");
    $("#project-maps").setAttribute("src", "maps" + currentSlide + ".PNG");
}

function projectPokemonSlideShow(currentSlide) {
    $("#project-pokemon").src = "pokemon" + currentSlide + ".PNG";
    $("#project-website").css({"background": "white"});
    $("#project-maps").css({"background": "white"});
}

//controls when to stop the slide show
var slideShowControl;

function clearCardBackground() {
    $("#project-website").css({"background": "white"});
    $("#project-pokemon").css({"background": "white",
        "color": "black"});
    $("#project-maps").css({"background": "white"});
    clearInterval(slideShowControl);
}

function projectMapsHoverEffect() {
    var test = 0;
    //to give the user an immediate response when hovered over the banner
    slideShowControl = setInterval(function () {
        test += 1;
        test = test % 3;
        projectMapsSlideShow(test);
    }, 1000);
}

function projectPokemonHoverEffect() {
    var test = 0;
    //to give the user an immediate response when hovered over the banner
    slideShowControl = setInterval(function () {
        test += 1;
        test = test % 3;
        projectPokemonSlideShow(test);
    }, 1000);
}*/

//hover effects
/*$("#project-maps").hover(
    projectMapsHoverEffect,
    clearCardBackground
);

$("#project-pokemon").hover(
    projectPokemonHoverEffect,
    clearCardBackground
);*/


//for projects-tray resize
/*$(".projects-tray").resize(function () {
    console.log("hello world");
    var screenSize = $("window").width();
    var traySize = $(".projects-tray").width();
    var articleWrapperMarginLeft = screenSize - traySize;
    console.log(articleWrapperMarginLeft);
    $(".article-wrapper").css({"margin-left": articleWrapperMarginLeft + 5});
});*/

//set projects-tray height
/*var projectsHeader = $(".projects-tray-header");
var projectsList = $(".projects-list");
console.log(projectsHeader.height());
projectsList.css({"padding-top": 2*projectsHeader.height()});*/
/*
projectsHeader.css({"width": projectsTray.width()});
function changeProjectTrayHeight () {
    var projectsHeader = $(".projects-tray-header");
    var projectsTray = $(".projects-tray");
    projectsHeader.css({"width": projectsTray.width()});
}

$(window).resize(changeProjectTrayHeight);*/


//on click
var projectCards = document.getElementsByClassName("card");
var menuArrow = document.getElementById("menu-arrow");
var articles = document.getElementsByClassName("article");
//var isTrayHidden = false;

function centerArticle() {

    var articleWrapper = $(".article-wrapper");
    var article = $(".article");
    //var trayWidth = $(".projects-tray").width();
    /*var windowWidth = $(window).width();
    //getting rid of the 'px' in padding-left
    var paddingLeft = parseInt(articleWrapper.css("padding-left"));
    var margin = windowWidth/2 - (articleWrapper.width()/2 + paddingLeft);

    articleWrapper.css({"margin-left": margin});*/

    article.removeClass("shrunk");
    articleWrapper.removeClass("shrunk");
    //articleWrapper.removeClass("col-md-9");
    //articleWrapper.addClass("col-md-8");
    //article.removeClass("col-md-9");
    article.addClass("col-md-8");

}

function shrinkProjectsTray() {
    var projectsTray = $(".projects-tray");
    projectsTray.addClass("slide-out");
    isTrayHidden = true;
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
    article.removeClass("col-md-8");
    //article.addClass("col-md-9");
    articleWrapper.addClass("shrunk");
    article.addClass("shrunk");

    //mobile
    /*if($(window).width() < 700) {
        projectsTray.removeClass("slide-out");

        articleWrapper.removeClass("col-md-8");
        articleWrapper.addClass("col-md-9");
        articleWrapper.addClass("shrunk");
    }*/
}

menuArrow.addEventListener("click", openProjectsTray, false);

/*
$(function(){
    $(".splash-page").typed({
        strings: ["Hi I'm Jeffrey.", "I'm an Engineering Student", "and I like to code."],
        typeSpeed: -50,
        backSpeed: -20,
        showCursor: true,
        cursorChar: "|"
    });
});*/

/*
$(".splash-page").click(function () {
    $(this).css({'transform' : 'translateX(100%)'});
});*/

/*
var cw = $('.card').width();
$('.card').css({
    'height': cw + 'px'
});*/