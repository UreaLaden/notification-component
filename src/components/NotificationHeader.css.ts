import { mergeStyleSets } from "@fluentui/react";
import { darkGreyBlue, blue, white, veryDarkBlue } from "../utilities/colors";

export const styles = mergeStyleSets({
    readText: {
        fontSize: '1vh',
        color: darkGreyBlue,
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '20px',
    },
    notificationCount:{
        backgroundColor:blue,
        color:white,
        width:"2vw",
        marginLeft:"10px",
        borderRadius:"10%",
        textAlign:"center",
        "@media screen and (max-width:500px)":{
            borderRadius:"5px",
            width:"8vw",
        }
    },  title: {
        fontSize: '2vh',
        color: veryDarkBlue,
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontStyle: 'normal',
        fontWeight: 800,
        lineHeight: '30px',
        display:"flex"
    },
    header: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
    },
})