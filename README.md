<p align="center">
  " Education is not the learning of facts, but the training of the mind to think. " - Albert Einstein
</p>

# Todos-App

This Project is a fully functional MERN stack (MongoDB, Express, React, Node). 

And it uses Firebase Authentication feature.  

## Back-end Server  

Go to `/server` in terminal.  

Enter command `npm install`, it will install all the required dependencies.  

Then create a file named `config.env` in directory `server/`, and add the required two variables: `ATLAS_URI`, `PORT`.  

`ATLAS_URI` is the uri link of your mongodb atlas.  

`PORT` can be any port number you want (5000 is recommended).  

The content will look something like this:  
```
ATLAS_URI=mongodb+srv://<username>:<password>@<cluster>.<id>.mongodb.net/?retryWrites=true&w=majority  
PORT=5000  
```  
Replace `<username>`, `<password>`, `<cluster>` and `<id>` with your own values.  

## Front-end Server  

Go to `/client` in terminal.  

Enter command: `npm install`, it will install all the required dependencies.  

Then create a file named `.env.local` in directory `client/`, and write the following into the file:  
```
REACT_APP_SERVER_URI=<uri to your back-end server>:5000
REACT_APP_FIREBASE_API_KEY=<api key>
REACT_APP_AUTH_DOMAIN=<auth domain>
REACT_APP_PROJECT_ID=<project id>
REACT_APP_STORAGE_BUCKET=<storage bucket>
REACT_APP_MESSAGING_SENDER_ID=<messaging id>
REACT_APP_APP_ID=<app id>
```  
Of course replace the values with your own firebase account values. (Do not keep the '<' and '>').

## Initiation  

Open two terminals.  

The first terminal is in route `/server`, enter command `npm run start` or `npm run devStart`, it will start the DB server.  

Once the server is running, the second terminal is in route `/client`, enter command `npm run start`, it will start the client server.  

###### Note: Only authorized people can access your server. So make sure you have account(s) in firebase authentication (that you created and know the password).

Now you're all set.
