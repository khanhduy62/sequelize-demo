import express from 'express';
import fs from 'fs';

const router = express.Router();
fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(file => {
    const dotIndex = file.lastIndexOf('.'),
      fileName = file.substring(0, dotIndex);
    router.use('/' + fileName, require('./' + fileName));
  });


module.exports = router;
