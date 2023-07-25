const Downloader = require('nodejs-file-downloader');

const download = async (fileURL, dir = '') => {
  
  const downloader = new Downloader({
    url: fileURL, //If the file name already exists, a new file with the name and a number postfixed
    directory: `./downloads${dir ? '/' + dir : ''}`, //This folder will be created, if it doesn't exist.
  });

  try {
    const { filePath, downloadStatus } = await downloader.download(); 
    
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
