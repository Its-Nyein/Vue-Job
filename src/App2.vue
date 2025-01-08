<script>
  export default {
    data() {
      return {
        name: "Nyein Phyo Aung",
        active: 'pending',
        tasks: ["Task One", "Task Two", "Task Three"],
        link: "https://www.google.co.uk/"
      }
    },
    methods: {
      toogleStatus() {
        if(this.active === 'active') {
          this.active = 'pending'
        } else if(this.active === 'pending') {
          this.active = 'inactive'
        } else {
          this.active = 'active'
        }
      }
    }
  }
</script>

<template>
  <h1>{{ name }}</h1>
    <p v-if="active === 'active'">User is active</p>
    <p v-else-if="active === 'pending'">User is pending</p>
    <p v-else>User is inactive</p>
    <div>
      <h2>Task:</h2>
      <ul v-for="task in tasks" :key="task">
        <li>{{ task }}</li>
      </ul>
    </div>

    <!-- <a v-bind:href="link">Google</a> -->
    <a :href="link">Google</a>
    <br/>
    <!-- <button v-on:click="toogleStatus">Click Me</button> -->
    <button @click="toogleStatus">Click Me</button>
</template>
