<script setup>
import {RouterLink, useRoute, useRouter} from 'vue-router';

const route = useRoute();
const router = useRouter();

console.log(router.getRoutes(), route);

</script>
<template>
    <div class="tabs is-centered">
        <ul>
            <li  v-for="(item,key) in $router.getRoutes()" :class="{'is-active': item.path === $route.path}">
                <RouterLink :to="item.path">{{item.name}}</RouterLink>
            </li>
        </ul>
    </div>
</template>