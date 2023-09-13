<template>
    <div class="panel is-centered">
        <div class="columns is-centered">
            <p class="panel-tabs">
                <a :class="{ 'is-active': tabAtiva === 'pomodoro' }" @click="switchPomodoro('pomodoro')">Pomodoro</a>
                <a :class="{ 'is-active': tabAtiva === 'short' }" @click="switchPomodoro('short')">Short Break</a>
                <a :class="{ 'is-active': tabAtiva === 'long' }" @click="switchPomodoro('long')">Long Break</a>
            </p>

        </div>
        <div class="columns is-centered">
            <div class="panel-block">
                <PomodoroComponent v-if="tabAtiva === 'pomodoro'" />
                <PomodoroComponent v-if="tabAtiva === 'short'" :pomodoroTimer="5" />
                <PomodoroComponent v-if="tabAtiva === 'long'" :pomodoroTimer="15" />
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PomodoroComponent from '@/components/PomodoroComponent.vue';

export default defineComponent({
    name: 'Pomodoro',
    components: {
        PomodoroComponent
    },
    methods: {
        switchPomodoro(tab: string) {
            this.tabAtiva = tab;
        }
    },
    data() {
        return {
            tabAtiva: 'pomodoro'
        }
    }
})

</script>

<style>
.panel {
    padding: 1.25rem;
}
</style>