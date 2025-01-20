<script setup>
    import Navbar from './components/Navbar.vue';
    import { RouterView } from 'vue-router'; // <Outlet/>
</script>

<template>
    <Navbar/>
    <RouterView/>
</template>