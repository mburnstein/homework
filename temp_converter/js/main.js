
//Wait for #fahrenheit_to_celsius click

$('#fahrenheit_to_celsius').on('click', function(){


//Grab string from #temperature and store in variable

    var fahrenheit = $('#temperature').val();
    

//parseFloat convert to number

    var intNumber=parseFloat(fahrenheit);

//convert to celsius

    var celsius=(intNumber-32)/1.8;

//produce the result and store in variable

    $('#result').html(celsius);
//Display celsius variable html method

})

