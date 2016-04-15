
// Create an array of image sources paths

var images = ['image_1.jpg', 'image_2.jpg', 'image_3.jpg', 'image_4.jpg', 'image_5.jpg', 'image_6.jpg'];

// set a variable for our currentPosition

var currentPosition = 0;

  // If clicks next button

$('#next').on('click', function(){

    currentPosition = currentPosition+1;
    $('#image-to-vote-on').attr('src', "images/" + images[currentPosition]);
    //if last one disable the next button
    //enable prev button
})

 $('#prev').on('click', function(){

    currentPosition = currentPosition-1;
    $('#image-to-vote-on').attr('src', "images/" + images[currentPosition]);
    if (currentPosition === 0) {
      $('#prev').setAttribute()
    }
    //enable the next button
}) 

//If clicks prev button

//NOTE:  Basically set up a counter that is not connected to the array, then
//at the end, make a command that says use the new counter value to go to that 
//img in the array
