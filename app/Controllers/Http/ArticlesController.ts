import Database from "@ioc:Adonis/Lucid/Database";
import { schema } from '@ioc:Adonis/Core/Validator'
import CreateArticleValidator from "App/Validators/CreateArticleValidator";
import Article from "App/Models/Article";


export default class ArticlesController {
    public async index({ view }) {
        // const articles = await Database.from('articles').select('*');
        const articles = await Article.all();
        // return articles;
        return view.render('news/view', { articles });
    }


    public create({ view }) {
        return view.render('news/create');
    }


    public async show({ view, params }) { //need params cz we need to get the article to show
        // const article = await Database.from('articles').where('slug', params.slug).first();
        const article = await Article.findBy("slug", params.slug);
        return view.render('news/show', { article });
    }



    public async store({ response, request }) { //it should be async (waiting task) cz storing the data into the database
        // const createArticleSchema = schema.create({
        //     title: schema.string(),
        //     content: schema.string(),
        //     image: schema.string(),
        // })
        const payload = await request.validate(CreateArticleValidator);
        await Article.create(payload);
        // await Database.table('articles').insert({ ...payload, slug: payload.title.replace(" ", "-") + +new Date(), });
        return response.redirect().back();


        // const { title, content, image } = request.body();
        // await Database.table('articles').insert({ title, content, image, slug: 'jhjh' });
        // // return request.body();
        // return response.redirect().back();
    }



    public async edit({ view, params }) {
        const { slug } = params; //from params i can find the slug
        // const article = await Database.from('articles').where('slug', slug).first(); //first() will give first element of the array
        const article = await Article.findBy('slug', params.slug);
        return view.render('news/edit', { article });
    }


    public async update({ request, response, params }) { //params where we can find the article
        const payload = await request.validate(CreateArticleValidator); //we get the article and then we need to update this article, first need the updated fields, restrict the empty fields
        // await Database.from('articles').where('slug', params.slug).update(payload);
        await Article.query().where('slug', params.slug).update(payload);
        return response.redirect().back();
    }


    public async destroy({ params, response }) {
        // await Database.from('articles').where('slug', params.slug).delete();//fetch the article (get the article), then delete it
        const article = await Article.findBy('slug', params.slug);
        if (article) {
            article.delete();
            return response.redirect().back();
        }
    }
}
