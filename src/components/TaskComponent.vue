<template>
<BoxComponent>
    <div class="columns">
        <div class="column is-7">{{ task.description || 'Task without description' }}</div>
      <div class="column">
        <StopwatchComponent :timeInSeconds="task.timeInSeconds"/>
        </div>
        <div class="column">
        <ButtonComponent
        :buttonIcon="'fas fa-xmark'"
        :buttonClass="'is-danger'"
        @click="taskRemoved"
       />
      </div>
    </div>
</BoxComponent>

</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import StopwatchComponent from './StopwatchComponent.vue';
import BoxComponent from './BoxComponent.vue'
import ButtonComponent from './ButtonComponent.vue';

import ITask from '../interfaces/ITask'

export default defineComponent({
    name: 'TaskComponent',
    emits: ['taskRemoved'],
    components: {
        BoxComponent,
        StopwatchComponent,
        ButtonComponent
    },
    props: {
        task: {
            type: Object as PropType<ITask>,
            required: true
        }
    },
    methods: {
        taskRemoved(){
            this.$emit('taskRemoved', true)
        }
    }
})
</script>