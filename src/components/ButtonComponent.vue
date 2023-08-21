<template>
   <button
   class="button"
   :disabled="isDisabled"
   @click="buttonClicked">
   <span class="icon">
    <i :class="buttonIcon"></i>
   </span>
   <span>{{  buttonName }}</span>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ButtonComponent',
    emits: ['buttonClicked'],
    props: {
        buttonName: {
            type: String,
            default: ''
        },
        buttonIcon: {
            type: String,
            default: ''
        },
        isDisabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        buttonClicked(){
            this.$emit('buttonClicked', true)
        }
    }
})
</script>