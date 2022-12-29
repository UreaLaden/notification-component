import { mergeStyleSets } from "@fluentui/react";
import { blue, darkGreyBlue, snow, veryDarkBlue, white } from "./utilities/colors";

export const styles = mergeStyleSets({
    parentContainer: {
        backgroundColor: snow,
        height: '100vh',
        width: '100vw',
        display: "grid",
        'grid-template-columns': "1fr"
    },
    appContainer: {
        backgroundColor: white,
        height: "85vh",
        borderRadius: "2%",
        "grid-row-start": 1,
        "grid-column-start": 1,
        margin: "5% 25%",
        "align-self": "center",
        "justify-content": "center",
        boxShadow: "0 6px 90px 0 rgb(0 0 0 / 5%)",
        "@media screen and (max-width:500px)": {
            width: "100%",
            height: "100%",
            backgroundColor: white,
            margin: "unset"
        },
    },
    header: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
    },
    contentContainer: {
        height: '100vh',
        margin: '4%',
        alignItems: "center"
    },
    title: {
        fontSize: '2vh',
        color: veryDarkBlue,
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontStyle: 'normal',
        fontWeight: 800,
        lineHeight: '30px',
        display:"flex"
    },
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
        width:"3vw",
        height:"100%",
        marginLeft:"10px",
        borderRadius:"5px",
        textAlign:"center",
        "@media screen and (max-width:500px)":{
            borderRadius:"5px",
            width:"8vw",
        }
    }
})