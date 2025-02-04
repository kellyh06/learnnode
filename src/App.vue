<script setup>
import {ref} from 'vue';
import Tabs from './components/Tabs.vue';
let titles = ref(['Item1', 'Item2', 'Item3', 'Item4']);

</script>

<template>
    <Tabs :items="titles"></Tabs>
</template>

<style></style>