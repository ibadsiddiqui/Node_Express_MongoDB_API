// MongoDB requires not just an ID as a string, 
// but as an ID object or, as they call it, an ObjectID

var ObjectID = require('mongodb').ObjectID
module.exports = (app, db) => {
    app.get('/notes/:id', (req, res) => {
        // You'll create your note here
        const details = {'_id': new ObjectID(req.params.id)};

        db.collection('notes').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
                console.log(item);
                console.log('successfully found data')
            }
        })
    });
    
    
    app.post('/notes', (req, res) => {
        // You'll create your note here
        const note = { 
            text: req.body.body, 
            title: req.body.title,
            author: req.body.author 
        };

        db.collection('notes').insertOne(note, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
                console.log('successfully inserted')
            }
        })
    });


    app.delete('/notes/:id', (req, res) => {
        // You'll create your note here
        const details = {'_id': new ObjectID(req.params.id)};

        db.collection('notes').deleteOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send("Note " + req.params.id + " deleted.");

            }
        })
    })
}