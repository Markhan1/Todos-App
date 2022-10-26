<p align="center">
  " Education is not the learning of facts, but the training of the mind to think. - Albert Einstein "
</p>

# Todos-App

This Project is a fully functional MERN stack (MongoDB, Express, React, Node). 

And it uses Firebase Authentication feature.  

### The Server  

Create file named `config.env` in directory `server/` and add the required two variables: `ATLAS_URI`, `PORT`.  

`ATLAS_URI` is the uri link of your mongodb atlas.  

`PORT` can be any port number you want (5000 is recommended).  

It will look something like this:  
```
ATLAS_URI=mongodb+srv://<username>:<password>@<cluster>.<id>.mongodb.net/?retryWrites=true&w=majority  
PORT=5000  
```

### The Client  

Go to `/client` in terminal.  

and write command: `npm install`. This will install all the required dependencies, and the client server is ready to start.  

### Initiation  

Open two terminals.  

The first terminal is in route `/server`, type command `npm run start` or `npm run devStart`, it will start the DB server.  

Once the server is running, the second terminal is in route `/client`, type command `npm run start`, it will start the client server.  

Now you're all set.
