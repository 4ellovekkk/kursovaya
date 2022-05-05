$('document').ready(function() {
    loadCards()
});

function loadCards() {
    $.getJSON('shop.json', function(data) {
        console.log(data);
        var out = '';
        for (var key in data) {
            out += '<div class="card">';
            out += '<figure>' + '<img src="' + data[key]['image'] + '">' + '<figcaption>' + data[key]['name'] + '</figcaption>' + '</figure>';
            out += '<div>' + '<a>' + 'Объём: ' + data[key]['size'] + '</a>' + '</div>';
            out += '<div>' + '<a>' + 'Цена за штуку: ' + data[key]['price'] + '</a>' + '</div>';
            out += ' <a href=" "> <div class="add">Добавить в Корзину</div></a>'
            out += '</div>';
        }
        out += '<div id="buttons">' + '<a href="shop.html">' + '<div class="pages">' + '1' + '</div>' + '</a>' + '<a href="shop_2.html">' + '<div class="pages">' + '2' + '</div>' + '</a>' + '</div>';
        $('#main_obl').html(out);
    })
}