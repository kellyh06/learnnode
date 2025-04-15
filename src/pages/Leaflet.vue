<script setup>
import { ref } from 'vue';
import LeafletMap from '../components/LeafletMap.vue';

let center = ref([59.42686, 24.74349]);
let zoom = ref(19);
</script>

<template>
    <button class="button is-primary" @click="center=[59.42690428610938, 24.743724350955294]">Go to home</button>
    <input type="range" min="1" max="19" v-model="zoom">
    <LeafletMap :center="center" :zoom="zoom"></LeafletMap>
    <LeafletMap :center="[24.4296, 59.7434]" :zoom="19"></LeafletMap>
</template>
