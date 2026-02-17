from fastapi import FastAPI, HTTPException, Query 
from fastapi.middleware.cors import CORSMiddleware 
from enum import Enum 
import uuid 
import lib 
import random

devicelist = {}

class DeviceType(Enum):
    light = "light"
    plug = "plug"


class DeviceStatus(Enum):
    on = "on"
    off = "off"
    offline = "offline"

class Device:
    def __init__(self, id, name, type, nodeid, status=DeviceStatus.on, brightness=3, color="#da1195", actionmode=0 ):
        self.id = id
        self.name = name
        self.type = type
        self.status = status
        self.brightness = brightness
        self.color = color
        self.nodeid = nodeid
        self.actionmode = actionmode

app = FastAPI()

@app.get("/")
def root():
    return {"status": "ok"}

@app.post("/add-device")
def addDevice(name, type: DeviceType, nodeid: int | None = None, status: DeviceStatus = DeviceStatus.off, brightness: int = 1, color: str = "#ffffff"):
    if nodeid is None:
        nodeid = random.randint(1, 4000)
        if type == DeviceType.light:
            lib.pairLight(nodeid)
        elif type == DeviceType.plug:
            lib.pairPlug(nodeid)
        else:
            raise HTTPException(status_code=400, detail="DeviceType not supported")

    id = str(uuid.uuid4())
    device = Device(id, name, type, nodeid, status, brightness, color)
    devicelist[id] = device
    return device

@app.get("/get-devices")
def getDevices():
    return {"devices": [device.__dict__ for device in devicelist.values()]}

@app.post("/toggle")
def toggle(id):
    device = devicelist[id]
    lib.toggle(device.nodeid)
    status = device.status
    if status == DeviceStatus.off:
        device.status = DeviceStatus.on
    else:
         device.status = DeviceStatus.off
    return device

@app.post("/change-color")
def changeColor(id, color):
    nodeid = devicelist[id].nodeid
    lib.changeColor(nodeid, color)
    devicelist[id].color = color
    return devicelist[id]

@app.post("/change-name")
def changeName(id, targetname):
    nodeid = devicelist[id].nodeid
    devicelist[id].name = targetname
    return devicelist[id]

@app.post("/change-brightness")
def changeBrightness(id, brightnesslevel: int):
    nodeid = devicelist[id].nodeid
    lib.changeBrightness(nodeid, brightnesslevel)
    devicelist[id].brightness = lib.brightnessLevels[brightnesslevel]
    return devicelist[id]

@app.delete("/delete-device")
def deleteDevice(id):
    nodeid = devicelist[id].nodeid
    if devicelist[id] == True:
        del devicelist[id]
    return devicelist[id]

@app.post("/change-actionmode")
def changeActionMode(id, actionmode: int):
    if devicelist[id].status == DeviceStatus.on:
        nodeid = devicelist[id].nodeid
        lib.changeActionMode(nodeid, actionmode)
        devicelist[id].actionmode = actionmode
    return devicelist[id]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
