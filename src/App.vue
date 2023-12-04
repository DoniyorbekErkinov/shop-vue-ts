<template>
  <div class="bg-gray-200">
    <nav>
      <Navbar />
    </nav>
    <div class="h-full">
      <router-view />
    </div>
  </div>
</template>
<script>
import Navbar from "./components/Navbar/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
