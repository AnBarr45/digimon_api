function addDigimon(json, idx) {
    var html = "\n        <tr class=\"container\">\n            <th scope=\"col-1\">N\u00B0".concat(idx + 1, "</th>\n            <td scope=\"col\" >\n                  ").concat(json.name, " \n            </td>\n\n            <td scope=\"col\">\n              ").concat(json.level, "\n            </td>\n            <td scope=\"col\">\n                <img class=\"img-thumbnail  \" src=\"").concat(json.img, "\" id=\"digimon-img\" >\n            </td>\n                        \n          \n        </tr>");
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
        for (var i = 0; i < 10; i++) { // añade las tablas y los nombres al map
            tableBody.innerHTML += addDigimon(data[i], i);
            nameMap.set(i, data[i].name.toUpperCase());
        }
        document.querySelector("searchbtn").onsubmit(function () {
            var search = document.querySelector('#seachbar').value.toUpperCase();
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
