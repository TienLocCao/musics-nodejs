
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('songs').del()
    .then(function () {
      // Inserts seed entries
      return knex('songs').insert([
        {
          id: 1, 
          title: 'Thu Cuối - Mr.T x YanBi x Hằng bingboong',
          img: '',
          link: 'https://www.youtube.com/watch?v=QcPK9lPJP4g',
          album_id: '1'
        },
        {
          id: 2, 
          title: 'Tage - Lớp 12',
          img: '',
          link: 'https://www.youtube.com/watch?v=dld2OFb_XGM',
          album_id: '2'
        }

      ]);
    });
};
