function addDigimon(json, idx) {

  const html = `
        <tr>
            <th scope="col-1">N°${idx + 1}</th>
            <td scope="col">
                <a
                  class="btn dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >
                  ${json.name} 
                  </a>
            </td>
            <td scope="col-6">
            
                <img class="img-thumbnail  " src="${json.img}" id="digimon-img" >
                        
            </td>
                        
            </td>
        </tr> 
        <div id="hidden_stats">
    
        </div>
          `
  return html

}

document.addEventListener('DOMContentLoaded', function () {
  fetch('https://digimon-api.vercel.app/api/digimon')
    // Put response into json form
    .then(response => response.json())
    .then(data => {
      console.log(data)

      let nameArray = []
      console.log(nameArray)
      // Get currency from user input and convert to upper case
      const tableBody = document.querySelector("#tbody")

      let page = 1;
      for (i = 0; i < 10; i++) {
        tableBody.innerHTML += addDigimon(data[i], i)
      }




      document.querySelector("searchbtn").onsubmit() = function () {
        const search = document.querySelector('#seachbar').value.toUpperCase();







      }
    })
    .catch(error => {
      console.log('Error:', error);
    });
  // Prevent default submission
  return false;



})