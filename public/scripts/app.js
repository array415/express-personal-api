console.log("Sanity Check: JS is working!");
$(document).ready(function(){
  var $animalsList = $('.animalHolder');
  var template;
  var allAnimals = [];

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

  $('.delete').on('click', function(e){
    console.log(this._id);
    console.log('wow');
    $.ajax({
      method: 'DELETE',
      url:'/api/animals/' + this._id,
      success: deleteSuccess
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

  console.log(animal);
  console.log(allAnimals);
}

function deleteSuccess(deleteAnimal){
  console.log(this._id);
  console.log(deleteAnimal._id);
  this.remove();
  console.log('ok');
}

function render() {
  $animalsList.empty();
  var animalHtml = template({animal: allAnimals});
  $animalsList.append(animalHtml);
}

});
