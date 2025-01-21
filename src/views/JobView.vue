<script setup>
  import axios from 'axios';
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
  import { useRoute, RouterLink } from 'vue-router';
import { onMounted, reactive } from 'vue';

  const route = useRoute();
  const jobId = route.params.id;

  const state = reactive({
    job: {},
    isLoading: true
  })

  onMounted(async () => {
  try {
    const res = await axios.get(`http://localhost:8000/jobs/${jobId}`);
    state.job = res.data;

    setTimeout(() => {
      state.isLoading = false
    }, 2000)
  } catch (error) {
    console.error("Error on fetch job", error.message);
    state.isLoading = false
  }
})
</script>

<template>
  <div v-if="state.isLoading" class="text-center mt-20">
      <PulseLoader />
  </div>

  <section v-else class="bg-green-50">
      <div class="container m-auto py-10 px-6">
        <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div class="text-gray-500 mb-4">{{ state.job.type }}</div>
              <h1 class="text-3xl font-bold mb-4">{{ state.job.title }}</h1>
              <div class="text-orange-700 mb-3">
                  <i class="pi pi-map-marker text-orange-700"></i>
                  {{ state.job.location }}
                </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 class="text-green-800 text-lg font-bold mb-6">
                Job Description
              </h3>

              <p class="mb-4">{{ state.job.description }}</p>

              <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>
              <p class="mb-4">{{ state.job.salary }} / Year</p>
            </div>
          </main>

          <!-- Sidebar -->
          <aside>
            <!-- Company Info -->
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-6">Company Info</h3>

              <h2 class="text-2xl font-bold">{{ state.job.company.name }}</h2>

              <p class="my-2">{{ state.job.company.description }}</p>

              <hr class="my-4" />

              <h3 class="text-xl">Contact Email:</h3>

              <p class="my-2 bg-green-100 p-2 font-bold rounded-md">{{ state.job.company.contactEmail }}</p>

              <h3 class="text-xl">Contact Phone:</h3>

              <p class="my-2 bg-green-100 p-2 font-bold rounded-md">{{ state.job.company.contactPhone }}</p>
            </div>

            <!-- Manage -->
            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 class="text-xl font-bold mb-6">Manage Job</h3>
              <RouterLink
                :to="`/jobs/edit/${state.job.id}`"
                class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Job</RouterLink
              >
              <button
                class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
</template>