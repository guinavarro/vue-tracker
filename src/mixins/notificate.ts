import { NotificationType } from "@/interfaces/INotification"
import { store } from "@/store"
import { NOTIFICATE } from "@/store/mutations-type"

export const notificationMixin = {
    methods: {        
        notificate(type: NotificationType, title: string, text: string) {
            store.commit(NOTIFICATE, {
                title: title,
                text: text,
                type: type
            })
        }
    }
}