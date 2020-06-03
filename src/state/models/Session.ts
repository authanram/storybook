import { Fields, Model } from '@/state/models/Model'
import { User } from '@/state/models'

export default class Session extends Model {
    public static entity = 'sessions'

    public user_id: number
    public ip_address: string
    public user_agent: string
    public payload: object
    public lastActivity: string

    public static fields (): Fields {
        return {
            id: this.attr(null),
            user_id: this.attr(null),
            ip_address: this.string(null),
            user_agent: this.string(null),
            payload: this.string(null),
            last_activity: this.string(null),

            user: this.belongsTo(User, 'user_id')
        }
    }

    public get getUser (): User {
        return this['user']
    }
}
