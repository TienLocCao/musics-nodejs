
exports.up = function(knex) {
    return knex.schema.createTable('albums',function(table){
        table.increments('id').primary();
        table.string('name').notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("update_at").defaultTo(knex.fn.now());
    }).createTable('songs',function(table){
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('img').notNullable();
        table.string('link').notNullable();
        table.integer('album_id',11).unsigned().references("id").inTable('albums');
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("update_at").defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("songs").dropTable('albums');
};
