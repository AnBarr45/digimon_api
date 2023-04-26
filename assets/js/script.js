function addDigimon(json, idx) {

  const html = `
        <tr class="container">
            <th scope="col-1">N°${idx + 1}</th>
            <td scope="col" >
                  ${json.name} 
            </td>

            <td scope="col">
              ${json.level}
            </td>
            <td scope="col">
                <img class="img-thumbnail  " src="${json.img}" id="digimon-img" >
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
      const nameMap = new Map();

      const tableBody = document.querySelector("#tbody")
      

      for (i = 0; i < 10; i++) {
        tableBody.innerHTML += addDigimon(data[i], i)
        nameArray.set(i,data[i].name.toUpperCase())
      }


      document.querySelector("searchbtn").onsubmit() = function () {
        const search = document.querySelector('#seachbar').value.toUpperCase();
        if (nameMap.get(search)){

        }

      }
    })
    .catch(error => {
      console.log('Error:', error);
    });
  // Prevent default submission
  return false;



})