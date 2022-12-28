import { mergeStyleSets } from "@fluentui/react";
import { snow } from "./utilities/colors";

export const styles = mergeStyleSets({
    appContainer: {
        backgroundColor: "blue",
        width:"50%",
        height:"85vh",
        margin:"10% auto",
        "@media screen and (max-width:400px)": {
            width: "100%",
            height:"100vh",
            backgroundColor: "red",
        },
    },
})