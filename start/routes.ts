import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database';
import ArticlesController from 'App/Controllers/Http/ArticlesController';

Route.on('/').render('welcome');

// Route.get('/', async ({ view }) => {
//   return view.render('welcome');
// })

// Route.get('/news', ({ view }) => {
//   return view.render('news.view');
//   // return view.render('news/view');
// })


Route.resource('news', 'ArticlesController').paramFor('news', 'slug');
// Route.get('/news', 'ArticlesController.view').as('news_view');
// Route.get('/news/create', 'ArticlesController.create').as('news_create');
// Route.post('/news', 'ArticlesController.store').as('news_store');
// Route.get('/news/:slug/edit', 'ArticlesController.edit').as('news_edit');
// Route.patch('/news/:slug', 'ArticlesController.update').as('news_update');
// Route.delete('/news/:slug', 'ArticlesController.destroy').as('news_delete');



// Route.get('/news', async (ctx) => {
//   return new ArticlesController().view(ctx)
// }).as('news_view');

// // Route.on('/news').render('news.view').as('news_view'); //BriskRouteContract

// Route.get('/news', async ({ view }) => {
//   //fetch data from db
//   const articles = await Database.from('articles').select('*');
//   // return articles;
//   return view.render('news.view', {articles});
// }).as('news_view');


//we want to show all these articles in this news.view so that i can loop over the data and then show the data
// so how can we pass the data(articles) on the view



// Route.post('/news', ({ request }) => {
//   const { email, password } = request.body();
//   // console.log(request.body());
//   return { email, password };
// });

//in the post request if its api thats ok then u are just returning email,password
// but if its web application then u need to redirect to some other place




// Route.post('/news', ({ request }) => {
//   return request.body();
// }).as('news_store');//form will submit on thi post request



//redirect the user (what response we return)
// Route.post('/news', ({ response }) => {
//   //   const { email, password } = request.body();
//   return response.redirect('/news');
// }).as('news_create');  




//on every put, patch, delete we need the id from the url
// Route.patch('/news/:id', ({ params }) => {
//   // console.log(params);
//   return { params };
// }).where('id', {
//   match: /^[0-9]+$/,
//   cast: (id) => Number(id), //its always going to b the casting of number, means it converts a string into number
// }).as('news_update');
//validates , it take only number not any string value, but there a issue : if i provide the number although,it provides a number but id is still in string form
// when we say where condition, we can define  match: /^[0-9]+$/, but cast the id as a number
//we always need to get this id so that we can work upon the thing we are creating



//delete
// Route.delete('/news/:id', ({ params }) => {
//   return { params };
// }).where('id', {
//   match: /^[0-9]+$/,
//   cast: (id) => Number(id),
// }).as('news_delete');