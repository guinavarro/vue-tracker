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
import { defineComponent, computed } from 'vue';
import BoxComponent from '../components/BoxComponent.vue';
import FormComponent from '../components/FormComponent.vue';
import TaskComponent from '../components/TaskComponent.vue';
import { ADD_TASK, REMOVE_TASK } from '@/store/mutations-type';

import ITask from '../interfaces/ITask'
import { useStore } from '@/store';

export default defineComponent({
  name: 'TrackerComponent',
  components: {
    BoxComponent,
    FormComponent,
    TaskComponent 
  },
  data(){
    return{
      darkModeOn: false
     
    }
  },
  setup() {
    const store = useStore()
    return {
      tasks: computed(() => store.state.tasks),
      store
    }
  }, 
  computed: {
      isTasksEmpty () : boolean {
        return this.tasks.length === 0
      }
  },
  methods: {
    saveTask(task: ITask){
      this.store.commit(ADD_TASK, task)
    },
    changeTheme(darkModeOn: boolean){
      this.darkModeOn = darkModeOn
    },
    handleTaskRemoved(index: number){
      let task = this.tasks[index]
      this.store.commit(REMOVE_TASK, task)
    }
  }
});
</script>

<style>
.list {
  padding: 1.25rem;
}
</style>