function addDigimon(json, idx) {
    var obj = JSON.parse(json);
    var nombre = obj.name;
    var lvl = obj.level;
    var imagen = obj.img;
    var html = "\n        <tr class=\"container\">\n            <th scope=\"col-1\">N\u00B0".concat(idx, "</th>\n            <td scope=\"col\" >\n                  ").concat(nombre, " \n            </td>\n\n            <td scope=\"col\">\n              ").concat(lvl, "\n            </td>\n\n            <td scope=\"col\">\n                <img class=\"img-thumbnail  \" src=\"").concat(imagen, "\" id=\"digimon-img\" >\n            </td>\n        </tr>");
    return html;
}
document.addEventListener('DOMContentLoaded', function () {
    fetch('https://digimon-api.vercel.app/api/digimon')
        // Put response into json form
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log(data);
        var nameMap = new Map();
        var tableBody = document.querySelector("#tbody");
        for (var i = 0; i <= 9; i++) { // añade las tablas al doc y añade los nombres al map
            tableBody.innerHTML += addDigimon(data[i], i + 1);
            nameMap.set(i, data[i].name.toUpperCase());
        }
        document.querySelector("searchbtn").addEventListener("submit", function () {
            var search = document.querySelector('#seachbar');
            console.log(search);
            if (nameMap.get(search)) {
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
