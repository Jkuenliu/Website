function slideOutTextAndPicture() {
    $('#profile-pic').addClass("show");
    $('#intro-name').addClass("show");
}
function slideInNameText() {
    $('#intro-name').removeClass("show");
}

function slideOutIdentityText() {
    $("#intro-identity").addClass("show");
}

function slideInIdentityText() {
    $("#intro-identity").removeClass("show");
}

function slideOutActionText() {
    $('#intro-action').addClass("show");
}

function slideInTextAndPicture() {
    $('#profile-pic').removeClass("show");
    $("#intro-action").removeClass("show");
}

/* should have done it with css classes. Oh well i'll change it later I guess */
function shrinkCovers() {
    //removeBottomCover();
    //translateBorder();

    slideBottomCover(removeBottomCover);
    shrinkTopCover(removeTopCover);
}

function shrinkTopCover(callback) {
    $("#top-cover").css({"height": "0vh"});
    //$("#profile-pic").addClass("remove");
    setTimeout(callback, 800);
}

function removeTopCover() {
    $("#top-cover").addClass("removed");
}


function removeBottomCover() {
    //$("#bottom-cover").addClass("removed");
    $("body").css("overflow", "auto");
}

function slideBottomCover(callback) {
    $("#bottom-cover").css({"transform": "translateY(100%)",
                            "-webkit-transform": "translateY(100%)"});
    setTimeout(callback, 800);
}

//animation intro
setTimeout(slideOutTextAndPicture, 1000);
setTimeout(slideInNameText, 2500);
setTimeout(slideOutIdentityText, 3500);
setTimeout(slideInIdentityText, 5000);
setTimeout(slideOutActionText, 6000);
setTimeout(slideInTextAndPicture, 7000);
setTimeout(shrinkCovers, 8000);

function projectMapsSlideShow(currentSlide) {
    $("#project-maps").css({"background": "url(maps" + currentSlide + ".PNG)"});
}

function projectPokemonSlideShow(currentSlide) {
    $("#project-pokemon").css({"background": "url(pokemon" + currentSlide + ".PNG)",
                               "color": "white"});
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
    $("#project-maps").css({"background": "url(maps0.PNG)"});
    slideShowControl = setInterval(function () {
        test += 1;
        test = test % 3;
        projectMapsSlideShow(test);
    }, 1000);
}

function projectPokemonHoverEffect() {
    var test = 0;
    //to give the user an immediate response when hovered over the banner
    $("#project-pokemon").css({"background": "url(pokemon0.PNG)",
        "color": "white"});
    slideShowControl = setInterval(function () {
        test += 1;
        test = test % 3;
        projectPokemonSlideShow(test);
    }, 1000);
}

//hover effects
$("#project-maps").hover(
    projectMapsHoverEffect,
    clearCardBackground
);

$("#project-pokemon").hover(
    projectPokemonHoverEffect,
    clearCardBackground
);