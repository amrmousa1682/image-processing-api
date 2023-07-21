# Image Processing API

This is an API for processing images built using Node.js and the Express.js framework. The API provides an endpoint for resizing images to the specified dimensions.

## Getting Started

To use this API, you will need to have Node.js installed on your machine. You can download and install Node.js from the official website: [https://nodejs.org/ ↗](https://nodejs.org/)

Once you have Node.js installed, you can download or clone this repository to your local machine. Then, navigate to the root directory of the repository and run the following command to install the required dependencies:

```
npm install
```

After installing the dependencies, run the following command to build the TypeScript code:

```
npm run build
```

This will compile the TypeScript code into JavaScript and place it in the `dist` directory.

## Usage

To start the API, run the following command:

```
npm start
```

This will start the API on port 3000 by default. You can access the API by visiting [http://localhost:3000/api ↗](http://localhost:3000/api) in your web browser.

The API provides the following endpoint:

### /api

This endpoint takes in an image filename, width and height parameters, and returns a resized version of the image in the specified dimensions. Here is an example URL for this endpoint:

```
http://localhost:3000/api?filename=encenadaport&width=200&height=200
```

In the example above, the API will resize the "encenadaport" image to a width of 200 pixels and a height of 200 pixels.
