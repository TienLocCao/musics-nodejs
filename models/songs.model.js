const db = require('./db');

const Songs = (song) => {
    this.title = song.title;
    this.img = song.img;
    this.link = song.link;
    this.album_id = song.album_id;
}

Songs.list = (params={}) => { 
    return db('songs').where(params).select();
}

module.exports = Songs;