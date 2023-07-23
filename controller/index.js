const Downloader = require('nodejs-file-downloader');

const download = async (fileURL, dir = '') => {
  //Wrapping the code with an async function, just for the sake of example.

  const downloader = new Downloader({
    url: fileURL, //If the file name already exists, a new file with the name 200MB1.zip is created.
    directory: `./downloads${dir ? '/' + dir : ''}`, //This folder will be created, if it doesn't exist.
  });

  try {
    const { filePath, downloadStatus } = await downloader.download(); //Downloader.download() resolves with some useful properties.

    return {
      success: true,
      filePath,
      downloadStatus,
    };
  } catch (error) {
    return {
      success: false,
      error: error,
    };

    //IMPORTANT: Handle a possible error. An error is thrown in case of network errors, or status codes of 400 and above.
    //Note that if the maxAttempts is set to higher than 1, the error is thrown only if all attempts fail.
  }
};

const controller = {
  handleDownloadFile: async (req, res) => {
    try {
      const { fileURL, directory = '' } = req.query;
      console.log('Processing download request: ', fileURL);
      console.log('- - - saving to dir: ', directory);
      if (!fileURL) {
        res.status(500).send('Must provide fileURL');
      }
      const result = await download(fileURL, directory);

      let statusCode = result?.error ? 500 : 200;

      res.status(statusCode).send(result);
    } catch (err) {
      console.log(err);
      res.status(500).send('Error during request');
    }
  },
};

module.exports = {
  controller,
};
