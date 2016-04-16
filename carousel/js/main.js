
// Create an array of image sources paths

var images = ['image_1.jpg', 'image_2.jpg', 'image_3.jpg', 'image_4.jpg', 'image_5.jpg', 'image_6.jpg'];

// set a variable for our currentPosition

var currentPosition = 0;

  // If clicks next button

$('#next').on('click', function(){

    $('#prev').prop("disabled", false);
    currentPosition = currentPosition+1;
    $('#image-to-vote-on').attr('src', "images/" + images[currentPosition]);
    //enable prev button
    if (currentPosition === 5) {
      $('#next').prop("disabled", true);
    }
})

 $('#prev').on('click', function(){

    $('#next').prop("disabled", false);
    currentPosition = currentPosition-1;
    $('#image-to-vote-on').attr('src', "images/" + images[currentPosition]);
    if (currentPosition === 0) {
      $('#prev').attr("disabled", true);
    }
    //enable the next button
}) 

//Now for the voting buttons

//Set currentLikes variable to 0
    var currentLikes = 0;
//If a user clicks on the thumbs up button, currentLikes=currentLikes+1
    $('#upvote').on('click',function(){
        currentLikes=currentLikes+1;
        $('#votes').html('Likes: ' + currentLikes);
    })
//If a user clicks on the thumbs down button, currentLikes=currentLikes-1 
    $('#downvote').on('click',function(){
        currentLikes=currentLikes-1;
        $('#votes').html('Likes: ' + currentLikes);
    })
