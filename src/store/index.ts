import IProject from "@/interfaces/IProject";
import { InjectionKey } from "vue";
import { Store, createStore, useStore as vuexUseStore } from "vuex";
import { ADD_PROJECT, ADD_TASK, EDIT_PROJECT, REMOVE_PROJECT, REMOVE_TASK } from "./mutations-type";
import ITask from "@/interfaces/ITask";

interface State {
    projects: IProject[],
    tasks: ITask[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        projects: [],
        tasks: []
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
        },
        [ADD_TASK](state, task: ITask){
            state.tasks.push(task)
        },
        [REMOVE_TASK](state, task: ITask){
            const index = state.tasks.indexOf(task)
            state.tasks.splice(index, 1)
        }
    }
})

export function useStore(): Store<State> {
    return vuexUseStore(key)
}