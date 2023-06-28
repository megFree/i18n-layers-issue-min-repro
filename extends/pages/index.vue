<template>
    i'm index page
    <br><br>
    <nuxt-link :to="localePath('/a')">to A</nuxt-link><br>
    <nuxt-link :to="localePath('/b')">to B</nuxt-link>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
console.log('localePath');
console.log(localePath);
</script>