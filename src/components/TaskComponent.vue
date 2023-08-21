<template>
<BoxComponent>
    <div class="columns">
        <div class="column is-7">{{ task.description || 'Task without description' }}</div>
      <div class="column">
        <StopwatchComponent :timeInSeconds="task.timeInSeconds"/>
      </div>
    </div>
</BoxComponent>

</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import StopwatchComponent from './StopwatchComponent.vue';
import BoxComponent from './BoxComponent.vue'
import ITask from '../interfaces/ITask'

export default defineComponent({
    name: 'TaskComponent',
    components: {
        BoxComponent,
        StopwatchComponent
    },
    props: {
        task: {
            type: Object as PropType<ITask>,
            required: true
        }
    }
})
</script>