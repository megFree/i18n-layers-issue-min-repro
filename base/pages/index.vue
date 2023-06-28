<template>
    i'm index page
    <br><br>
    <nuxt-link :to="localePath('/base_a')">to A</nuxt-link><br>
    <nuxt-link :to="localePath('/base_b')">to B</nuxt-link>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
console.log('localePath');
console.log(localePath);
</script>