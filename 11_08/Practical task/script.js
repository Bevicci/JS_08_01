const patterns = ['Ketogenic', 'Mediterranean', 'Pescetarian', 'Vegetarian', 'Vegan'];

function dropdownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('input') && !event.target.matches('.dropdown-content')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

filter();

function filter() {
    patterns.forEach(element => {
        if (document.getElementById(element).checked) {
            document.getElementById('row' + element).style.display = "block";
        } else {
            document.getElementById('row' + element).style.display = "none";
        }
    });
};