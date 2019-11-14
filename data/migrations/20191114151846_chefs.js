
exports.up = function(knex) {
  return knex.schema.createTable('chefs', tbl => {
      tbl.increments();

      tbl
        .string('first name', 128)
        .notNullable();
    tbl
        .string('last name', 128)
        .notNullable();
    tbl
        .string('company', 128)
        .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('chefs')
};
