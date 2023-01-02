import { mergeStyleSets } from "@fluentui/react";
import {  snow, white } from "./utilities/colors";

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
        height: "100vh",
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
        height: '100vh',
        margin: '4%',
        alignItems: "center"
    },
  
    
})