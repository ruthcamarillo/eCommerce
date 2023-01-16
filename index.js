var slideIndex = 0;

carousel();
//the carosel is what makes the for and if statements keep loopin'

function carousel() {
    var i; //index starts at 0 so 0, 1, 2 the array has 3 items
    var x = document.getElementsByClassName("mySlides");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    //this states that if index is less than the length which is 3 the images will display none, will be hidden. if this wasent here you would be able to see all three images at the same time
    //loops until the statement is false so i++ adds on, once the statement is untrue we continue to the nex statement


    slideIndex++;

    if (slideIndex > x.length) { slideIndex = 1 }

    x[slideIndex - 1].style.display = "block";

    //this statement is if our index is greater than the length of our array which is 3, the images will display block so again you will only see one image at a time

    setTimeout(carousel, 3000); // Change image every 3 seconds
}