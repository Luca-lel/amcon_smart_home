<a id="readme-top"></a>
# Smart Home System

Dieses Projekt ist ein selbst entwickeltes **Smart-Home-System**, das Geräte zentral verwaltet und steuert. Ziel ist es, eine einfache Plattform zu schaffen, über die verschiedene Smart-Home-Geräte hinzugefügt, visualisiert und kontrolliert werden können.,,

## Funktionen

- Geräte zu einem Smart-Home-System hinzufügen  
- Verwaltung verschiedener Gerätetypen (z. B. Lampen oder Steckdosen)  ,
- Steuerung von Gerätezuständen wie **Ein/Aus**, **Helligkeit** oder **Farbe**  
- Dynamische Benutzeroberfläche zur Anzeige und Steuerung aller Geräte  
- Kommunikation mit einem Backend über eine **REST-API**

## Technologie-Stack

**Frontend**
- HTML
- CSS
- JavaScript

**Backend**
- Python
- FastAPI

**Weitere Technologien**
- REST API Kommunikation
- UUID-basierte Geräteverwaltung

---

## To-do 
* Konzept für das Frontend überlegen
* Frontend erstellen
* Die fertige Seite genießen und deine Smart-Lampen steuern

---

## Einrichtung (Setup)

Erstelle zuerst eine neue Python-Umgebung mit:

```bash
python -m venv venv
```

Dann:

```bash
source venv/bin/activate
```

Falls das nicht funktioniert, gehe in:

```bash
cd venv/scripts
```

und führe aus:

```bash
activate
```

Jetzt befinden wir uns in einer separaten Umgebung.

Danach können die Abhängigkeiten installiert werden mit:

```bash
pip install --no-index --find-links deps -r requirements.txt
```

---

## Swagger UI

[Backend API Docs](https://sharolyn-windtight-dismissively.ngrok-free.dev/docs)

---

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
https://sharolyn-windtight-dismissively.ngrok-free.dev/change-brightness?id=<id>&brightnesslevel=<brightness level 0 = low, 1 = medium, 2 = bright, 3 = very bright>
```

```bash
https://sharolyn-windtight-dismissively.ngrok-free.dev/delete-device?id=<id>
```

```bash
https://sharolyn-windtight-dismissively.ngrok-free.dev/change-actionmode?id=<id>&actionmode=<mode only up to 10>
```

---

## Farbrad für Hex-Farben

```bash
https://www.canva.com/colors/color-wheel/
```

<p align="right"><a href="#readme-top">^ Zurück nach oben ^</a></p>

