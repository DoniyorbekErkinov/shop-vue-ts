<template>
  <nav>
    <Navbar/>
  </nav>
  <router-view/>
</template>
<script>
import Navbar from './components/Navbar/Navbar.vue';
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
