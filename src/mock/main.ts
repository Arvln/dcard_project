import * as jsonServer from 'json-server';
const { db } = require("./db");

const server      = jsonServer.create();
const middlewares = jsonServer.defaults();
const router      = jsonServer.router(db);
const port        = 3001;

server.use(middlewares);
server.use(jsonServer.rewriter({
  '/service/api/v2/forums': '/forums',
  '/service/api/v2/forums/:id': '/forums/:id',
  '/service/api/v2/forums/:alias': '/forums/:alias',
  '/service/api/v2/selections/forums/TW': '/selections',
  '/service/api/v2/selections/forums/TW?:sensitiveSelection': '/selections?:sensitiveSelection',
  '/service/api/v2/categorization': '/categorization',
  '/service/api/v2/categorization/categories': '/categories',
  '/service/api/v2/categorization/categories/:id': '/categories/:id',
  '/service/moderator/api/forum/bulletin': '/bulletin',

  '/service/api/v2/forums/whysoserious/featuredPosts': '/whysoseriousFeaturedPosts',
  '/service/api/v2/forums/mood/featuredPosts': '/moodFeaturedPosts',
  '/service/api/v2/forums/freshman/featuredPosts': '/freshmanFeaturedPosts',
  '/service/api/v2/forums/relationship/featuredPosts': '/relationshipFeaturedPosts',
  '/service/api/v2/forums/makeup/featuredPosts': '/makeupFeaturedPosts',
  '/service/api/v2/forums/kebuke/featuredPosts': '/kebukeFeaturedPosts',
  '/service/api/v2/forums/job/featuredPosts': '/jobFeaturedPosts',
  '/service/api/v2/forums/stock/featuredPosts': '/stockFeaturedPosts',
  '/service/api/v2/forums/fragrance/featuredPosts': '/fragranceFeaturedPosts',
  '/service/api/v2/forums/boutique/featuredPosts': '/boutiqueFeaturedPosts',
  '/service/api/v2/forums/meme/featuredPosts': '/memeFeaturedPosts',
  '/service/api/v2/forums/clubhouse/featuredPosts': '/clubhouseFeaturedPosts',
  '/service/api/v2/forums/shinee/featuredPosts': '/shineeFeaturedPosts',
  '/service/api/v2/forums/nct/featuredPosts': '/nctFeaturedPosts',
  '/service/api/v2/forums/got7/featuredPosts': '/got7FeaturedPosts',
  '/service/api/v2/forums/redvelvet/featuredPosts': '/redvelvetFeaturedPosts',
  '/service/api/v2/forums/vtuber/featuredPosts': '/vtuberFeaturedPosts',
  '/service/api/v2/forums/sex/featuredPosts': '/sexFeaturedPosts',

  '/service/api/v2/search/forums/whysoserious': '/whysoseriousRelatedForums',
  '/service/api/v2/search/forums/mood': '/moodRelatedForums',
  '/service/api/v2/search/forums/freshman': '/freshmanRelatedForums',
  '/service/api/v2/search/forums/relationship': '/relationshipRelatedForums',
  '/service/api/v2/search/forums/makeup': '/makeupRelatedForums',
  '/service/api/v2/search/forums/kebuke': '/kebukeRelatedForums',
  '/service/api/v2/search/forums/job': '/jobRelatedForums',
  '/service/api/v2/search/forums/stock': '/stockRelatedForums',
  '/service/api/v2/search/forums/fragrance': '/fragranceRelatedForums',
  '/service/api/v2/search/forums/boutique': '/boutiqueRelatedForums',
  '/service/api/v2/search/forums/meme': '/memeRelatedForums',
  '/service/api/v2/search/forums/clubhouse': '/clubhouseRelatedForums',
  '/service/api/v2/search/forums/shinee': '/shineeRelatedForums',
  '/service/api/v2/search/forums/nct': '/nctRelatedForums',
  '/service/api/v2/search/forums/got7': '/got7RelatedForums',
  '/service/api/v2/search/forums/redvelvet': '/redvelvetRelatedForums',
  '/service/api/v2/search/forums/vtuber': '/vtuberRelatedForums',
  '/service/api/v2/search/forums/sex': '/sexRelatedForums',

  '/service/api/v2/forums/whysoserious/popular/posts': '/whysoseriousPopularPosts',
  '/service/api/v2/forums/mood/popular/posts': '/moodPopularPosts',
  '/service/api/v2/forums/freshman/popular/posts': '/freshmanPopularPosts',
  '/service/api/v2/forums/relationship/popular/posts': '/relationshipPopularPosts',
  '/service/api/v2/forums/makeup/popular/posts': '/makeupPopularPosts',
  '/service/api/v2/forums/kebuke/popular/posts': '/kebukePopularPosts',
  '/service/api/v2/forums/job/popular/posts': '/jobPopularPosts',
  '/service/api/v2/forums/stock/popular/posts': '/stockPopularPosts',
  '/service/api/v2/forums/fragrance/popular/posts': '/fragrancePopularPosts',
  '/service/api/v2/forums/boutique/popular/posts': '/boutiquePopularPosts',
  '/service/api/v2/forums/meme/popular/posts': '/memePopularPosts',
  '/service/api/v2/forums/clubhouse/popular/posts': '/clubhousePopularPosts',
  '/service/api/v2/forums/shinee/popular/posts': '/shineePopularPosts',
  '/service/api/v2/forums/nct/popular/posts': '/nctPopularPosts',
  '/service/api/v2/forums/got7/popular/posts': '/got7PopularPosts',
  '/service/api/v2/forums/redvelvet/popular/posts': '/redvelvetPopularPosts',
  '/service/api/v2/forums/vtuber/popular/posts': '/vtuberPopularPosts',
  '/service/api/v2/forums/sex/popular/posts': '/sexPopularPosts',

  '/service/api/v2/forums/whysoserious/posts': '/whysoseriousPosts',
  '/service/api/v2/forums/mood/posts': '/moodPosts',
  '/service/api/v2/forums/freshman/posts': '/freshmanPosts',
  '/service/api/v2/forums/relationship/posts': '/relationshipPosts',
  '/service/api/v2/forums/makeup/posts': '/makeupPosts',
  '/service/api/v2/forums/kebuke/posts': '/kebukePosts',
  '/service/api/v2/forums/job/posts': '/jobPosts',
  '/service/api/v2/forums/stock/posts': '/stockPosts',
  '/service/api/v2/forums/fragrance/posts': '/fragrancePosts',
  '/service/api/v2/forums/boutique/posts': '/boutiquePosts',
  '/service/api/v2/forums/meme/posts': '/memePosts',
  '/service/api/v2/forums/clubhouse/posts': '/clubhousePosts',
  '/service/api/v2/forums/shinee/posts': '/shineePosts',
  '/service/api/v2/forums/nct/posts': '/nctPosts',
  '/service/api/v2/forums/got7/posts': '/got7Posts',
  '/service/api/v2/forums/redvelvet/posts': '/redvelvetPosts',
  '/service/api/v2/forums/vtuber/posts': '/vtuberPosts',
  '/service/api/v2/forums/sex/posts': '/sexPosts',
}));

server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
