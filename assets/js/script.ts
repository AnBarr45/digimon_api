function addDigimonData(json: any, idx: number): string {
  const NOMBRE = json.name;
  const LVL = json.level;
  const IMAGEN = json.img;

  const html =
    `
        <tr class="container" id="lista-digimon">
            <th scope="col-1">N°${idx}</th>
            <td scope="col" >
                  ${NOMBRE} 
            </td>
            <td scope="col">
              ${LVL}
            </td>
            <td scope="col">
                <img class="img-thumbnail  " src="${IMAGEN}" id="digimon-img" >
            </td>
        </tr>
        `
  return html

}


function tableupdate(table: Element, movbtn: Element | null, data: JSON[], p: number) {
  for (let e = 0; e < 8; e++) { // añade las tablas al doc 
    let i = e + (8 * p);
    if (p >= 26 || p < 0) { break } // termina el loop para que no pase de la primera ni la última página
    else if (movbtn === null) { // como se ejecuta al principio, necesito que simplemente añada a la tabla, no que saque
      table.innerHTML += addDigimonData(data[i], i++);
    }
    else if (movbtn !== null) { // remueve y re añade digimons después de iniciar
      document.querySelector("#lista-digimon")?.remove()
      table.innerHTML += addDigimonData(data[i], i++);
    }
  };

}



document.addEventListener('DOMContentLoaded', function () {
  fetch('https://digimon-api.vercel.app/api/digimon')

    .then(response => response.json())
    .then(data => {


      const NAMEMAP = new Map();
      const searchbutton = document.querySelector("#searchbtn");
      const previous = document.querySelector("#prev")
      const next = document.querySelector("#nxt")
      const TABLEBODY = document.querySelector("#tbody");


      let pcount = 0;
      tableupdate(TABLEBODY!, null, data, pcount)
      pcount++;

      next?.addEventListener("click", function () { tableupdate(TABLEBODY!, next, data, pcount); pcount = pcount > 0 ? pcount + 1 : pcount })
      previous?.addEventListener("click", function () { tableupdate(TABLEBODY!, previous, data, pcount); pcount = pcount < 26 ? pcount - 1 : pcount })


      //NAMEMAP.set(i, data[i].name.toUpperCase());

      searchbutton?.addEventListener("submit", function () {
        const SEARCH = document.querySelector('#seachbar')!;
        console.log(SEARCH);
        if (NAMEMAP.get(SEARCH)) {
          TABLEBODY!.remove()

        };

      });
    })
    .catch(error => {
      console.log('Error:', error);
    });
  return false;



})