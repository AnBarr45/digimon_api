function addDigimon(data, idx) {

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
                  ${data.name} 
              
                  </a>
                  
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
      for (i in data) {
        nameArray.push(data[i].name.toUpperCase())
      }
      nameArray.sort()

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