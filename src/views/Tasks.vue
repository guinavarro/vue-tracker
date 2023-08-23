<template>
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BoxComponent from '../components/BoxComponent.vue';
import FormComponent from '../components/FormComponent.vue';
import TaskComponent from '../components/TaskComponent.vue';

import ITask from '../interfaces/ITask'

export default defineComponent({
  name: 'TrackerComponent',
  components: {
    BoxComponent,
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
</style>