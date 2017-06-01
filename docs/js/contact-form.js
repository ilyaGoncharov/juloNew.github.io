$(document).ready(function() {
	/*$("#submitForm").click(function() {
		console.log("пппп");
	});*/

	// Get the messages div.
    /*Эти блоки можно будет потом наделить способностью показывать галочки/крестики*/
    var formMessages = $('#form-messages');

	// Get the form.
    var form = $('#form');
    
	// Set up an event listener for the contact form.
    $(form).submit(function(e) {

        // Stop the browser from submitting the form.
        e.preventDefault();    

		// Serialize the form data.
        var formData = $(form).serialize();

        console.log($(this).serialize());

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })

        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            // Set the message text.
            $(formMessages).text(response);

            // Clear the form.
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
            $('#contact').val('');
        })

        .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });
    }); 
});

