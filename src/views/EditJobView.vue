<script setup>
    import { onMounted, reactive } from 'vue';
    import router from '@/router';
    import axios from 'axios';
    import { useToast } from "vue-toastification";
    import { useRoute } from 'vue-router';

    const form = reactive({
        type: 'Full-Time',
        title: '',
        description: '',
        salary: 'Under $50USD',
        location: '',
        company: {
            name: '',
            description: '',
            contactEmail: '',
            contactPhone: ''
        }
    })

    const toast = useToast();
    const route = useRoute();
    const jobId = route.params.id;

    const state = reactive({
        job: {},
        isLoading: true
    })

    const handleOnSubmit = async () => {
        const updatedJob = {
            title: form.title,
            type: form.type,
            location: form.location,
            description: form.description,
            salary: form.salary,
            company: {
            name: form.company.name,
            description: form.company.description,
            contactEmail: form.company.contactEmail,
            contactPhone: form.company.contactPhone,
            },
        };
        
        try {
            const res = await axios.put(`/api/jobs/${jobId}`, updatedJob);
            router.push(`/jobs/${res.data.id}`);
            toast.success('Job updated successfully!', {
                timeout: 2000
            })
        } catch (error) {
            console.error("Error on update job", error.message);
            toast.error('Failed on updating job!')
        }
    }

    onMounted(async () => {
        try {
            const response = await axios.get(`/api/jobs/${jobId}`);
            state.job = response.data;
            form.type = state.job.type;
            form.title = state.job.title;
            form.description = state.job.description;
            form.salary = state.job.salary;
            form.location = state.job.location;
            form.company.name = state.job.company.name;
            form.company.description = state.job.company.description;
            form.company.contactEmail = state.job.company.contactEmail;
            form.company.contactPhone = state.job.company.contactPhone;
        } catch (error) {
            console.error('Error fetching job', error);
            state.isLoading = false;
        } finally {
            state.isLoading = false;
        }
});
</script>

<template>
    <section class="bg-green-50">
      <div class="container m-auto max-w-2xl py-24">
        <div
          class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form @submit.prevent="handleOnSubmit">
            <h2 class="text-3xl text-center font-semibold mb-6">Edit Job</h2>

            <div class="mb-4">
              <label for="type" class="block text-gray-700 font-bold mb-2"
                >Job Type</label
              >
              <select
                v-model="form.type"
                id="type"
                name="type"
                class="border rounded w-full py-2 px-3 focus:outline-green-300"
                required
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2"
                >Job Listing Name</label
              >
              <input
                v-model="form.title"
                type="text"
                id="name"
                name="name"
                class="border rounded w-full py-2 px-3 mb-2 focus:outline-green-300"
                placeholder="eg. Beautiful Apartment In Miami"
                required
              />
            </div>
            <div class="mb-4">
              <label
                for="description"
                class="block text-gray-700 font-bold mb-2"
                >Description</label
              >
              <textarea
                v-model="form.description"
                id="description"
                name="description"
                class="border rounded w-full py-2 px-3 focus:outline-green-300"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="type" class="block text-gray-700 font-bold mb-2"
                >Salary</label
              >
              <select
                v-model="form.salary"
                id="salary"
                name="salary"
                class="border rounded w-full py-2 px-3 focus:outline-green-300"
                required
              >
                <option value="Under $50USD">under $50USD</option>
                <option value="$50USD - $100USD">$50 - $100USD</option>
                <option value="$100USD - $150USD">$100 - $150USD</option>
                <option value="$150USD - $200USD">$150 - $200USD</option>
                <option value="Over $200USD">Over $200USD</option>
              </select>
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2">
                Location
              </label>
              <input
                v-model="form.location"
                type="text"
                id="location"
                name="location"
                class="border rounded w-full py-2 px-3 mb-2 focus:outline-green-300"
                placeholder="Company Location"
                required
              />
            </div>

            <h3 class="text-2xl mb-5">Company Info</h3>

            <div class="mb-4">
              <label for="company" class="block text-gray-700 font-bold mb-2"
                >Company Name</label
              >
              <input
                v-model="form.company.name"
                type="text"
                id="company"
                name="company"
                class="border rounded w-full py-2 px-3 focus:outline-green-300"
                placeholder="Company Name"
              />
            </div>

            <div class="mb-4">
              <label
                for="company_description"
                class="block text-gray-700 font-bold mb-2"
                >Company Description</label
              >
              <textarea
                v-model="form.company.description"
                id="company_description"
                name="company_description"
                class="border rounded w-full py-2 px-3 focus:outline-green-300"
                rows="4"
                placeholder="What does your company do?"
              ></textarea>
            </div>

            <div class="mb-4">
              <label
                for="contact_email"
                class="block text-gray-700 font-bold mb-2"
                >Contact Email</label
              >
              <input
                v-model="form.company.contactEmail"
                type="email"
                id="contact_email"
                name="contact_email"
                class="border rounded w-full py-2 px-3 focus:outline-green-300"
                placeholder="Email address for applicants"
                required
              />
            </div>
            <div class="mb-4">
              <label
                for="contact_phone"
                class="block text-gray-700 font-bold mb-2"
                >Contact Phone</label
              >
              <input
                v-model="form.company.contactPhone"
                type="tel"
                id="contact_phone"
                name="contact_phone"
                class="border rounded w-full py-2 px-3 focus:outline-green-300"
                placeholder="Optional phone for applicants"
              />
            </div>

            <div>
              <button
                class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
</template>