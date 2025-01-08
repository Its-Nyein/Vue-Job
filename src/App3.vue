<script setup>
  import { onMounted, ref } from 'vue';

  const name = ref("Nyein Phyo Aung");
  const status = ref("pending");
  const tasks = ref([]);
  const newTask = ref('');

  const toogleClick = () => {
    if(status.value === "active") {
      status.value = 'pending'
    } else if(status.value === 'pending') {
      status.value = 'inactive'
    } else {
      status.value = 'active'
    }
  }

  const onSubmit = () => {
    if(newTask.value !== '') {
      tasks.value.push(newTask.value);
      newTask.value = '';
    }
  }

  const deleteTask = (index) => {
    tasks.value.splice(index, 1)
  }

  onMounted(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    console.log(data)

    tasks.value = data.slice(0, 20).map(task => task.title)
  })

</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <form @submit.prevent="onSubmit">
    <label for="task">Task: </label>
    <input type="text" id="newTask" name="newTask" v-model="newTask">
    <button type="submit">Submit</button>
  </form>

  <div>
    <ul v-for="(task, index) in tasks" :key="task">
      <li>
        <span>{{ task }}</span>
        <button @click="deleteTask(index)">Delete</button>
      </li>
    </ul>
  </div>

  <button @click="toogleClick">Click Me</button>
</template>