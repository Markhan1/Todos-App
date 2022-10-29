<p align="center">" Bildung ist nicht das Lernen von Fakten, sondern die Schulung des Geistes zum Denken. " - Albert Einstein<p>

# Todos-App  
  
Dieses Projekt ist ein voll funktionsfähiger MERN-Stack ( MongoDB, ExpressJS, ReactJS, NodeJS ).  
  
Und es verwendet die Firebase-Authentifizierungsfunktion.  
  
## Vorbereitung  

Stellen Sie sicher, dass `Node.js` auf Ihrem System installiert ist: https://nodejs.org/en/download/  

Und Sie haben eine MongoDB-Atlas-Kontoverbindung: https://www.mongodb.com/atlas  
mit einer bestehenden Datensammlung, die die Struktur hat:  
```
{
  name: "name",
  text: "text",
  status: "status",
  tags: ["tag1", "tag2"],
  date: "2022/11/01 12:00:00:000"
}
```  

Der Ordner, in den Sie die repository geklont haben, ist Ihr Arbeitsordner. Gehen Sie zu diesem Ordner und öffnen Sie hier einen Terminal.  
  
## Backend-Server  
  
Gehen Sie im Terminal zu `/server`.  
  
Geben Sie den Befehl `npm install` ein. Es werden alle erforderlichen Abhängigkeiten installiert.  
  
Erstellen Sie dann eine Datei mit dem Namen `config.env` im Verzeichnis `server/` und fügen Sie die erforderlichen zwei Variablen hinzu: `ATLAS_URI`, `PORT`.  
  
`ATLAS_URI` ist der URI-Link zur DB-Verbindung Ihres mongodb-Atlas-Kontos.  
  
`PORT` kann jede gewünschte Portnummer sein (5000 wird empfohlen).  
  
Der Inhalt wird in etwa so aussehen:  
```
ATLAS_URI=mongodb+srv://<username>:<password>@<cluster>.<id>.mongodb.net/?retryWrites=true&w=majority  
PORT=5000  
```  
Ersetzen Sie `<username>`, `<password>`, `<cluster>` und `<id>` durch Ihre eigenen Atlas-Kontowerte.  
  
## Front-End-Server
  
Gehen Sie im Terminal auf `/client`.  
  
Geben Sie den Befehl ein: `npm install`. Es werden alle erforderlichen Abhängigkeiten installiert.  
  
Erstellen Sie dann eine Datei mit dem Namen `.env.local` im Verzeichnis `client/` und schreiben Sie Folgendes in die Datei:  
```
REACT_APP_SERVER_URI=<uri to your back-end server (http://127.0.0.1:5000)>
REACT_APP_FIREBASE_API_KEY=<api key>
REACT_APP_AUTH_DOMAIN=<auth domain>
REACT_APP_PROJECT_ID=<project id>
REACT_APP_STORAGE_BUCKET=<storage bucket>
REACT_APP_MESSAGING_SENDER_ID=<messaging id>
REACT_APP_APP_ID=<app id>
```  
Ersetzen Sie die Werte durch Ihre eigenen Firebase-Kontoauthentifizierungswerte. ( Löschen Sie die Zeichen '<' und '>' ).  
  
## Einleitung  
  
Öffnen Sie zwei Terminals.  
  
Der erste Terminal zielt auf den Pfad `/server`, geben Sie den Befehl `npm run start` oder `npm run devStart` ein. Es startet den DB-Server.  
 
Sobald der Server läuft, befindet sich der zweite Terminal im Pfad `/client`. Geben Sie den Befehl `npm run start` ein, der Client-Server wird gestartet.  
Ihr Browser sollte den Client-Server automatisch öffnen. Wenn nicht, öffnen Sie Ihren Browser und geben Sie den Client-URI `(http://127.0.0.1:3000)` ein.  
###### Hinweis: Stellen Sie sicher, dass Sie ein Firebase-Authentifizierungs-Konto(s) haben (das oder die sie erstellt haben, und deren Passwort Sie kennen).  
  
Jetzt sind Sie fertig. Gott sei an deiner Seite ❤️
