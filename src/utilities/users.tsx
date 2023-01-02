import markAvatar from "../images/avatar-mark-webber.webp";
import angelaAvatar from '../images/avatar-angela-gray.png';
import jacobAvatar from '../images/avatar-jacob-thompson.webp';
import rizkyAvatar from '../images/avatar-rizky-hasanuddin.webp';
import chessImage from '../images/image-chess.webp';
import kimAvatar from '../images/avatar-kimberly-smith.webp';
import nathanAvatar from '../images/avatar-nathan-peterson.webp';
import annaAvatar from '../images/avatar-anna-kim.webp';

export const NotificationAction = {
    FOLLOW:"follow",
    MESSAGE:"message",
    REACTION:"reaction",
    LEAVE:"leave" ,
    JOIN:"join",
    COMMENT:"comment"
};
Object.freeze(NotificationAction)

export interface UserDetailProps{
    username:string;
    target?:string;
    imageUrl?:string;
    action:string;
    isRead:boolean;
    timeSpan:string;
}

export const getUsers = ():UserDetailProps[] => {
    const users:UserDetailProps[] = [];
    users.push({
        username:"Mar Webber",
        target:"My first tournament today!",
        imageUrl:markAvatar,
        action:NotificationAction.REACTION,
        isRead: false,
        timeSpan: "1m ago"
    });
    users.push({
        username:"Angela Gray",
        imageUrl:angelaAvatar,
        action:NotificationAction.FOLLOW,
        isRead:false,
        timeSpan:"5m ago"
    });
    users.push({
        username:"Jacob Thompson",
        target:"Chess Club",
        imageUrl:jacobAvatar,
        action:NotificationAction.JOIN,
        isRead:false,
        timeSpan:"1 day ago"
    });
    users.push({
        username:"Rizky Hasanuddin",
        target:"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        imageUrl:rizkyAvatar,
        action: NotificationAction.MESSAGE,
        isRead: true,
        timeSpan: "5 days ago"
    });
    users.push({
        username:"Kimberly Smith",
        target:chessImage,
        imageUrl:kimAvatar,
        action: NotificationAction.COMMENT,
        isRead: true,
        timeSpan: "1 week ago"
    });
    users.push({
        username:"Nathan Peterson",
        target: "5 end-game strategies to increase your win rate",
        imageUrl:nathanAvatar,
        action: NotificationAction.REACTION,
        isRead:true,
        timeSpan:"2 weeks ago"
    });
    users.push({
        username:"Anna Kim",
        target:"Chess Club",
        imageUrl:annaAvatar,
        action: NotificationAction.LEAVE,
        isRead:true,
        timeSpan:"2 weeks ago"
    });
    return users;
}
