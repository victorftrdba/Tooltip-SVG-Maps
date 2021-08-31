$('.city').hover(function () {
  $(this).attr('class', 'active')
  $('.description').addClass('active');
  $('.description').html('Casa ' + $(this).attr('id') + ' 286m³');
}, function () {
  $('.description').removeClass('active');
});

$(document).on('mousemove', function (e) {
  $('.description').css({
    left: e.pageX - 35,
    top: e.pageY + 25,
  });
});