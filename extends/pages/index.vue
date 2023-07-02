<template>
    i'm index page
    <br><br>
    <nuxt-link :to="localePath('/a')">to A</nuxt-link><br>
    <nuxt-link :to="localePath('/b')">to B</nuxt-link><br><br>
    QUERIES <br>
    <nuxt-link :to="localePath({ query: { test: '1' } })">test 1</nuxt-link><br>
    <nuxt-link :to="localePath({ query: { test: '2' } })">test 2</nuxt-link><br>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
console.log('localePath');
console.log(localePath);
</script>