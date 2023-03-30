import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'articles'

  public async up() { //when u run the migration means use this design to create the real table inside the mysql
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('title')
      table.string('slug').unique()//differentiate between each of the article
      table.string('image')
      table.string('content')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      // table.timestamp('created_at', { useTz: true })
      // table.timestamp('updated_at', { useTz: true })
      table.timestamp("created_at", { useTz: true }).defaultTo(this.now());
      table.timestamp("updated_at", { useTz: true }).defaultTo(this.now());
    })
  }

  public async down() { //clean the migration means want to drop the table
    this.schema.dropTable(this.tableName)
  }
}
