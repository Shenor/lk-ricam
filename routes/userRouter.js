const express = require('express');
const router = express.Router();
const moment = require('moment');

const {Client} = require('./../database');

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Client.find({}, (err, docs) => {
        if(err){console.log(err);}
        const doc = docs[id];

        if(typeof doc == "undefined" && !doc) {
            console.log("такого нет ");
            res.status(404).render('404');
        } else {
            setDate(doc);
            res.status(200).render('index', {doc});
        }     
    });
});

//Добавляем в объект данные по дате
function setDate(doc) { 
    doc.fiscal.forEach((element, idx) => {
        moment.lang('ru');
        const { fiscalDrive: {fiscalTime, fiscalDate} } = element;
        doc.fiscal[idx].date = [];
        const fEndDate = moment(fiscalDate, "DD.MM.YYYY").add(fiscalTime, "month").format("DD-MM-YYYY");
        const fLeftDate = moment(fEndDate, "DD-MM-YYYY").fromNow();
        doc.fiscal[idx].date.fEndDate = fEndDate;
        doc.fiscal[idx].date.fLeftDate = fLeftDate;
    });
}

module.exports = router;

