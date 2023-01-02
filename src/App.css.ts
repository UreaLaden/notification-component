import { mergeStyleSets } from "@fluentui/react";
import {  snow, white } from "./utilities/colors";

export const styles = mergeStyleSets({
    parentContainer: {
        backgroundColor: snow,
        height: '100%',
        width: '100%',
        display: "grid",
        'grid-template-columns': "1fr"
    },
    entryContainer:{
        display:"flex",
        flexDirection:"column",
        gap:"16px"
    },
    appContainer: {
        backgroundColor: white,
        height: "90%",
        borderRadius: "2%",
        "grid-row-start": 1,
        "grid-column-start": 1,
        margin: "5% 25%",
        "align-self": "center",
        "justify-content": "center",
        boxShadow: "0 6px 90px 0 rgb(0 0 0 / 5%)",
        "@media screen and (max-width:500px)": {
            width: "100vw",
            height: "100vh",
            backgroundColor: white,
            margin: "unset"
        },
    },
    
    contentContainer: {
        height: '100%',
        margin: '4%',
        alignItems: "center"
    },
  
    
})