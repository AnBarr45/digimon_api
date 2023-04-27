function addDigimonTable(json, idx) {
    //let obj = JSON.parse(json);
    var NOMBRE = json.name;
    var LVL = json.level;
    var IMAGEN = json.img;
    var html = "\n        <tr class=\"container\">\n            <th scope=\"col-1\">N\u00B0".concat(idx, "</th>\n            <td scope=\"col\" >\n                  ").concat(NOMBRE, " \n            </td>\n            <td scope=\"col\">\n              ").concat(LVL, "\n            </td>\n            <td scope=\"col\">\n                <img class=\"img-thumbnail  \" src=\"").concat(IMAGEN, "\" id=\"digimon-img\" >\n            </td>\n        </tr>\n        ");
    return html;
}
document.addEventListener('DOMContentLoaded', function () {
    fetch('https://digimon-api.vercel.app/api/digimon')
        // Put response into json form
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log(data);
        var NAMEMAP = new Map();
        var TABLEBODY = document.querySelector("#tbody");
        for (var i = 0; i <= 9; i++) { // añade las tablas al doc y añade los nombres al map
            TABLEBODY.innerHTML += addDigimonTable(data[i], i + 1);
            NAMEMAP.set(i, data[i].name.toUpperCase());
        }
        document.querySelector("searchbtn").addEventListener("submit", function () {
            var SEARCH = document.querySelector('#seachbar');
            console.log(SEARCH);
            if (NAMEMAP.get(SEARCH)) {
                //todo: encontrar cómo sacar elementos del tbody
            }
        });
    })
        .catch(function (error) {
        console.log('Error:', error);
    });
    // Prevent default submission
    return false;
});
