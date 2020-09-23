const songs = require('./../models/songs.model');


exports.findAll = (req,res) => {
    songs.list()
        .then(response => {
            res.status(200).send({
                data:response,
                message:"Success"
            })
        })
        .catch(err=> {
            res.status(404);
        })
};

exports.findById = (req,res) => {
    const albumId = req.params.albumId;
    songs.list({album_id: albumId})
    .then(response => {
        res.status(200).send({
            data:response,
            message:"Success"
        })
    })
    .catch(err=> {
        res.status(404);
    })
}