import { Persona } from '@fluentui/react';
import * as React from 'react';
import { styles } from './Notification.css';

type NotificationAction = 'follow' | 'message' | 'reaction' | 'leave' | 'join' | 'comment'

export interface UserDetailProps{
    username:string;
    target?:string;
    imageUrl?:string;
}

interface INotificationProps{
    user:UserDetailProps;
    action: NotificationAction;
    isRead:boolean;
    notificationDate:Date;
}

const Notification = (props:INotificationProps) => {
    const {user,action,isRead,notificationDate} = props;

    const calculateTimeSpan = (inputDate:Date) => {
        const today = new Date();
        const difference = today.getTime() - inputDate.getTime();
        const result = Math.ceil(difference / (1000 * 3600 * 24));

        switch(!!result){
            case result > 14:
                return `${result / 7} weeks ago`;
            case result >= 7 && result < 14:
                return `${result} days ago`;
            case result === 1:
                return `${result} day ago` ;
            case result < 1:
                const update = Math.ceil(difference / (3600 * 24));
                return `${update}m ago`;
        }

    }

    const getNotificationAction = (user:UserDetailProps,action:NotificationAction) =>{
        let result:string;
        switch(action){
            case 'follow' :
                result = `${user.username} followed you`;
                break;
            case 'message': 
                result = `${user.username} sent you a private message`;
                break; 
            case 'reaction':
                result = `${user.username} reacted to your recent post ${user.target}`;    
                break;
            case 'leave':
                result = `${user.username} left the group ${user.target}`;
                break;
            case 'join' :
                result = `${user.username} joined your group ${user.target}`;
                break;
            case 'comment':
                result = `${user.username} commented on your picture ${user.target}`;
                break;
        }
        return result;
    }

    return (
        <div className={isRead ? styles.entryContainer : styles.entryContainerNew}>
            <Persona 
                imageUrl={user.imageUrl}
                text={`${user.username} ${getNotificationAction(user,action)}`}
                secondaryText={calculateTimeSpan(notificationDate)} />
        </div>
    )
};

export default Notification;