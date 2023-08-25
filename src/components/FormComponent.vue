<template>
    <div class="box form">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="New Task's form">
                <input type="text" class="input" placeholder="What task do you want to start?" v-model="description">
            </div>
            <div class="column is-3">
                <div class="select">
                    <select v-model="projectId">
                        <option value="">Select project</option>
                        <option :value="project.id" v-for="project in projects" :key="project.id">
                            {{ project.name }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="column">
                <TimerComponent @toTimerFinished="finishTask" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { key } from '@/store'

import TimerComponent from './TimerComponent.vue';

export default defineComponent({
    name: 'FormComponent',
    emits: ['toSaveTask'],
    components: {
        TimerComponent
    },
    data() {
        return {
            description: '',
            projectId: ''
        }
    },
    methods: {
        finishTask(elapsedTime: number): void {
            this.$emit('toSaveTask', {
                timeInSeconds: elapsedTime,
                description: this.description,
                project: this.projects.find(x => x.id == this.projectId)
            })
            this.description = ''
        }
    },
    setup() {
        const store = useStore(key)
        return {
            projects: computed(() => store.state.projects)
        }
    }
})
</script>

<style>
.form {
    color: var(--text-primary);
    background-color: var(--bg-primary);
}
</style>