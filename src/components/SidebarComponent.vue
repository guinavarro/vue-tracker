<template>
    <header>
        <h1>
            <img src="../assets/logo.png">
        </h1>       
        <nav class="panel mt-5">
            <ul>
                <li>
                    <router-link to="/" class="link">
                        tasks
                    </router-link>
                </li>
                <li>
                    <router-link to="/projects" class="link">
                        projects
                    </router-link>
                </li>
            </ul>
        </nav>
        <SwitchComponent 
        @switched="changeTheme"
        :switchName="buttonText"/>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import  SwitchComponent  from './SwitchComponent.vue'

export default defineComponent({
    name: 'SidebarComponent',
    components: {
        SwitchComponent
    },
    emits: ['toThemeChanged'],
    data() {
        return {
            darkModeOn: false
        }
    },
    computed: {
        buttonText() {
            if (this.darkModeOn) {
                return 'Disable Dark Mode'
            }

            return 'Enable Dark Mode'
        }
    },
    methods: {
        changeTheme() {
            this.darkModeOn = !this.darkModeOn
            this.$emit('toThemeChanged', this.darkModeOn)
        }
    }
})
</script>

<style scoped>
header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
    text-align: center;
}

@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
}

.panel li {
    margin: 8px 0;
}

.link {
    color: #fff;
}

.link:hover {
    color: #00d1b2;
}

.link.router-link-active {
    color: #00d1b2;
}</style>