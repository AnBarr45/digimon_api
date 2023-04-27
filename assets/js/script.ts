function addDigimonTable(json: any, idx: number): string {
  //let obj = JSON.parse(json);

  const NOMBRE = json.name;
  const LVL = json.level;
  const IMAGEN = json.img;

  const html =
    `
        <tr class="container">
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

document.addEventListener('DOMContentLoaded', function () {
  fetch('https://digimon-api.vercel.app/api/digimon')
    // Put response into json form
    .then(response => response.json())
    .then(data => {

      console.log(data)

      const NAMEMAP = new Map();
      const TABLEBODY = document.querySelector("#tbody")




      for (let i = 0; i <= 7; i++) { // añade las tablas al doc y añade los nombres al map
        TABLEBODY!.innerHTML += addDigimonTable(data[i], i + 1)
        NAMEMAP.set(i, data[i].name.toUpperCase())
      }

      document.querySelector("searchbtn")!.addEventListener("submit", function () {
        const SEARCH = document.querySelector('#seachbar')!;
        console.log(SEARCH)
        if (NAMEMAP.get(SEARCH)) {
          //todo: encontrar cómo sacar elementos del tbody
        }

      })
    })
    .catch(error => {
      console.log('Error:', error);
    });
  // Prevent default submission
  return false;



})