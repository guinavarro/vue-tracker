<template>
  <main class="columns is-gapless is-multiline" :class="{ 'dark-mode': darkModeOn }">
    <div class="column is-one-quarter">
      <SidebarComponent @toThemeChanged="changeTheme" />
    </div>
    <NotificationComponent/>
    <div class="column is-three-quarter content">
    <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SidebarComponent from './components/SidebarComponent.vue';
import NotificationComponent from './components/NotificationComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    SidebarComponent,
    NotificationComponent
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
