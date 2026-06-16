var devices = []; //declare the array
getDevices();
getDevices();

async function addDevice() {
  const url = "https://sharolyn-windtight-dismissively.ngrok-free.dev/add-device";

  let nameValue = document.getElementById("deviceName").value;
  let typeValue = document.getElementById("deviceType").value;
  if(typeValue == "licHt") {
    typeValue = "light"
  }
  else if(typeValue == "stecker"){
    typeValue =  "plug"
  }
  let id = 0;
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
    let deviceJSON = JSON.stringify(devices)
    console.log(deviceJSON)
    createElements();


    console.log(list)
  } catch (error) {
    console.error(error.message);
  }
}

async function createElements() {
    const container = document.getElementById("deviceList")
    container.innerHTML='';

    devices.forEach(device =>{
      const div = document.createElement("div");
      div.classList.add("devicehope");

      div.innerHTML =`
      
      <div class="device-row">
        <p>${device.name}</p>
        <button class="toggle-button" onclick="toggleDevice('${device.id}')"></button>
        <button class = "remove-button" onclick="removeDevice('${device.id}')">DELETE</button>
      </div>
      
      <br>
      <div class="device-row">
        <input class = "textBox" id ="name${device.id}" type="text" placeholder="name">
        <button class = "device-button" onclick="changeName('${device.id}')">change name</button>
      </div>
      <br>
      
      <div class="device-row">
        <input class = "textBox" id ="color${device.id}" type="color" value="#FF0000" placeholder="farbe">
        <button class = "device-button" onclick="changeColour('${device.id}')">color change</button>
      </div>

      <div class="device-row">
        <br>
        <select id ="brightness${device.id}">
          <option value="1">0%</option>
          <option value="70">33%</option>
          <option value="150">66%</option>
          <option value="254">100%</option>
        </select>
        <button class = "device-button" onclick="changeBrightness('${device.id}')">Change Brightness</button>
      </div>
      <div class="device-row">
        <br>
        <select id="changeMode${device.id}">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <button class = "device-button" onclick="changeMode('${device.id}')">Change Mode</button>
      </div>
      `;
      container.appendChild(div);
      document.getElementById(`changeMode${device.id}`).value = String(device.actionmode);
      document.getElementById(`brightness${device.id}`).value = String(device.brightness);
      document.getElementById(`name${device.id}`).value = String(device.name);
      document.getElementById(`color${device.id}`).value =  device.color;
    });

}

async function removeDevice(id) {
const url = "https://sharolyn-windtight-dismissively.ngrok-free.dev/delete-device";
  try {
    //request
    const response = await fetch(url+`?id=${id}`,
      {
        method: "DELETE",
        headers: new Headers({
            "ngrok-skip-browser-warning": "true",
        }),
      });

    //response
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
  } catch (error) {
    console.error(error.message);
  }
  finally {
     getDevices();
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
  finally {
     getDevices();
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
  finally {
     getDevices();
  }
}

async function changeName (id){
const url = "https://sharolyn-windtight-dismissively.ngrok-free.dev/change-name";
  let targetName = document.getElementById(`name${id}`).value;
  try {
    //request
    const response = await fetch(url+`?targetname=${targetName}&id=${id}`,
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
  finally {
     getDevices();
  }
}

async function changeBrightness(id){
const url = "https://sharolyn-windtight-dismissively.ngrok-free.dev/change-brightness";
  let brightnessLevel = document.getElementById(`brightness${id}`).value;
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
  finally {
     getDevices();
  }
}

async function changeMode(id){
const url = "https://sharolyn-windtight-dismissively.ngrok-free.dev/change-actionmode";
  let actionmode = document.getElementById(`changeMode${id}`).value;

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
  finally {
     getDevices();
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

async function exportDevices() {
  deviceJSON = JSON.stringify(devices);
  console.log(deviceJSON);

  const blob = new Blob([deviceJSON], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "devices.json";
  a.click();

  URL.revokeObjectURL(url); // cleanup
}