var change;

change = function() {
  var update = { meal: $('.js-meals').html('Breakfast') };
};


var changeBack;

changeBack = function() {
  var update = { meal: $('.js-meals').html('Dinner') };
};


var dropChange;

dropChange = function() {
  var value = { dropdown: $('.js-dropdown :selected').text() };
  $('.js-meals2').html(value['dropdown']);
};


var bananaChange;

bananaChange = function() {
 var value = $('.js-bananaDrop :selected').text();
 if (value == 'Banana') {
   $('.js-banana1').show();
   $('.js-banana2').hide();
 } else if (value == 'No Banana!') {
   $('.js-banana1').hide();
   $('.js-banana2').show();
 }
};

var showMessage;
saveMessage = function() {
  var login = { username: $('.js-username').val(), password: $('.js-password').val()};
  console.log(login);
};

var clearMessage;
clearMessage = function() {
  var reset = { username: $('.js-username').val(''), password: $('.js-password').val('')};
  console.log(reset);
}

$('.js-switch').on('click', change);
$('.js-switchback').on('click', changeBack);
$('.js-dropdown').on('change', dropChange);
$('.js-bananaDrop').on('change', bananaChange);
$('.js-save').on('click', saveMessage);
$('.js-reset').on('click', clearMessage);
