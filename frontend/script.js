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
    if (!response.ok) {}
    const result = await response.json();
    console.log(result);
    devices.push(result); //add to the array
    createElements();


    console.log(list)
  } catch (error) {
    console.error(error.message);
  }
  renderListe();
}

async function createElements() {
   const container = document.getElementById("deviceList")
    devices.forEach(device =>{
      const div = document.createElement("div");

      div.innerHTML =`
      
      <span class="buttonsExtra">${device.name}</span>
      <button class = "buttons" onclick="toggleDevice('${device.id}')">toggle</button>
      <br>
      <input class = "textBox" id ="name${device.id}" type="text" placeholder="name">
      <button class = "buttons" onclick="changeName('${device.id}')">change name</button>
      <br>
      <input class = "textBox" id ="color${device.id}" type="color" placeholder="farbe">
      <button class = "buttons" onclick="changeColour('${device.id}')">color change</button>
      <br>
      <button class = "buttons" onclick="removeDevice('${device.id}')">Remove</button>
      `;
      container.appendChild(div);
    });

}






async function removeDevice(id) {
const url = "https://sharolyn-windtight-dismissively.ngrok-free.dev/delete-device";
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
async function toggleDevice(id){
const url = "https://sharolyn-windtight-dismissively.ngrok-free.dev/toggle";
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

async function changeColour(id){
  const url = "https://sharolyn-windtight-dismissively.ngrok-free.dev/change-color";
  let inputColor = document.getElementById(`color${id}`);
  let color = inputColor.value;
  try {
    //request
    const response = await fetch(url+`?id=${id}&color=${encodeURIComponent(color)}`,
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
async function changeName (id){
const url = "https://sharolyn-windtight-dismissively.ngrok-free.dev/change-name";
  let targetName = document.getElementById(`name${id}`).value;
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
const id = "690c00ab-4eef-411c-9d4f-e40489745a1a" //todo
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
const url = "https://sharolyn-windtight-dismissively.ngrok-free.dev/change-actionmode";
const id = "690c00ab-4eef-411c-9d4f-e40489745a1a" //todo
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
    devices = result.devices
    console.log(devices)
    createElements()
  } catch (error) {
    console.error(error.message);
  }

}
