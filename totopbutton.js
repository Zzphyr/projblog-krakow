const mybutton = document.getElementById("gototop");
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    // document.body.scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}


function showBtn() {
    if (window.innerWidth > 576) {
        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function () {
            scrollFunction()
        };
        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }
    } else {
        // for some reason it does not work and I don't know why
        mybutton.style.display = "none";
    }
}

showBtn()

// run and check when resizing
window.addEventListener('resize', showBtn());