$(document).ready(function() {

    $('#itemslider').carousel({ interval: 2000 });

    $('.carousel-showmanymoveone .item').each(function() {
        var itemToClone = $(this);

        for (var i = 1; i < 6; i++) {
            itemToClone = itemToClone.next();

            if (!itemToClone.length) {
                itemToClone = $(this).siblings(':first');
            }

            itemToClone.children(':first-child').clone()
                .addClass("cloneditem-" + (i))
                .appendTo($(this));
        }
    });
});

var pageX = $(document).width();
var pageY = $(document).height();
var mouseY = 0;
var mouseX = 0;

$(document).mousemove(function(event) {
    //verticalAxis
    mouseY = event.pageY;
    yAxis = (pageY / 2 - mouseY) / pageY * 300;
    //horizontalAxis
    mouseX = event.pageX / -pageX;
    xAxis = -mouseX * 100 - 100;

    $('.box__ghost-eyes').css({ 'transform': 'translate(' + xAxis + '%,-' + yAxis + '%)' });

    //console.log('X: ' + xAxis);

});
