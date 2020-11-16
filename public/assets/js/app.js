$(document).ready(function () {
    // Click event for Devour or Once More
    $('.burger-handler').on('click', function (event) {
      var id = $(this).data('id');
      var devouredState = $(this).data('devoured');
  
      // Check if value is T/F, change value accordingly
      if (devouredState) devouredState = false;
      else devouredState = true;
  
      var newDevouredState = {
        isDevoured: devouredState
      };
  
      // PUT request
      $.ajax(`/api/burgers/${id}`, {
        type: 'PUT',
        data: newDevouredState
      })
        .then(function () {
          console.log(`Changed Devoured State to: ${devouredState}`);
  
          // Reloading page
          location.reload();
        })
        .catch(function (err) {
          if (err) throw err;
        });
    });
  
    // Click event for button
    $('.create-form').on('submit', function (event) {
      event.preventDefault();
  
      var newBurger = {
        name: $('#burger').val().trim()
      };
  
      // POST request
      $.ajax('/api/burgers', {
        type: 'POST',
        data: newBurger
      })
        .then(function () {
          // Reload
          location.reload();
        })
        .catch(function (err) {
          if (err) throw err;
        });
    });
  });