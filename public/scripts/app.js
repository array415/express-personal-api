console.log("Sanity Check: JS is working!");



$(document).ready(function(){
  var allAnimals = [];
  var $animalsList = $('#animalHolder');
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

  $animalsList.on('click', '.deleteBtn', function(){
    $.ajax({
      method: 'DELETE',
      url: '/api/animals/'+ $(this).attr('data-id'),
      success: deleteSuccess,
      error: error
    });
  });


  function success(data){
    allAnimals = data;
    render();
  }

  function error(){
    console.log('nah');
  }

  function newAnimal(animal){
    console.log(animal);
    allAnimals.push(animal);
    render();
  }

  function deleteSuccess(json){
    var animal = json;              
    var animalId = animal._id;

    for(var i = 0; i < allAnimals.length; i++){
      if(allAnimals[i]._id === animalId) {
        allAnimals.splice(i, 1);
        break;
      }
    }
    render();
  }


  function render() {
    $animalsList.empty();
    var animalHtml = template({animal: allAnimals});
    $animalsList.append(animalHtml);
  }

});
