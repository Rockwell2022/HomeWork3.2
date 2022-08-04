const $ul = document.getElementById('vehicle_list');

const addVehicles = (vehicle) =>{
     const isFilm = vehicle?.['films']?.[1] ?? "Isn't more films"; 
     const $li = document.createElement('li');
     $li.className = 'list-group-item';
     //$li.innerText = model + ' Made by ' + manufacturer + ' (' + vehicleClass + ')';
     $li.innerText = `${vehicle['model']} Made by ${vehicle['manufacturer']} (${vehicle['vehicle_class']}) More Then One Film: ${isFilm}`;
     $ul.appendChild($li);
};



/*fetch ('https://swapi.dev/api/vehicles')
  .then((Response) => Response.json())
  .then((json) =>{ 
    
    json.results.forEach(vehicle => {
        addVehicles(vehicle);

    });
});
*/

axios.get('https://swapi.dev/api/vehicles')
    .then((response) => {
        response.data.results.forEach(vehicle => {
            addVehicles(vehicle);
    
        });
    });


    window.onload =  () => {
          document.body.classList.add('loaded');
      }
