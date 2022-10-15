//Log in page for travel
$(".logIn").click(function() {
    let inputName = $(".infoName").val();
    const radioButtons = document.getElementsByClassName('radio');
    //alert(radioButtons[0].checked + " " + radioButtons[1].checked);
    let inputDate = $(".infoDate").val();
    let inputNat = $(".infoNat").val();
    if (radioButtons[1].checked) {
        $(".male").attr("src", "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQji2gG2PF3g3NbQFc7U6HP9gdXuf1g-tbvY5X61aA7kHN3vbqI");
    }
    $("#name").text(inputName);
    if (radioButtons[1].checked) {
        $("#sex").text("F");
    } else {
        $("#sex").text("M");
    }
    $("#bday").text(inputDate);
    $("#nat").text(inputNat);
    $(".visa").show();
    $(".ChooseCountryPage").show();
});

//China start page for Great Wall or restaurant
$(".China").dblclick(function() {
    $(".LogInPage").hide();
    $(".ChooseCountryPage").hide();
    $(".ChooseChinaDestinationPage").show();
});

//China page for Great Wall
$(".ChinaWall").click(function() {
    $(".ChooseChinaDestinationPage").slideUp();
    $(".ChinaGreatWall").slideDown();
    $(".ChinaEndPage").show();
});

//China page for restaurant
$(".ChinaRest").click(function() {
    $(".ChooseChinaDestinationPage").fadeOut();
    $(".ChinaRestaurant").fadeIn();
    $(".ChinaEndPage").show();
});

//China end page for Great Wall
$(".ChinaEndWallPage").hover(function() {
    $(".ChinaGreatWall").hide();
    alert("Woohoo!!! You have completed your journey!!!");
    $(".ChooseCountryPage").hide();
    $(".LogInPage").show();
    $(".ChinaEndPage").hide();
});

//China end page for restaurant
$(".ChinaEndRestPage").hover(function() {
    $(".ChinaRestaurant").hide();
    //alert("Woohoo!!! You have completed your journey!!!");
    $(".ChooseCountryPage").hide();
    $(".LogInPage").show();
    $(".ChinaEndPage").hide();
});

//France start page for Eiffel Tower or restaurant
$(".France").dblclick(function() {
    $(".LogInPage").hide();
    $(".ChooseCountryPage").hide();
    $(".ChooseFranceDestinationPage").show();
});

//France page for Eiffel Tower
$(".FranceTower").click(function() {
    $(".ChooseFranceDestinationPage").slideUp();
    $(".FranceEiffelTower").slideDown();
    $(".FranceEndPage").show();
});

//France page for restaurant
$(".FranceRest").click(function() {
    $(".ChooseFranceDestinationPage").fadeOut();
    $(".FranceRestaurant").fadeIn();
    $(".FranceEndPage").show();
});

//France end page for Eiffel Tower
$(".FranceEndTowerPage").hover(function() {
    $(".FranceEiffelTower").hide();
    alert("Woohoo!!! You have completed your journey!!!");
    $(".ChooseCountryPage").hide();
    $(".LogInPage").show();
    $(".FranceEndPage").hide();
});

//France end page for restarant
$(".FranceEndRestPage").hover(function() {
    $(".FranceRestaurant").hide();
    //alert("Woohoo!!! You have completed your journey!!!");
    $(".ChooseCountryPage").hide();
    $(".LogInPage").show();
    $(".FranceEndPage").hide();
});