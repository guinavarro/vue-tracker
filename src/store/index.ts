import IProject from "@/interfaces/IProject";
import { InjectionKey } from "vue";
import { Store, createStore, useStore as vuexUseStore } from "vuex";
import { ADD_PROJECT, EDIT_PROJECT, REMOVE_PROJECT } from "./mutations-type";

interface State {
    projects: IProject[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        projects: []
    },
    mutations: {
        [ADD_PROJECT](state, projectName: string) {
            const project = {
                id: new Date().toISOString().replace(/\D/g, ""),
                name: projectName
            } as IProject
            state.projects.push(project)
        },
        [EDIT_PROJECT](state, project: IProject) {
            const index = state.projects.findIndex(x => x.id = project.id)
            state.projects[index] = project
        },
        [REMOVE_PROJECT](state, id: string) {
            state.projects = state.projects.filter(x => x.id != id)
        }
    }
})

export function useStore(): Store<State> {
    return vuexUseStore(key)
}