import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'

export default class Article extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string;

  @column()
  public slug: string;

  @column()
  public content: string;

  @column()
  public image: string;


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime



  @beforeCreate()
  public static async createSlug(article: Article) {
    article.slug = article.$dirty.title.replace(" ", "-") + +new Date(); //title which we get from form 
  }

}
//this article model will be connected with the articles table on our database
