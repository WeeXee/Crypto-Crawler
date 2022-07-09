// api url

// Defining async function
async function getapi() {

    // Storing response
    const response = await fetch("http://localhost:3000/api");

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    show(data);
    return data;
}
// Calling that async function
getapi();

// Function to define innerHTML for HTML table
function show(data) {
    let tab =
        `<tr>
          <th>rank</th>
          <th>name</th>
          <th>price</th>
          <th>day</th>
          <th>week</th>
          <th>marketCap</th>
          <th>volume</th>
          <th>circulatingSupply</th>
         </tr>`;

    // Loop to access all rows 
    for (let r of data.result) {
        tab += `<tr> 
    <td>${r.rank} </td>
    <td>${r.name}</td>
    <td>${r.price}</td>
    <td>${r.day}</td>    
    <td>${r.week}</td> 
    <td>${r.marketCap}</td>       
    <td>${r.volume}</td> 
    <td>${r.circulatingSupply}</td> 
</tr>`;
    }

    // Setting innerHTML as tab variable
    if (document.getElementById("data")!==null) {
        document.getElementById("data").innerHTML = tab;
    }
}
