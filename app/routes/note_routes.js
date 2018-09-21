module.exports = (app, db) => {
    app.post('/notes', (req,res) => {
        // You'll create your note here
        console.log("user is notes url")
        console.log(req.body);
        res.send('Salam')
    })
}