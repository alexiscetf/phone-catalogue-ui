# Phone Catalogue UI

Phone Catalogue UI

Autor: Alexis Cristian Estévez Fernández

email: cristian_tf@hotmail.com

Exercise Phone Catalogue

For more information of the exercise click on the [link](https://github.com/guidesmiths/interview-code-challenges/blob/master/react/phone-catalogue/instructions.md)

## Install the application

1. Install dependencies

``` 
npm install
```

## Launch App

### Default mode

``` 
npm run start
```

IMPORTANT!!!

Start the [phone-catalogue-api](https://github.com/alexiscetf/phone-catalogue-api) service previously

### Custom Setting

Set the URL backend services as Environment variables when building bundle in package.json

By default: REACT_APP_ENDPOINT_URL=http://localhost:3010

``` 
export REACT_APP_ENDPOINT_URL=http://localhost:3010
```

 Adding Custom Environment Variables [+ info](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables)

### React Hooks 

 Introducing Hooks [+ info](https://reactjs.org/docs/hooks-intro.html)

### React Redux + Hooks

Using Hooks in a React Redux App [+ info](https://react-redux.js.org/api/hooks)

### Primereact | React UI Component Library

PrimeReact is a collection of rich UI components for React. [+ info](https://primefaces.org/primereact/showcase/#/)

## Docker 

Generate the docker container image

``` 
docker build -t phone-catalogue-ui .
```

Launch container (setting ENV of REACT):

``` 
docker run -d \
-e REACT_APP_ENDPOINT_URL='http://localhost:3010' \
-p 3000:3000 --name phone-catalogue-ui phone-catalogue-ui
``` 

## Environment details

``` 
SO: Ubuntu 18.04.3 LTS
Node Version: v8.17.0
Docker version 19.03.5
```