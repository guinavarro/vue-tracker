<template>
    <section>
        <router-link to="/projects/new" class="button">
            <span class="icon is-small">
                <i class="fas fa-plus"></i>
            </span>
        </router-link>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="project in projects" :key="project.id">
                    <td>
                        {{ project.id }}
                    </td>
                    <td>
                        {{ project.name }}
                    </td>
                    <td>
                        <router-link :to="`/projects/${project.id}`" class="button">
                            <span class="icon is-small">
                                <i class="fas fa-pencil-alt"></i>
                            </span>
                        </router-link>
                        <button class="button ml-2 is-danger" @click="remove(project.id)">
                            <span class="icon is-small">
                                <i class="fas fa-trash"></i>
                            </span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>


<script lang="ts">
import { useStore } from "@/store";
import { GET_PROJECTS } from "@/store/actions-type";
import { REMOVE_PROJECT } from "@/store/actions-type";
import { defineComponent, computed } from "vue";

export default defineComponent({
    name: 'List',
    setup() {
        const store = useStore()
        store.dispatch(GET_PROJECTS)

        return {
            projects: computed(() => store.state.projects),
            store
        }
    },
    methods: {
        remove(id: string) {
            this.store.dispatch(REMOVE_PROJECT, id)
        }
    }
})
</script>
