import React, {Fragment} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FabButtonContact from "../../UI/FabButtonContact";
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import Box from "@mui/material/Box";

const contactsList = [
    {
        name: "instagram",
        link: "https://www.instagram.com/pro100ton/",
        backgroundColor: "#fbad50"
    }
]

function ContactsBody(props) {
    return (
        <Fragment>
            {/*<Box display="flex" justifyContent="center">*/}
            {/*    <FabButtonContact></FabButtonContact>*/}
            {/*</Box>*/}
            <Box>
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
            </Box></Fragment>
    );
}

export default ContactsBody;