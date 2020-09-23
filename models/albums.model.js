const db = require('./db');

const Albums = (album) => {
    this.name = album.name;
}

// Album.getAll = result => {
    // sql.query("SELECT * FROM albums",(err,res)=> {
    //     if(err) {
    //         console.log("error: ", err);
    //         result(err,null);
    //         return;
    //     }
    //     console.log("res: ", res);
    //     result(null, res);
    // });
// }

Albums.list = () => { 
    return db('albums').select();
}

module.exports = Albums;