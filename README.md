# react-example-caen
Simple react app with socket io and page routing. 

to RUN:
1.) cd socket-io-client/
2.) IN another terminal, cd socket-io-client/
3.) npm start in one terminal, and wait
4.) npm run server in tthe other
5.) go to localhost:3000 in chrome.

1.) Downlod node.js
2.) create git repo react-example-caen

https://www.valentinog.com/blog/socket-react/


- npx create-react-app socket-io-client
- rm src/App.css src/App.test.js src/logo.svg src/index.css
- delete src/app.js imports accordingly. 
- create server folder in src, and create index.js and SocketManager.js within this new folder.
- go to terminal, and install 'npm i socket.io uuid' and 'npm i --save-dev concurrently nodemon'
- in package.json:
```
"scripts": {
    "start": "concurrently 'npm run react' 'npm run server'", --> 
    "react": "react-scripts start",
    "server": "nodemon src/server/index.js", --> reloads server automatically on changes/
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
```
- create components folder in src, and Layout.js within that.
- set socketUrl to computer specific url within layout.js
- go to socket-io-client and npm start to start react app and go to browser.
- open another terminal and type npm run server in socket-io-client to start server.
- when you open up localhost:3000 in browser, it should say socket id: ______ in terminal.

# ROUTING
- npm install react-router-dom
- 