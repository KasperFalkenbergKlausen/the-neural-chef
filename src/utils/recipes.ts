import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Returns recipes.
 * In development mode (npm run dev), returns all recipes including scheduled ones.
 * In production builds (GitHub Pages), filters out recipes whose pubDate is in the future.
 */
export async function getPublishedRecipes(): Promise<CollectionEntry<'recipes'>[]> {
  const allRecipes = await getCollection('recipes');
  
  if (import.meta.env.DEV) {
    return allRecipes;
  }

  const now = new Date();
  return allRecipes.filter((recipe) => new Date(recipe.data.pubDate) <= now);
}
