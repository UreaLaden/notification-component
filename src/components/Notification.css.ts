import {mergeStyleSets} from '@fluentui/react';
import { red, snow } from '../utilities/colors';

export const styles = mergeStyleSets({
    entryContainer:{
        padding:"5%",
        borderRadius:"5px",
        marginBottom:"1%"
    },
    entryContainerNew:{
        display:"flex",
        padding:"5%",
        backgroundColor:snow,
        borderRadius:"5px",
        marginBottom:"1%"
    },
    newBubble:{
        backgroundColor:red,
        width:"8px",
        height:"8px",
        borderRadius:"5px",
        marginTop:"5px",        
    },
    readBubble:{
        display:"none",
    },
    primaryText:{
        fontWeight:700
    },
    secondaryText:{
    },
    primaryTextContainer:{
        display:"flex",
    },
    primaryTextAction:{
        marginLeft:"5px",
    }
})

