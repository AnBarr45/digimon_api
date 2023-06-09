function addDigimonData(json, idx) {
    var NOMBRE = json.name;
    var LVL = json.level;
    var IMAGEN = json.img;
    var html = "\n        <tr class=\"container\" id=\"lista-digimon\">\n            <th scope=\"col-1\">N\u00B0".concat(idx, "</th>\n            <td scope=\"col\" >\n                  ").concat(NOMBRE, " \n            </td>\n            <td scope=\"col\">\n              ").concat(LVL, "\n            </td>\n            <td scope=\"col\">\n                <img class=\"img-thumbnail  \" src=\"").concat(IMAGEN, "\" id=\"digimon-img\" >\n            </td>\n        </tr>\n        ");
    return html;
}
function tableupdate(table, movbtn, data, p) {
    var _a;
    for (var e = 0; e < 8; e++) { // añade las tablas al doc 
        var i = e + (8 * p);
        if (p >= 26 || p < 0) {
            break;
        } // termina el loop para que no pase de la primera ni la última página
        else if (movbtn === null) { // como se ejecuta al principio, necesito que simplemente añada a la tabla, no que saque
            table.innerHTML += addDigimonData(data[i], i + 1);
        }
        else { // remueve y re añade digimons después de iniciar
            (_a = document.querySelector("#lista-digimon")) === null || _a === void 0 ? void 0 : _a.remove();
            table.innerHTML += addDigimonData(data[i], i + 1);
        }
    }
    ;
}
function digimonSearch(el, table, data) {
    var _a;
    var elemt = document.getElementById(el);
    var dmon = elemt.value.toUpperCase();
    if (elemt === null) {
        alert("the form is empty");
    }
    for (var i = 0; i < 8; i++) {
        if (data[i].name.toUpperCase() == dmon) {
            (_a = document.querySelector("#lista-digimon")) === null || _a === void 0 ? void 0 : _a.remove();
            table.innerHTML += addDigimonData(data[i], i + 1);
        }
    }
}
// CARGA LA PAGINA Y EJECUTA TODO DENTRO
document.addEventListener('DOMContentLoaded', function () {
    fetch('https://digimon-api.vercel.app/api/digimon')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var searchbutton = document.querySelector("#searchbtn");
        var previous = document.querySelector("#prev");
        var next = document.querySelector("#nxt");
        var TABLEBODY = document.querySelector("#tbody");
        var pcount = 0;
        tableupdate(TABLEBODY, null, data, pcount);
        next === null || next === void 0 ? void 0 : next.addEventListener("click", function () {
            pcount = pcount >= 0 ? pcount + 1 : pcount;
            tableupdate(TABLEBODY, next, data, pcount);
        });
        previous === null || previous === void 0 ? void 0 : previous.addEventListener("click", function () {
            pcount = pcount < 26 && pcount != 0 ? pcount - 1 : pcount;
            tableupdate(TABLEBODY, previous, data, pcount);
        });
        searchbutton === null || searchbutton === void 0 ? void 0 : searchbutton.addEventListener("click", function (e) {
            e.preventDefault();
            digimonSearch("#searchbar", TABLEBODY, data);
        });
    })
        .catch(function (error) {
        console.log('Error:', error);
    });
    return false;
});
