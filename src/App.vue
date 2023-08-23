<template>
<main 
class="columns is-gapless is-multiline" 
:class="{ 'dark-mode' : darkModeOn }">
  <div class="column is-one-quarter">
    <SidebarComponent @toThemeChanged="changeTheme"/>
  </div>
  <div class="column is-three-quarter content">
    <FormComponent @toSaveTask="saveTask"/>
    <div class="list">
      <TaskComponent 
      v-for="(task, index) in tasks" 
      :key="index" 
      :task="task"
      @taskRemoved="handleTaskRemoved(index)"/>
      <BoxComponent v-if="isTasksEmpty">
        You aren't so productive today :(
      </BoxComponent>
    </div>
  </div>
</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BoxComponent from './components/BoxComponent.vue';
import FormComponent from './components/FormComponent.vue';
import SidebarComponent from './components/SidebarComponent.vue';
import TaskComponent from './components/TaskComponent.vue';

import ITask from './interfaces/ITask'

export default defineComponent({
  name: 'App',
  components: {
    BoxComponent,
    SidebarComponent,
    FormComponent,
    TaskComponent 
  },
  data(){
    return{
      darkModeOn: false,
      tasks: [] as ITask[]
    }
  },
  computed: {
      isTasksEmpty () : boolean {
        return this.tasks.length === 0
      }
  },
  methods: {
    saveTask(task: ITask){
      this.tasks.push(task)
    },
    changeTheme(darkModeOn: boolean){
      this.darkModeOn = darkModeOn
    },
    handleTaskRemoved(index: number){
      this.tasks.splice(index, 1);
    }
  }
});
</script>

<style>
.list {
  padding: 1.25rem;
}

main {
  --bg-primary: #fff;
  --text-primary: #000;
}

main.dark-mode{
  --bg-primary: #2b2d42;
  --text-primary: #ddd;
}

.content{
  background-color: var(--bg-primary);
}
</style>
