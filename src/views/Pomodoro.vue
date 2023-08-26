<template>
<PomodoroComponent/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PomodoroComponent from '@/components/PomodoroComponent.vue';

export default defineComponent({
    name: 'Pomodoro',
    components: {
        PomodoroComponent
    }
})

</script>