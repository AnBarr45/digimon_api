function addDigimon(json: string, idx: number): string {
  let obj = JSON.parse(json);

  const nombre = obj.name;
  const lvl = obj.level;
  const imagen = obj.img;

  const html = `
        <tr class="container">
            <th scope="col-1">N°${idx}</th>
            <td scope="col" >
                  ${nombre} 
            </td>

            <td scope="col">
              ${lvl}
            </td>

            <td scope="col">
                <img class="img-thumbnail  " src="${imagen}" id="digimon-img" >
            </td>
        </tr>`
  return html

}

document.addEventListener('DOMContentLoaded', function () {
  fetch('https://digimon-api.vercel.app/api/digimon')
    // Put response into json form
    .then(response => response.json())
    .then(data => {

      console.log(data)

      const nameMap = new Map();
      const tableBody = document.querySelector("#tbody")


      for (let i = 0; i <= 9; i++) { // añade las tablas al doc y añade los nombres al map
        tableBody!.innerHTML += addDigimon(data[i], i + 1)
        nameMap.set(i, data[i].name.toUpperCase())
      }

      document.querySelector("searchbtn")!.addEventListener("submit", function () {
        const search = document.querySelector('#seachbar')!;
        console.log(search)
        if (nameMap.get(search)) {
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