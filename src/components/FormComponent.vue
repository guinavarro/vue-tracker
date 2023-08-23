<template>
    <div class="box form">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="New Task's form">
                <input 
                type="text" 
                class="input"
                placeholder="What task do you want to start?"
                v-model="description">                
            </div>
            <div class="column">
                <TimerComponent @toTimerFinished="finishTask"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TimerComponent from './TimerComponent.vue';

export default defineComponent({
    name: 'FormComponent',
    emits: ['toSaveTask'],
    components: {
        TimerComponent
    },
    data () {
        return {
            description: ''
        }
    },
    methods: {
        finishTask(elapsedTime : number) : void {
            this.$emit('toSaveTask', {
                timeInSeconds: elapsedTime,
                description: this.description
            })
            this.description = ''
        }
    }
})
</script>

<style>
.form{
    color: var(--text-primary);
    background-color: var(--bg-primary);
}

</style>