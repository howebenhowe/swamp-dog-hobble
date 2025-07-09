<script setup>
  import IngredientsTable from '/components/IngredientsTable.vue'
</script>

# Winter Distro

The winter distro recipe costs ~$85 for a 9-gallon yield of hearty-yet-balanced stew. Chickpeas! Salsa verde! A bowl to warm the belly and the heart both. To make dividing labor easier, the recipe is broken into "building blocks", parts of the total recipe that can be considered and prepared independently. Assemble the building blocks thus:

1. [shop for the ingredients](#shop-for-the-ingredients)
1. [prep the garlic/ginger](#garlic-ginger)
1. [mix the spices](#spice-mix)
1. [produce chicken stock](#chicken-stock)
1. [assemble salsa verde](#salsa-verde)
1. [pickle some of the cabbage](#pickled-cabbage)
1. [cook the rice](#rice)
1. [prep then cook the beans](#beans)
1. [braise the chicken](#braised-chicken)
1. [prep then cook the stew base](#stew-base)
1. [pack rice, salsa verde, and stew for distro](#pack)

## shop for the ingredients
<IngredientsTable :building-blocks="['stew_total']" show-notes/>

## garlic-ginger
<IngredientsTable :building-blocks="['garlic_ginger']" />
<!--@include: ../common/garlic-ginger.md-->

## spice mix
**whole spice**
<IngredientsTable :building-blocks="['whole_spice']"/>
**ground spice**
<IngredientsTable :building-blocks="['ground_spice']"/>
<!--@include: ../common/spice-mix.md-->

## chicken stock
<!--@include: ./chicken-stock.md-->

## salsa verde
<IngredientsTable :building-blocks="['salsa_verde']" />
<!--@include: ../common/salsa-verde.md-->

## rice
<!--@include: ./rice.md-->

## pickled cabbage
<IngredientsTable :building-blocks="['pickled_cabbage']" />
<!--@include: ../common/pickled-cabbage.md-->

## beans
<IngredientsTable :building-blocks="['beans']" />
<!--@include: ../common/beans.md-->

## braised chicken
<IngredientsTable :building-blocks="['braised_chicken']" />
<!--@include: ./braised-chicken.md-->

## stew base
<IngredientsTable :building-blocks="['stew_base']" />
<!--@include: ./base.md-->

## pack
<!--@include: ./pack.md-->
