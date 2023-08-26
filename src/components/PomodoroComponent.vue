<template>
    <div class="box">
        <div class="column">
            <span>{{ elapsedTime }}</span>
        </div>
        <div class="column">
            <button v-if="!pomodoroIsRunning" class="button is-medium" @click="start">{{ pomodoroButton }}</button>
            <button v-else class="button is-medium" @click="stop">Stop</button>            
            <i v-if="pomodoroIsRunning" class="fa-solid fa-play"></i>
        </div>
        <div class="column">
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PomodoroComponent',
    
    data() {
        return {
            pomodoroTimer: 25,
            timer: 0,
            pomodoroIsRunning: false
        }
    },
    computed: {
        pomodoroButton(): string {
            return 'Start';
        },
        elapsedTime(): string {
            return new Date(this.pomodoroTimer * 60000)
            .toLocaleTimeString()
            .substr(3, 5)
        }
    },
    methods: {
        start() {
            this.pomodoroIsRunning = true
            this.timer = setInterval(() => {
                this.pomodoroTimer -= 0.01
                if (this.pomodoroTimer <= 0){
                    clearInterval(this.timer)
                    this.pomodoroIsRunning = false
                }
            }, 1000)
        },
        stop() {
            this.pomodoroIsRunning = false
            clearInterval(this.timer)
        }
    }
})
</script>

<style scoped>
.box {
    padding: 2.5rem
}
</style>