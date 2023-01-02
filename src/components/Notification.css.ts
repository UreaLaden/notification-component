import {mergeStyleSets} from '@fluentui/react';
import { blue, darkGreyBlue, greyBlue, lightGreyBlue, red, snow } from '../utilities/colors';

export const styles = mergeStyleSets({
    entrySelectionContainer:{
        padding:"1.5vh",
        borderRadius:"5px",
    },
    entryContainerNew:{
        backgroundColor:snow,
        display:"flex",
        padding:"1.5vh",
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
        height:"fit-content",
        color:blue,
    },
    secondaryText:{
        marginBottom:"8px",
        marginTop:"8px",
        fontSize:"14px",
        color:greyBlue
    },
    primaryTextContainer:{
        display:"flex",
        height:"unset",
    },
    primaryTextAction:{
        marginLeft:"5px",
        fontWeight:500,
        width:"100%",
        color:darkGreyBlue
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
      marginTop:"12px",
      padding:"5%",
      borderRadius:"5px",
      fontSize:"1vh",
      color:darkGreyBlue,
      fontWeight:500
    },
})

