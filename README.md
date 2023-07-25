## json-download-server

This node.js server can be used to download files to your local machine from the UI hosted at https://downloader.anthony.media

### How to setup

1. Clone this repo
2. Run npm install
3. Run npm start

### Download via free web UI

1. You are now ready to download files via https://downloader.anthony.media

### Download via local API Calls

`json-download-server` exposes the `/download` endpoint that you can wire up to your local applications for download files.

##### Download a file

1. Send a post request to `http://localhost:9000/download` with the following params:
   - `fileURL`: this is the URL of the resource you wish to download
   - `directory` (optional): you can define a custom folder you wish this to download to. Defaults to /downloads folder
2. File will download and return a response once completed or failed
