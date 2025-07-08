import { Ingredient } from '/types.ts';

export const getIngredientsForBlocks = (blocks: string[], allIngredients: Ingredient[]): Ingredient[] => {
  return allIngredients.filter(ingredient => ingredient['blocks'] && ingredient['blocks'].split(':').some(block => blocks.indexOf(block) >= 0));
}
