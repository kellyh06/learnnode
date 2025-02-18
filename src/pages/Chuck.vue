<script setup>
import { ref } from 'vue';
import axios from 'axios';


let joke = ref('');

//axios.get('https://api.chucknorris.io/jokes/random').then(res => {
//    joke.value = responce.data.value;
//}).catch(err => {
//    cobsole.log(err);
//});

try {
    let responce = await axios.get('https://api.chucknorris.io/jokes/random');
    joke.value = responce.data.value;
} catch (err) {
    console.log(err);
}

</script>

<template>
    {{ joke }}
</template>