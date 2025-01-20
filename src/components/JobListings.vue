<script setup lang="ts">
import { ref, defineProps } from 'vue';
import JobCard from './JobCard.vue';
import data from '@/data.json'

const jobs = ref(data);
const showButton = ref('more');

defineProps({
  limit: Number,
})

const showToggle = () => {
  if(showButton.value === 'more') {
    showButton.value = 'less'
  } else {
    showButton.value = 'more'
  }
}
</script>

<template>
    <section class="bg-green-50 px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <JobCard v-for="job in jobs.slice(0, showButton === 'more' ? jobs.length : limit)" :key="job.id" :job="job"/>
        </div>
      </div>
    </section>
    <section @click="showToggle" class="m-auto max-w-lg my-10 px-6">
      <a
        href="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>
</template>