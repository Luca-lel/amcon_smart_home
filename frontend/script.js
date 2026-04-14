var devices = []; //declare the array

async function addDevice() {
  renderListe();
  const url = "https://sharolyn-windtight-dismissively.ngrok-free.dev/add-device";
  
  let nameValue = document.getElementById("deviceName").value;
  let typeValue = document.getElementById("deviceType").value;
  if(typeValue == "licHt") {
    typeValue = "light"
  }
  else if(typeValue == "stecker"){
    typeValue =  "plug"
  }
  id = 0;
  let status = "on";
  
  try {
    //request
    const response = await fetch(url+`?name=${nameValue}&type=${typeValue}&status=${status}`, 
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
    devices.push(result); //add to the array
    console.log(list)
  } catch (error) {
    console.error(error.message);
  }
  renderListe();
}

async function removeDevice() {
const url = "https://sharolyn-windtight-dismissively.ngrok-free.dev/change-name";
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
  let color = document.getElementById("changeColour").value;

  try {
    //request
    const response = await fetch(url+`?id=${id}&color=${color}`,
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
    const response = await fetch(url+`?targetname=${targetName}&type=${id}`,
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
async function changeBrightness(){
const url = "https://sharolyn-windtight-dismissively.ngrok-free.dev/change-brightness";
const id = "690c00ab-4eef-411c-9d4f-e40489745a1a"
  let brightnessLevel = document.getElementById("changeBrightness").value;

  try {
    //request
    const response = await fetch(url+`?id=${id}&brightnesslevel=${brightnessLevel}`,
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
async function changeMode(){
const url = "https://sharolyn-windtight-dismissively.ngrok-free.dev/change-name";
const id = "690c00ab-4eef-411c-9d4f-e40489745a1a"
  let actionmode = document.getElementById("changeMode").value;

  try {
    //request
    const response = await fetch(url+`?id=${id}&actionmode=${actionmode}`,
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
    devices = result.devices
    console.log(devices)
  } catch (error) {
    console.error(error.message);
  }


}
let liste = ["1", "2", "3"];
async function renderListe(){
  document.getElementById("liste").innerHTML = JSON.stringify(liste[1]);
  const ul = document.getElementByI("liste");
  ul.innerHTML = "";
  liste.forEach((item, i) => {
    const li = document.createElement("li");
    li.textContent = item;
  let asd = JSON.stringify(liste[i]);

    ul.appendChild(asd);
  });
}

