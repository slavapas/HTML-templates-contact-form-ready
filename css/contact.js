$(function () {
$('#contact-form').on('submit', function (e) {
 //prevent default submit
   e.preventDefault();
            $.ajax({
                type: "POST",
                url: "contact.php",
                data: $(this).serialize(),
                success: function (data) {
                   $('#contact-form')[0].reset();
                  }
              });
        //return false; 
        });
 });
      
