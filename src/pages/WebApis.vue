<script setup>


function vibrate(){
    if(navigator.vibrate){
        navigator.vibrate(200);
    } 
    
}

function starwars(){
    navigator.vibrate(500, 110, 500, 110, 450, 110, 500, 110, 500);
}

function location(){
    navigator.geolocation.getCurrentPosition((event) => {
        console.log(event);
    },  (error) => {
        console.log('error', error);
    });
}

</script>

<template>
<button @clikc="vibrate" class="button is-primary"> Vibrate</button>
<button @clikc="starwars" class="button is-primary"> Starwars</button>
<button @clikc="location" class="button is-warning"> Locate</button>
</template>