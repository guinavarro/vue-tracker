import IProject from "@/interfaces/IProject";
import { InjectionKey } from "vue";
import { Store, createStore, useStore as vuexUseStore } from "vuex";
import { ADD_PROJECT, ADD_TASK, EDIT_PROJECT, NOTIFICATE, REMOVE_PROJECT, REMOVE_TASK, SET_PROJECTS } from "./mutations-type";
import ITask from "@/interfaces/ITask";
import { INotification } from "@/interfaces/INotification";
import { GET_PROJECTS } from "./actions-type";
import httpClient from "@/http";

interface State {
    projects: IProject[],
    tasks: ITask[],
    notifications: INotification[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        projects: [],
        tasks: [],
        notifications: []
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
        [SET_PROJECTS](state, projects: IProject[]) {            
           state.projects = projects
        },
        [ADD_TASK](state, task: ITask) {
            state.tasks.push(task)
        },
        [REMOVE_TASK](state, task: ITask) {  
            const index = state.tasks.indexOf(task)            
            state.tasks.splice(index, 1)
        },
        [NOTIFICATE](state, newNotification: INotification) {
            newNotification.id = new Date().getTime()
            state.notifications.push(newNotification)

            setTimeout(() => {
                state.notifications = state.notifications.filter(x => x.id != newNotification.id)
            }, 2500)
        }
    },
    actions:  {
        [GET_PROJECTS] ({ commit}) {
            httpClient.get('projects')
                .then(response => commit(SET_PROJECTS, response.data))
        },
        [ADD_PROJECT](context, projectName: string) {
            return httpClient.post('/projects', {
                name: projectName
            })
        },
        [EDIT_PROJECT](context, project: IProject){
            return httpClient.put(`/projects/${project.id}`, project)
        },
        [REMOVE_PROJECT]({commit}, id: string){
            return httpClient.delete(`/projects/${id}`)
                .then(() => commit (REMOVE_PROJECT, id))
        }
    }
})

export function useStore(): Store<State> {
    return vuexUseStore(key)
}