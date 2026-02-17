<a id="readme-top"># todo</a>
* Fix current return logic because it returns "null" on some endpoints
* Try out all endpoints
* Think about a concept for the frontend
* Create the frontend
* Enjoy your beautiful page to use your Smart-Lamps

## Set-up
First create a new environment with
```bash
python3 -m venv venv
```
Then type 
```bash
source venv/bin/activate
```
To get into the environment
After that you can install the dependencies using
```bash
pip install --no-index --find-links deps -r requirements.txt
```
## Swagger UI
[Backend API Docs](https://sharolyn-windtight-dismissively.ngrok-free.dev/docs)

## Endpoints
```bash
https://sharolyn-windtight-dismissively.ngrok-free.dev/add-device?name=<name>&type=<light or plug>&status=<on or off or offline>&brightness=1&color=%23<hex color>
```
```bash
https://sharolyn-windtight-dismissively.ngrok-free.dev/get-device
```
```bash
https://sharolyn-windtight-dismissively.ngrok-free.dev/toggle?id=<id>
```
```bash
https://sharolyn-windtight-dismissively.ngrok-free.dev/change-color?id=<id>&color=%23<hex color>
```
```bash
https://sharolyn-windtight-dismissively.ngrok-free.dev/change-name?id=<id>&targetname=<new name>
```
```bash
https://sharolyn-windtight-dismissively.ngrok-free.dev/change-brightness?id=<id>&brightnesslevel=<brightness level 0 = low, 1 = medium, 2 = bright, 3 = Very bright>
```
```bash
https://sharolyn-windtight-dismissively.ngrok-free.dev/delete-device?id=<id>
```
```bash
https://sharolyn-windtight-dismissively.ngrok-free.dev/change-actionmode?id=<id>&actionmode=<mode only up to 10>
```
## Color Wheel for the Hex code
```bash
https://www.canva.com/colors/color-wheel/
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>