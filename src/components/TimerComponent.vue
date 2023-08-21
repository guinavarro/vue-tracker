<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
       <StopwatchComponent :timeInSeconds="timeInSeconds"/>
        <ButtonComponent
        :buttonName="'play'"
        :buttonIcon="'fas fa-play'"
        :isDisabled="isStopwatchRunning"
        @buttonClicked="start"/>
        <ButtonComponent
        :buttonName="'stop'"
        :buttonIcon="'fas fa-stop'"
        :isDisabled="!isStopwatchRunning"
        @buttonClicked="stop"/>
    </div>  
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ButtonComponent from './ButtonComponent.vue';
import StopwatchComponent from './StopwatchComponent.vue';

export default defineComponent({
    name: 'TimerComponent',
    components: { 
        ButtonComponent,
        StopwatchComponent
    },
    emits: ['toTimerFinished'],
    data () {
        return {
            timeInSeconds: 0,
            timer: 0,
            isStopwatchRunning: false
        }
    },
    methods: {
        start () {
            this.isStopwatchRunning = true
            this.timer = setInterval(() => {
                this.timeInSeconds += 1
            }, 1000)
        },
        stop() {
            this.isStopwatchRunning = false
            clearInterval(this.timer)
            this.$emit('toTimerFinished', this.timeInSeconds)
            this.timeInSeconds = 0
        }
    }

})
</script>