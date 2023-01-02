import { Persona, PersonaSize, Stack } from '@fluentui/react';
import { NotificationAction, UserDetailProps } from '../utilities/users';
import { styles } from './Notification.css';





interface INotificationProps {
    user: UserDetailProps;
}

const Notification = (props: INotificationProps) => {
    const { user } = props;

    const getNotificationAction = (user: UserDetailProps) => {
        let result;
        switch (user.action) {
            case 'follow':
                result = 'followed you';
                break;
            case 'message':
                result = `sent you a private message`;
                break;
            case 'reaction':
                result = `reacted to your recent post `;
                break;
            case 'leave':
                result = `left the group `;
                break;
            case 'join':
                result = `joined your group `;
                break;
            case 'comment':
                result = `commented on your picture `;
                break;
        }
        return [user.username, result, user.target];
    }
    const getUserTargetClass = (notificationAction: string): string | undefined => {
        switch (notificationAction) {
            case NotificationAction.COMMENT:
                return styles.primaryTextImage;
            case NotificationAction.MESSAGE:
                return styles.primaryTextMessage;
            case NotificationAction.LEAVE:
            case NotificationAction.JOIN:
                return styles.primaryTextGroup;
            default:
                return styles.primaryTextTarget;
        }
    }

    const userAction = getNotificationAction(user);
    return (
        <div className={user.isRead ? styles.entrySelectionContainer : styles.entryContainerNew}>
            <Stack 
                horizontal={user.action === NotificationAction.COMMENT}
                horizontalAlign={"space-between"}>
                <Persona
                    imageUrl={user.imageUrl}
                    size={PersonaSize.size48}
                    showSecondaryText={true}
                    secondaryText={user.timeSpan}
                    onRenderPrimaryText={() => {
                        return (
                            <div className={styles.primaryTextContainer}>
                                <div className={styles.primaryText}>
                                    {userAction[0]}
                                    <span className={styles.primaryTextAction}>{userAction[1]}</span>
                                    {user.action !== NotificationAction.MESSAGE && user.action !== NotificationAction.COMMENT
                                        &&
                                        <span className={getUserTargetClass(user.action)}>{userAction[2]}
                                            <span className={user.isRead ? styles.readBubble : styles.newBubble}></span>
                                        </span>}
                                </div>
                            </div>
                        )
                    }}
                    styles={{ secondaryText: styles.secondaryText, primaryText: styles.primaryText }} />
                {user.action === NotificationAction.MESSAGE &&
                    <div className={styles.messageContainer}>
                        <span className={getUserTargetClass(user.action)}>{userAction[2]}
                            <span className={user.isRead ? styles.readBubble : styles.newBubble}></span>
                        </span>
                    </div>
                }
                {user.action === NotificationAction.COMMENT && 
                <img className={styles.primaryTextImage} src={user.target} alt={user.target}/>
                }
            </Stack>
        </div>
    )
};

export default Notification;