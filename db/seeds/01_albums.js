
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('albums').del()
    .then(function () {
      // Inserts seed entries
      return knex('albums').insert([
        {id: 1, name: 'Remix'},
        {id: 2, name: 'Rap việt'}
      ]);
    });
};
