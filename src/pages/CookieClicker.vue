<script setup>
import { computed, onUnmounted, ref } from 'vue';
let cookies = ref(0);

let buildings = ref([
    { name: 'Cursor', price: 15, count: 0, cps: 0.1 },
    { name: 'Grandma', price: 100, count: 0, cps: 1 },
    { name: 'Farm', price: 1000, count: 0, cps: 10 },
    { name: 'Factory', price: 10000, count: 0, cps: 100 }

]);
let cps = computed(() => {
    return buildings.value.reduce((total, building) => total + building.cps * building.count, 0);
});

const cpsInterval = setInterval(() => {
    cookies.value += cps.value;
    document.title = ` 🍪${+cookies.value.toFixed(1)}`;
}, 1000);

function buyBuilding(building) {
    cookies.value -= building.price;
    building.price += Math.ceil(building.price * 0.15);
    building.count++;
}

onUnmounted(() => {
    clearInterval(cpsInterval);
});

const goldenCookieVisible = ref(false);
const goldenCookieTimer = ref(null);

function showGoldenCookie() {
    goldenCookieVisible.value = true;

    setTimeout(() => {
        goldenCookieVisible.value = false;
    }, 5000); // Nähtav 5 sekundit
}

// Näita Golden Cookie't iga 20–40 sekundi tagant
function startGoldenCookieTimer() {
    goldenCookieTimer.value = setInterval(() => {
        if (!goldenCookieVisible.value) {
            showGoldenCookie();
        }
    }, Math.floor(Math.random() * 20000) + 20000); // 20-40 sekundit
}

function clickGoldenCookie() {
    cookies.value += 100 * (1 + cps.value); // annab korraliku boosti!
    goldenCookieVisible.value = false;
}

startGoldenCookieTimer();
onUnmounted(() => {
    clearInterval(cpsInterval);
    clearInterval(goldenCookieTimer.value);
});


//features
</script>

<template>
    <div class="columns">
        <div class="column is-3 has-background-primary has-text-centered">
            <h1 class="is-size-1"><b>Cookies: {{ +cookies.toFixed(1) }}</b></h1>
            <h3 class="is-size-3"><b>CPS: {{ +cps.toFixed(1) }}</b></h3>
            <figure class="image is-square m-5">
                <img @click="cookies++" class="is-rounded" src="https://pngimg.com/uploads/cookie/cookie_PNG13656.png">
            </figure>
        </div>

        <div class="column is-7 has-background-info">Second column</div>
        <div class="column is-2 has-background-warning">
            <button class="button is-large is-fullwidh is-primary" v-for="building in buildings"
                :disabled="cookies < building.price" @click="buyBuilding(building)">
                {{ building.name }} 🍪{{ building.price }} #{{ building.count }}
            </button>
        </div>

        <img v-if="goldenCookieVisible" @click="clickGoldenCookie" src="/images/golden-cookie.png" class="is-rounded"
            style="position: absolute; top: 50%; left: 50%; width: 100px; cursor: pointer; transform: translate(-50%, -50%); z-index: 10;" />


    </div>
</template>