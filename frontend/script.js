async function addDevice() {
  const url = "https://sharolyn-windtight-dismissively.ngrok-free.dev/add-device";
  
  let nameValue = document.getElementById("deviceName").value;
  let typeValue = document.getElementById("deviceType").value;
  if(typeValue == "Licht") {
    typeValue = "light"
  }
  else if(typeValue == "Stecker"){
    typeValue == "plug"
  }

  try {
    //request
    const response = await fetch(url+`?name=${nameValue}&type=${typeValue}`, 
      {
        method: "POST",
        headers: new Headers({
            "ngrok-skip-browser-warning": "true",
        }),
      });

    //response
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

function removeDevice() {


}
async function toggleDevice(){
const url = "https://sharolyn-windtight-dismissively.ngrok-free.dev/toggle";
const id = "690c00ab-4eef-411c-9d4f-e40489745a1a"


  try {
    //request
    const response = await fetch(url+`?id=${id}`, 
      {
        method: "POST",
        headers: new Headers({
            "ngrok-skip-browser-warning": "true",
        }),
      });

    //response
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }

}

async function changeColour(){
const url = "https://sharolyn-windtight-dismissively.ngrok-free.dev/toggle";
const id = "690c00ab-4eef-411c-9d4f-e40489745a1a"


  try {
    //request
    const response = await fetch(url+`?id=${id}`, 
      {
        method: "POST",
        headers: new Headers({
            "ngrok-skip-browser-warning": "true",
        }),
      });

    //response
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }


}
async function changeName (){
const url = "https://sharolyn-windtight-dismissively.ngrok-free.dev/change-name";
const id = "690c00ab-4eef-411c-9d4f-e40489745a1a"
  let targetName = document.getElementById("targetName").value;

  try {
    //request
    const response = await fetch(url+`?name=${targetName}&type=${id}`,
      {
        method: "POST",
        headers: new Headers({
            "ngrok-skip-browser-warning": "true",
        }),
      });

    //response
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }



}
function changeBrightness(){


}
function changeMode(){


}
function submitDevice(){
   const name = document.getElementById("deviceName").value;
   const type = document.getElementById("deviceType").value;
}


async function getDevices(){
const url = "https://sharolyn-windtight-dismissively.ngrok-free.dev/get-devices";

  try {
    //request
    const response = await fetch(url, 
      {
        method: "GET",
        headers: new Headers({
            "ngrok-skip-browser-warning": "true",
        }),
      });

    //response
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
    document.getElementById("display").innerHTML = JSON.stringify(result);
  } catch (error) {
    console.error(error.message);
  }


}
