<template>
  <main class="columns is-gapless is-multiline" :class="{ 'dark-mode': darkModeOn }">
    <div class="column is-one-quarter">
      <SidebarComponent @toThemeChanged="changeTheme" />
    </div>
    <div class="column is-three-quarter content">
    <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SidebarComponent from './components/SidebarComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    SidebarComponent,
  },
  data() {
    return {
      darkModeOn: false
    }
  },
  methods: {
    changeTheme(darkModeOn: boolean) {
      this.darkModeOn = darkModeOn
    }
  }
});
</script>

<style>
main {
  --bg-primary: #fff;
  --text-primary: #000;
}

main.dark-mode {
  --bg-primary: #2b2d42;
  --text-primary: #ddd;
}

.content {
  background-color: var(--bg-primary);
}
</style>
