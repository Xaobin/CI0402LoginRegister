
$('textarea').keyup(function() {

  var characterCount = $(this).val().length,
      current = $('#current'),
      maximum = $('#maximum'),
      theCount = $('#the-count');

  current.text(characterCount);



});

$('#collPlus').on('shown.bs.collapse', function () {
      window.location.replace("#end");
    $('#metext').focus();
    

});
