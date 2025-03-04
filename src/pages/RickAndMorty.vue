<script setup>
import axios from 'axios';
import { ref } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';

const characters = ref([]);
const info = ref({});

await getCharacters('https://rickandmortyapi.com/api/character');

async function getCharacters(url) {
    let responce = await axios.get(url);
    console.log(responce.data);
    characters.value = responce.data.results;
    info.value = responce.data.info;
}


async function next() {
    await getCharacters(info.value.next);
}
async function prev() {
    await getCharacters(info.value.prev);
}

</script>
<template>
    <div class="buttons">
        <button class="button is-primary" @click="prev" :disabled="!info.prev">Prev</button>
        <button class="button is-primary" @click="next" :disabled="!info.next"> Next</button>
    </div>
    <div class="columns columns is-multiline">
        <div v-for="character in characters" class="column is-one-quarter">
            <CharacterCard :character="character"></CharacterCard>
        </div>
    </div>

</template>