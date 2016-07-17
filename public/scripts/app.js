console.log("Sanity Check: JS is working!");



$(document).ready(function(){
  var allAnimals = [];
  var $animalsList = $('.animalHolder');
  var template;

  var source = $('.template').html();
  template = Handlebars.compile(source);

  $.ajax({
    method: 'GET',
    url: '/api/animals',
    success: success,
  });

  $('.createNew').on('submit', function(e){
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/animals',
      data: $(this).serialize(),
      success: newAnimal
    });
  });

  $animalsList.on('click', '.deleteBtn', function() {
    $.ajax({
      method: 'DELETE',
      url: '/api/animals/'+$(this).attr('data-id'),
      success: deleteBookSuccess,
      error: function(){
        console.log('error');
      }
    });
  });

  function success(data){
    allAnimals = data;
    render();
  }

  function newAnimal(animal){
    // $('.createNew input').val('');
    allAnimals.push(animal);
    render();
  }

  function deleteBookSuccess(json) {
    var animal = json;
    var animalId = animal._id;
    console.log('wow');
    allAnimals.splice(0, 1);
    render();
  }

  function render() {
    $animalsList.empty();
    var animalHtml = template({animal: allAnimals});
    $animalsList.append(animalHtml);
  }

});
