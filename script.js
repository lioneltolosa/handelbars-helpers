var cast = {
    "characters": [
        {
            "name": "jon snow",
            "shortCode": "jon",
            "actor": "lio",
            "house": "girona",
            "location": "venezuela"
        },
        {
            "name": "jon snow",
            "shortCode": "jon",
            "actor": "lio",
            "house": "girona",
            "location": "venezuela"
        },
        {
            "name": "jon snow",
            "shortCode": "jon",
            "actor": "lio",
            "house": "girona",
            "location": "venezuela"
        },
        {
            "name": "jon snow",
            "shortCode": "jon",
            "actor": "lio",
            "house": "girona",
            "location": "venezuela"
        },
        {
            "name": "jon snow",
            "shortCode": "jon",
            "actor": "lio",
            "house": "girona",
            "location": "venezuela"
        }
    ]
}

$(document).ready(function (){
    var characterstemplate = $("#characters-template").html();

    var compiledCharacterTemplate = Handlebars.compile(characterstemplate);
    $(".characters-list-container").html(compiledCharacterTemplate(cast.characters[2]));
});