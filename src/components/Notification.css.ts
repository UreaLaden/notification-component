import {mergeStyleSets} from '@fluentui/react';
import { red, snow } from '../utilities/colors';

export const styles = mergeStyleSets({
    entrySelectionContainer:{
        padding:"2%",
        borderRadius:"5px",
    },
    entryContainerNew:{
        backgroundColor:snow,
        display:"flex",
        padding:"2%",
        borderRadius:"5px",
    },
    newBubble:{
        backgroundColor:red,
        width:"8px",
        height:"8px",
        borderRadius:"5px",
        marginTop:"5px",
        marginLeft:"5px",    
        display:"inline-block"    
    },
    readBubble:{
        display:"none",
    },
    primaryText:{
        fontWeight:700,
        overflow:"revert !important",
        whiteSpace:"normal",
        height:"fit-content"
    },
    secondaryText:{
        marginBottom:"8px"
    },
    primaryTextContainer:{
        display:"flex",
        height:"unset",
    },
    primaryTextAction:{
        marginLeft:"5px",
        fontWeight:400,
        width:"100%"
    },
    primaryTextTarget:{},
    primaryTextPost:{},
    primaryTextMessage:{},
    primaryTextGroup:{},
    primaryTextImage:{
        width:"48px"
    },
    messageContainer:{
      border:"1px solid #DDE7EE",
      marginLeft:"60px",
      padding:"5%",
      borderRadius:"5px"  
    },
})

