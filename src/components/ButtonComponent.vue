<template>
   <button
   class="button"
   :class="buttonClass"
   :disabled="isDisabled"
   @click="buttonClicked">
   <span class="icon">
    <i :class="buttonIcon"></i>
   </span>
   <span v-if="buttonName.length > 0">{{  buttonName }}</span>
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
        },
        buttonClass: {
            type: String,
            default: ''
        }
    },
    methods: {
        buttonClicked(){
            this.$emit('buttonClicked', true)
        }
    }
})
</script>