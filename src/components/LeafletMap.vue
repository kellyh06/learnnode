<script setup>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-shadow.png';
import { onMounted, useId, watch } from 'vue';

const { center, zoom } = defineProps(['center', 'zoom']);
const id = 'map-' + useId();
let map;
onMounted(() => {
    map = L.map(id).setView(center, zoom);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Kodu koordinaadid
    const homeCoords = [58.73120, 24.40793];

    L.marker(homeCoords).addTo(map);

    const polygonCoords = [
        [58.73150, 24.40760], // ülemine vasak
        [58.73090, 24.40760], // alumine vasak
        [58.73090, 24.40830], // alumine parem
        [58.73150, 24.40830]  // ülemine parem
    ];
    L.polygon(polygonCoords, {
        color: 'blue',
        fillColor: '#3f51b5',
        fillOpacity: 0.3
    }).addTo(map);
});

watch(() => center, (center, oldCenter) => {
    console.log(center, oldCenter);
    map.panTo(center);
});

watch(() => zoom, (zoom) => {
    map.setZoom(zoom);
});
</script>

<template>
    <div :id="id"></div>
</template>

<style scoped>
div {
    height: 100vh;
}
</style>