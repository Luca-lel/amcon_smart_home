var devices = []; //declare the array

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
    deviceJSON = JSON.stringify(devices)
    console.log(deviceJSON)
    createElements();


    console.log(list)
  } catch (error) {
    console.error(error.message);
  };
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
        <select id = "brightness${id}">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <button class = "buttons" onclick="changeBrightness('${device.id}')">change brightness</button>
      <br>
        <select id = "changeMode${id}">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
        <button class = "buttons" onclick="changeMode('${device.id}')">change actionmode</button>
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



}
async function changeMode(id){
const url = "https://sharolyn-windtight-dismissively.ngrok-free.dev/change-actionmode";
 //todo
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