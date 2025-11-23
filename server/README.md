# Server

Simple Node/Express server for extracting text from PDF and image uploads.

## Run locally
cd server
npm install
npm start

POST /extract - multipart/form-data with field 'file'
Returns JSON: { status, method, filename, text }
