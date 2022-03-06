fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));


// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  postData('https://example.com/answer', { answer: 42 })
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////

function makeOptions(method, body) {
        const opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            }
        }
        if (body) { //Observe how we can add new fields to an object when needed
            opts.body = JSON.stringify(body);
        }
        return opts;
    }

    async function fetchAllTours () {
        let array = []
        let response = await fetch("http://localhost:7777/tours");
        let responseData = await response.json()

        responseData.forEach(tour => {
            array.push(tour)
        })
        return array;
    }

    async function getOneTour(id) {
        let response = await fetch("http://localhost:7777/tours/"+id);
        let responseData = await response.json();
        return responseData;
    }




    async function createPin() {
            /*
        let pin = {};
        pin.pinId = null;
        pin.latitude = Number(document.getElementById('latitudeCreatePin').value);
        pin.longitude = Number(document.getElementById('longitudeCreatePin').value);
        pin.description = document.getElementById('descriptionCreatePin').value;
        pin.title = document.getElementById('titleCreatePin').value;
        console.log("TITEL : " + pin.title);
        pin.tours = [];
        pin.mediaLinks = [];
        //console.log(document.getElementById('toursCreatePin').dataset.dataNum.value);
        console.log(Number(document.getElementById('toursCreatePin').value.substring(0,1)))
        if (Number(document.getElementById('toursCreatePin').value.substring(0,1)) !== 0) {
            let tour = await getOneTour(Number(document.getElementById('toursCreatePin').value.substring(0, 1)));
            console.log(tour);
            let shortTour = {"tourId" : tour.tourId};
            pin.tours.push(shortTour);
        }
        console.log(pin);
        let errorMessage = "";
        if (pin.latitude === 0 && pin.longitude === 0) {
            errorMessage = " : Angiv værdier for latitude og latitude";
        }else if (pin.latitude === 0 ^ pin.longitude === 0) {
            errorMessage = ": Angiv værdi for latitude eller longitude";
        }
        */
        let options = makeOptions("POST", pin);

        let response = await fetch("http://localhost:7777/pins", options);

        console.log(response.status);
        if (response.status === 201) {
            let responseData = await response.json();
            allPins.push(pin);
            console.log(responseData);
            document.getElementById('addedTool').style.display = 'block'
            document.getElementById('addedToolText').style.color = '#00e676'
            document.getElementById('addedToolText').innerText = '✔ Pin tilføjet'
        } else {
            document.getElementById('addedTool').style.display = 'block'
            document.getElementById('addedToolText').style.color = 'crimson'
            document.getElementById('addedToolText').innerText = '❌ Pin kunne ikke tilføjes' + errorMessage;
        }
    }
