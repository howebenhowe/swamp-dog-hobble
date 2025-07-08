<script setup>
  import IngredientsTable from '/components/IngredientsTable.vue'
</script>

# Summer Distro

The summer distro recipe costs ~$75 for a 9-gallon yield of fresh-vegetable-rich chicken balela. To make dividing labor easier, the recipe is broken into "building blocks", parts of the total recipe that can be considered and prepared independently. Assemble the building blocks thus:

1. [shop for the ingredients](#shop-for-the-ingredients)
1. [prep the garlic/ginger](#garlic-ginger)
1. [mix the spices](#spice-mix)
1. [assemble salsa verde](#salsa-verde)
1. [pickle the cabbage](#pickled-cabbage)
1. [prep then cook the beans](#beans)
1. [process the fresh vegetables](#veggies)
1. [prep then cook the balela base](#balela-base)

## shop for the ingredients
<IngredientsTable :building-blocks="['summer_total']" show-notes/>

## garlic-ginger
<IngredientsTable :building-blocks="['garlic_ginger']" />
<!--@include: ../common/garlic-ginger.md-->

## spice mix
**whole spice**
<IngredientsTable :building-blocks="['whole_spice']"/>
**ground spice**
<IngredientsTable :building-blocks="['ground_spice']"/>
<!--@include: ../common/spice-mix.md-->

## salsa verde
<IngredientsTable :building-blocks="['salsa_verde']" />
<!--@include: ../common/salsa-verde.md-->

## pickled cabbage
<IngredientsTable :building-blocks="['pickled_cabbage']" />
<!--@include: ../common/pickled-cabbage.md-->

## beans
<IngredientsTable :building-blocks="['beans']" />
<!--@include: ../common/beans.md-->

## veggies
<IngredientsTable :building-blocks="['veggies']" />
<!--@include: ./veggies.md-->

## balela base
<IngredientsTable :building-blocks="['base']" />
<!--@include: ./base.md-->
