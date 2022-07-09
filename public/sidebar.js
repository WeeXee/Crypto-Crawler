/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    console.log(document.getElementById("myDropdown").classList);
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    console.log(e.target)
    if (!e.target.matches('.gg-menu') &&!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}