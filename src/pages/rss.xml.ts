import rss from '@astrojs/rss';
import { getPublishedRecipes } from '../utils/recipes';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const recipes = await getPublishedRecipes();

  // Sorter efter nyeste dato først
  const sortedRecipes = recipes.sort(
    (a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
  );

  return rss({
    title: 'The Neural Chef',
    description: 'AI-Powered Culinary Creations and Algorithmically Balanced Recipes',
    site: context.site ?? 'https://theneuralchef.com',
    xmlns: {
      media: 'http://search.yahoo.com/mrss/',
      content: 'http://purl.org/rss/1.0/modules/content/',
    },
    items: sortedRecipes.map((recipe) => {
      const slug = recipe.id.replace(/\.md$/, '').replace(/\.mdx$/, '');
      const imageUrl = recipe.data.featuredImage?.src
        ? new URL(recipe.data.featuredImage.src, context.site ?? 'https://theneuralchef.com').toString()
        : undefined;

      return {
        title: recipe.data.title,
        pubDate: recipe.data.pubDate,
        description: recipe.data.description,
        link: `/recipes/${slug}/`,
        customData: imageUrl
          ? `<media:content url="${imageUrl}" medium="image" />
<enclosure url="${imageUrl}" type="image/jpeg" length="0" />`
          : '',
      };
    }),
    customData: `<language>en-us</language>`,
  });
}
