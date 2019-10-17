var link = "https://programming-quotes-api.herokuapp.com/quotes/random"
var link2 = "https://cors-anywhere.herokuapp.com/https://api.ritekit.com/v1/images/quote?quote=";

function refreshPage() {
    window.location.reload();
}


function making_image() {
    $.getJSON(link2, function (data2) {
        var url = data2.url;
        $('.picture').attr('src', url);
    });
}

function getting_quote() {
    $.getJSON(link, function (data) {
        // console.log(data);
        var quote = data.en;
        var author = data.author;
        // console.log(quote);
        // console.log(author);
        link2 = link2 + quote + "&author=" + author + "&fontSize=35&quoteFont=Lora&quoteFontColor=%234f4f4f&authorFont=Lato%20Black&authorFontColor=%23e5e5e5&enableHighlight=1&highlightColor=%23f0ea66&bgType=gradient&backgroundColor=%23000000&gradientType=linear&gradientColor1=%232193b0&gradientColor2=%236dd5ed&animation=none&client_id=27c45ae7006cf108fadf39fcd273c0c3f665d8fd3ebd";
        making_image();
    });
}

getting_quote();