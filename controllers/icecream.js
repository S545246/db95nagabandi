var Icecream = require('../models/icecream');
// List of all Icecreams
exports.icecream_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Icecream list');
};
// for a specific Icecream.
exports.icecream_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Icecream detail: ' + req.params.id);
};
// Handle Icecream create on POST.
exports.icecream_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Icecream();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"IceBrand":"Creamstone", "Iceflavor":"Vanilla", "IceCost":20}
    document.IceBrand = req.body.IceBrand;
    document.Iceflavor = req.body.Iceflavor;
    document.IceCost = req.body.IceCost;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Icecream delete form on DELETE.
exports.icecream_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Icecream delete DELETE ' + req.params.id);
};
// Handle Icecream update form on PUT.
exports.icecream_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Icecream update PUT' + req.params.id);
};

// List of all Icecreams
exports.icecream_list = async function (req, res) {
    try {
        theicecream = await Icecream.find();
        res.send(theicecream);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.icecream_view_all_Page = async function (req, res) {
    try {
        theicecream = await Icecream.find();
        res.render('icecream', {
            title: 'icecream Search Results',
            results: theicecream
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};