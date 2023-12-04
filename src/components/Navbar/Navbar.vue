<template>
  <div class="bg-blue-400">
    <nav class="flex justify-between items-center container mx-auto py-2 px-16">
      <div class="flex items-center">
        <mdicon class="text-white" name="language-typescript" />
        <mdicon class="text-white mx-1" name="vuejs" />
        <router-link class="text-2xl italic text-white font-semibold" to="/"
          ><span class="text-green-400 font-semibold">E</span
          >-COMMERCE</router-link
        >
      </div>
      <div class="flex items-center">
        <button class="mx-2 hover:scale-110">
          <mdicon class="text-white" name="cart" />
        </button>
        <router-link
          to="/api-test"
          class="border rounded-full py-1 px-4 text-white font-medium ml-4 hover:bg-white hover:text-slate-400 hover:scale-110">
          Sign Up | Sign In
        </router-link>
        <label class="switch mx-10">
          <input v-model="mode" type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
    </nav>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, watch, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const mode = ref<any>(null);
const darkMode = computed(() => {
  return store.state.darkMode;
});
watch(mode, () => {
  if (mode.value) {
    document.documentElement.classList.add("dark");
    store.commit("toggleDarkMode");
    localStorage.setItem("dark", "1");
  } else {
    document.documentElement.classList.remove("dark");
    store.commit("toggleDarkMode");
    localStorage.setItem("dark", "0");
  }
});
onMounted(() => {
  if (localStorage.dark == true) {
    mode.value = true;
  } else mode.value = false;
});
</script>
<style lang="scss" scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
