<script setup>
import axios from 'axios';
import { ref } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';
import Pagination from '../components/Pagination.vue';

const characters = ref([]);
const info = ref({});
const currentPage = ref(1);

await getCharacters('https://rickandmortyapi.com/api/character');

async function getCharacters(url) {
    let responce = await axios.get(url);
    console.log(responce.data);
    characters.value = responce.data.results;
    info.value = responce.data.info;
}


async function next() {
    currentPage.value++;
    await getCharacters(info.value.next);
}
async function prev() {
    currentPage.value--;
    await getCharacters(info.value.prev);
}

</script>
<template>
    <Pagination :info="info" :current="currentPage" @next="next" @prev="prev"></Pagination>
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