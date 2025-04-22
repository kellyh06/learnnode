<script setup>
import { ref } from 'vue';
import LeafletMap from '../components/LeafletMap.vue';

let center = ref([58.73120, 24.40793]);
let zoom = ref(19);
</script>

<template>
    <button class="button is-primary" @click="center=[58.73120, 24.40793]">Go to home</button>
    <input type="range" min="1" max="19" v-model="zoom">
    <LeafletMap :center="center" :zoom="zoom"></LeafletMap>
    <LeafletMap :center="[58.73120, 24.40793]" :zoom="19"></LeafletMap>
</template>
