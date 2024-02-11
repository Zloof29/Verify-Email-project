$(document).ready(function() {
    $(`#btn`).on(`click`, function(){
        $.ajax({
            url: 'https://api.chucknorris.io/jokes/random',
            method: 'GET',
            success: function(data) {
                createCard(data);
            }
        });
    });
    addImageToHtml();
});

function createCard(data) {
    $("#joke").text("");

    const div = $(`<div></div>`);
    $(div).addClass(`card mt-m`);
    const cardBody = $(`<div></div>`);
    $(cardBody).addClass(`card-body`);
    const cardText = $(`<p></p>`);
    $(cardText).addClass(`card-text`);
    $(cardText).text(data.value);
    $("#joke").append(div);
    $(div).append(cardBody);
    $(cardBody).append(cardText);
}

function addImageToHtml() {
    const image = $("<img>");
    image.attr("src", "https://pngimg.es/d/chuck_norris_PNG6.png");
    image.addClass(`image`);
    $(`#cardRight`).append(image);
}