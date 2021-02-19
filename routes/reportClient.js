const express = require('express');
const router = express.Router();

const Client = require('../src/models/client_model');

router.get('/fn', async (req, res) =>{
   const resault = await Client.find()
      .nin('fiscal.fiscalDrive.fiscalDate', ['', ' ', '...'])
      .nin('fiscal.fiscalDrive.fiscalTime', ['', ' ', '...'])
      .select("fiscal name");

   res.render("reports/reportFN", {
      layout: 'report',
      resault
  }); 
});

router.get('/ofd', async (req, res) =>{
   const dataOFD = await Client.find()
      .nin('ofd.ofdTime', ['', ' ', '...'])
      .nin('ofd.ofdTerm', ['', ' ', '...'])
      .select("name ofd");
    
   res.render("reports/reportOFD", {
      layout: 'report',
      dataOFD
  }); 
});

module.exports = router;