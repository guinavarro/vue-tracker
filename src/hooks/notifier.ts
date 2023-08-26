import { NotificationType } from "@/interfaces/INotification"
import { NOTIFICATE } from "@/store/mutations-type"
import { store } from '@/store'

type Notifier = {
    notificate: (type: NotificationType, title: string, text: string) => void
}

export default (): Notifier => {
    const notificate = (type: NotificationType, title: string, text: string) : void => {
        store.commit(NOTIFICATE, {
            title: title,
            text: text,
            type: type
        })
    }

    return {
        notificate
    }

}