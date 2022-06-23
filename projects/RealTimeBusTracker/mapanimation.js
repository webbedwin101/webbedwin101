mapboxgl.accessToken = 'pk.eyJ1Ijoid2ViYmUzMiIsImEiOiJja3p2cWNnZm0wMmZzMnZwdDc2NzVhNjI4In0.yNJaEAeK5fl-FcRD2RP6iQ';

 // This is the map instance
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.09159019, 42.355185059],
    zoom: 13,
    });

// Stores the long/lat coordinates in the busPosition Array
let busPosition = [];  

// Async function- Waits for getBusInfo() to finish retrieving data from the API and pushes the lat/long data into the busPosition Array. Continously requires getBusInfo to pull data from the API. 
async function run(){
    const locations = await getBusInfo();
    console.log(new Date()); 
    console.log(locations); 
    let longlat= [ locations[0].attributes.longitude,  locations[0].attributes.latitude ]; 
    busPosition.push(longlat); 
    console.log(busPosition);
    //timer
    setTimeout(run, 15000);
}

//Async function - Calls and retrieves data from the API for Bus Lat/Long information 
async function getBusInfo(){
    const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
    const response = await fetch(url); 
    const json = await response.json();
    return json.data;
}
run(); 

//Sets the Map Marker
var marker = new mapboxgl.Marker()
    .setLngLat([-71.09159019, 42.355185059])
    .addTo(map); 

// initializes a counter for tracking bus location    
let counter = 0;
// Allows the busPosition Array to have sufficient data to run. calls the move() to track bus location
function  delay() {
    if (busPosition.length > 2 ? move() : alert('please allow at least 30 seconds to see the bus location')); 
}
// tracks the bus location and resets counter back 3 stops for relevant location position
function move() {
    setTimeout(() => {
    if (counter >= busPosition.length) {
        counter = counter - 3; 
        console.log(counter);
        return;
    } else {
        marker.setLngLat(busPosition[counter]);
        counter++;
        console.log('You have moved ' + counter + ' stops'); 
        move();
    }
}, 2000); 
}
// Shows the Ride Summary
function allStops() {
    counter = 3; 
    move();
    console.log(busPosition); 
}