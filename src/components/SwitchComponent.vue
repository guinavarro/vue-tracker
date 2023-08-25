<template>
    <div class="field">
        <input id="switchBulma" 
        class="switch is-rounded" 
        type="checkbox" 
        v-model="isChecked" 
        @change="toggleSwitch" />
        <label for="switchBulma" style="color: white">{{switchName}}</label>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent ({
    name: 'SwitchComponent',
    emits: ['switched'],
    props: {
        switchName: {
            type: String,
            default: ''
        }
    },
    data() {
      return {
        isChecked: false
      }
    },
    methods: {
      toggleSwitch() {
        this.$emit('switched', this.isChecked)
      },
    },
  })
  </script>
  
  <style scoped>
  @import "../../node_modules/bulma-switch/dist/css/bulma-switch.min.css";  

  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
  }

  .switch input {
    display: none;
  }

  .switch .check {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    background-color: #ccc;
    border-radius: 50%;
    transition: transform 0.2s;
  }
  
  .switch input:checked + .check {
    transform: translateX(16px);
    background-color: #3273dc;
  }
  </style>
  