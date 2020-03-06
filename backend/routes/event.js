const router = require('express').Router();


const Event = require('../models/event.model');

router.get('/', (req, res) => {
    Event.find().then(events => res.json(events)
    ).catch(err => res.status(400).json(`Error: ${err}`))
})

router.get('/:id', (req, res) => {
    Event.findById(req.params.id, (err, res) => {
        if (err) {
            console.log(err);
        }
    }).then(events => res.json(events));
})

router.post('/add', (req, res) => {
    console.log(req.body.dateToHappen);
    const name = req.body.name;
    const location = req.body.location;
    const dateToHappen = Date.parse(req.body.dateToHappen);

    const newEvent = new Event({
        name, location, dateToHappen
    })

    newEvent.save()
        .then(() => res.json('Evento Adicionado.'))
        .catch(err => res.status(400).json(`Error: ${err}`));
})

router.patch('/update/:id', (req, res) => {

    console.log("/update/:id");



    const updateEvent = {}
    updateEvent.name = req.body.name;
    updateEvent.location = req.body.location;
    updateEvent.dateToHappen = Date.parse(req.body.dateToHappen);

    let query = { _id: req.params.id };

    console.log(updateEvent);

    Event.updateOne(query, updateEvent,(err,nEvent)=>{
        if(err) {
            res.status(400).json(`Error: ${err}`)
        }
        else {
            res.json(`Evento: ${nEvent.n} atualizado`);
        }
    })    
})

router.delete('/:id', (req, res) => {

    console.log("entrou delete");
    console.log(`ID: ${req.params.id}`);
    Event.findByIdAndDelete(req.params.id, (err) => {
        if (err) { res.status(400).json(`Erro. ${err}`) }
        res.send("Deletado com sucesso");
    })
});

module.exports = router;