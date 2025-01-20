<script setup>
    import Navbar from './components/Navbar.vue';
    import Hero from './components/Hero.vue';
    import HomeCard from './components/HomeCard.vue';
import JobListings from './components/JobListings.vue';
</script>

<template>
    <Navbar/>
    <Hero title="Become a Vue Dev" subtitle="Find the Vue job that fits your skills and needs"/>
    <HomeCard/>
    <JobListings :limit="3"/>
</template>