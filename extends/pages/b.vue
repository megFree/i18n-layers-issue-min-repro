<template>
    i'm B page
    <br><br>
    <nuxt-link :to="localePath('/')">to index</nuxt-link><br>
    <nuxt-link :to="localePath('/a')">to A</nuxt-link>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>