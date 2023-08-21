<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <ButtonComponent
        :buttonName="'play'"
        :buttonIcon="'fas fa-play'"
        :isDisabled="false"/>
        <ButtonComponent
        :buttonName="'stop'"
        :buttonIcon="'fas fa-stop'"
        :isDisabled="false"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButtonComponent from './ButtonComponent.vue';

export default defineComponent({
    name: 'TimerComponent',
    components: { 
        ButtonComponent 
    },

})
</script>