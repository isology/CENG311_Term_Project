$(document).ready(function () {
   
    $("#contactForm").validate();

  
   

    // Autocomplete for country input
    var countries = [
        "United States",
        "Canada",
        "United Kingdom",
        "Germany",
        "France",
        "Italy",
        "Spain",
        "Australia",
        "Japan",
        "China",
        "India",
        "Brazil",
        "Mexico",
        "Turkey",
        "Rest of the World"
    ];
    $("#country").autocomplete({
        source: countries
    });

    $("#date").datepicker({
        dateFormat: "dd-mm-yy"
    });
});
