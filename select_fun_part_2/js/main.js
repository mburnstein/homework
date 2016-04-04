// 1.	Slide the header element up when it is clicked on.

$('header').on('click', function(){
    $('header').slideUp();
});  //done

// 2.	Remove the purplebox class from everything.

    $('.box').removeClass('purplebox');  //Worked

    //3.	Hide all of the div’s in #row4

    //$('#row4').hide("divs");  //done

// 4.	Add a paragraph that says “I have been added” to all boxes with class “add-para” (Hint: you'll need to look up the append() method)

    $('.add-para').append('<p>I have been added</p>');

// 5.	Add a class in your css and add it to all items with the class .box

    $('.box').addClass('color'); //done

// 6.	Show the footer when the anchor in #box2 is clicked

    $('#box2 a').on('click',function(){
        $('footer').show();
    }) // done

// 7.	Change the styling of the span inside of #box3 by adding a class (and style that class in CSS)

    $('#box3 span').addClass('spanColor'); //done

// 8.	Add a unique class to your CSS and add it to the articles in #row1

    $('#row1 article').addClass('border'); //done

// 9.	Change the background color of all the articles

    $('article').addClass('backgroundColor'); //done

// 10.	Change the font color of all the articles in row 2

    $('#row2 article').addClass('rowColor'); // done

// 11.	Select any spans that are siblings of an h4 (using the .siblings() method) and hide them.

    $('h4').siblings('span').hide();  //done

// 12.	Clicking on #box7 should hide the span within the h2

    $('#box7').on('click', function(){
        $('#box7 h2 span').hide()
    }) //done

// 13.	Add an h3 that says "Hello there!" to the beginning of #box12 (Hint: you'll need to look up the prepend() method)

    $('#box12 p').prepend('<h3>Hello there!</h3>'); //done

// 14.	SlideUp all the h1s on the page

    $('h1').slideUp(1500); //done

// 15. Add the selected class [already in the CSS] to the divs in #row4

    $('#row4 div').addClass('selected'); //done

// 16.	Clicking reset should remove the selected class from everything and fade in the header element, the footer, and all elements with the class .box

    $('button').on('click',function(){
        $('body').removeClass('selected') //not specific enough not working
        $('header, footer, .box').fadeIn(1000); //works on footer
    }) 
