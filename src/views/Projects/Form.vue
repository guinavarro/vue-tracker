<template>
    <section>
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="projectName" class="label">
                    Project's Name
                </label>
                <input type="text" class="input" v-model="projectName" id="projectName">
            </div>
            <div class="field">
                <button class="button is-success" type="submit">
                    Save
                </button>
            </div>
        </form>
    </section>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { EDIT_PROJECT, ADD_PROJECT } from "@/store/mutations-type";

export default defineComponent({
    name: 'Form',
    props: {
        id: {
            type: String
        }
    },
    data() {
        return {
            projectName: ''
        }
    },
    mounted() {
        if (this.id) {
            const project = this.store.state.projects.find(x => x.id == this.id);
            this.projectName = project?.name || '';
        }
    },
    methods: {
        salvar() {
            if (this.id) {
                this.store.commit(EDIT_PROJECT, {
                    id: this.id,
                    name: this.projectName
                })
            } else {
                this.store.commit(ADD_PROJECT, this.projectName);
            }
            this.projectName = '';
            this.$router.push('/projects');
        }
    },
    setup() {
        const store = useStore()
        return {
            store
        }
    }
})
</script>

