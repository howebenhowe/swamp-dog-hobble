import { Ingredient } from '/types.ts';

export const getIngredientsForBlocks = (blocks: string[], allIngredients: Ingredient[]): Ingredient[] => {
  return allIngredients.filter(ingredient => ingredient['building block'] && blocks.indexOf(ingredient['building block']) >= 0);
}
