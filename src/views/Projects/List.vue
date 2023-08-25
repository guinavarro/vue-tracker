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
import { useStore, store } from "@/store";
import { REMOVE_PROJECT } from "@/store/mutations-type";
import { defineComponent, computed } from "vue";

export default defineComponent({
    name: 'List',
    setup() {
        return {
            projects: computed(() => store.state.projects),
            store
        }
    },
    methods: {
        remove(id: string) {
            this.store.commit(REMOVE_PROJECT, id)
        }
    }
})
</script>
