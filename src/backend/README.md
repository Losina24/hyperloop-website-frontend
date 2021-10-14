# Gesinen platform Node.js API

This is a REST API for Gesinen Platform made in TypeScript using Node.js and Express.js.

The developement application is inside the `\src` folder. The production application is in the `\build` folder.

We use jsdoc to make the documentation, that is stored in `\doc` folder.

## Install
    
```shell
npm install
```

## Run the app in dev mode

You must run this commands in different cmd windows at the same time. Build command is for compile .ts to .js, and dev is for run the express server with nodemon

```shell
npm run build
npm run dev
```

# Routes

// WIP //
There is the REST API route list:

## Get Anything

### Request

`GET /thing/`

    curl -i -H 'Accept: application/json' http://localhost:7000/thing/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    []

## Create a new Thing

### Request

`POST /thing/`

    curl -i -H 'Accept: application/json' -d 'name=Foo&status=new' http://localhost:7000/thing

### Response

    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/1
    Content-Length: 36

    {"id":1,"name":"Foo","status":"new"}
