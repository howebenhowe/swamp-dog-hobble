<script setup>
  const props = defineProps({
    buildingBlocks: Array,
    showNotes: Boolean
  })
  import { getIngredientsForBlocks } from '/distro/utils.ts'
  import { data } from '/distro/ingredients.data.ts'
  const ingredients = getIngredientsForBlocks(props.buildingBlocks, data);
</script>

<template>
  <table>
  <tr>
    <th style="text-align:left;">ingredient</th>
    <th style="text-align:right;">quantity (g unless specified)</th>
    <th v-if="showNotes" style="text-align:right;">shopping guidance</th>
  </tr>
  <tbody>
    <tr v-for="ingredient of ingredients">
      <td style="text-align:left;">{{ ingredient.name }}</td>
      <td style="text-align:right;">{{ ingredient.amount }} {{ ingredient.unit || '' }}</td>
      <td v-if="showNotes" style="text-align:right;">{{ ingredient.notes }}</td>
    </tr>
      </tbody>
  </table>
</template>
