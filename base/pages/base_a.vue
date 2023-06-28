<template>
    i'm A page
    <br><br>
    <nuxt-link :to="localePath('/')">to index</nuxt-link><br>
    <nuxt-link :to="localePath('/base_b')">to B</nuxt-link>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>
