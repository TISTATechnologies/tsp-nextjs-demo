# Vanilla React Client

Please see top level directory for more information.

## Installation

Simply run `npm install` in this directory.

## Usage

You can run the Webpack development server using `npm start`. This will start the client on `localhost:3000`.

For a production-like environment, use `npm build` and serve the output files using a static file server. If you have python installed, you can use change directory to the output folder, then run `python -m http.server 3000` for the application to start on port 3000.

## Notes

The typescript module in `tsconfig.json` must be `ESNext` in order for code splitting to work.
