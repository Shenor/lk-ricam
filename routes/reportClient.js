const express = require('express');
const router = express.Router();
const moment = require('moment');

const Client = require('../database');

router.get('/', async (req, res) =>{
   const resault = await Client.find().select("fiscal name");
   reportDate(resault);
   res.render("report", {
      layout: 'report',
      resault
  });
});


function reportDate(resault) {
  resault.forEach((element, idx) => {
    element.fiscal.forEach((item, id) => {
      moment.locale("ru");
      const {fiscalDrive: { fiscalTime, fiscalDate }} = item;
      if (fiscalTime && fiscalDate) {

        const fEndDate = moment(fiscalDate, "DD.MM.YYYY")
          .add(fiscalTime, "month")
          .format("DD-MM-YYYY");
        const fLeftDate = moment(fEndDate, "DD-MM-YYYY").fromNow();

        const fiscalDateUnix = moment(fiscalDate, "DD.MM.YYYY").format('x');
        const fEndDateUnix = moment(fiscalDateUnix, "x")
              .add(fiscalTime, "month")
              .format('x');
        const fLeftDateUnix = moment(fEndDateUnix, "x").fromNow();

        element.fiscal[id].date = [];
        element.fiscal[id].date.fEndDate = fEndDate;
        element.fiscal[id].date.fLeftDate = fLeftDate;
        
        if(fEndDateUnix == "Invalid date" || fLeftDateUnix == "Invalid date" || fiscalDateUnix == "Invalid date"){
          element.fiscal[id].date.fEndDateUnix = 0;
          element.fiscal[id].date.fiscalDateUnix = 0;
        } else {
          element.fiscal[id].date.fEndDateUnix = fEndDateUnix;
          element.fiscal[id].date.fiscalDateUnix = fiscalDateUnix;
        }     
      } else {
        return false;
      }
    });
  });
}

module.exports = router;