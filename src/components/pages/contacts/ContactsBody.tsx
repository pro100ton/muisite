import React from 'react';
import Box from "@mui/material/Box";
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FabButtonContact from "../../UI/FabButtonContact";
import {Grid} from "@mui/material";
import { styled } from '@mui/material/styles';

const CustomizedInstagramIcon = styled(MonochromePhotosIcon)`
    color: aliceblue;
`

const CustomizedTelegramIcon = styled(TelegramIcon)`
    color: white;
`

const CustomizedTwitterIcon = styled(TwitterIcon)`
    color: white;
`

const contactsList = [
    {
        name: "instagram",
        link: "https://www.instagram.com/pro100ton/",
        backgroundColor: "#F56040",
        icon: <CustomizedInstagramIcon/>
    },
    {
        name: "telegram",
        link: "https://t.me/pro100ton",
        backgroundColor: "#78E8FF",
        icon: <CustomizedTelegramIcon/>
    },
    {
        name: "github",
        link: "https://github.com/pro100ton",
        backgroundColor: "white",
        icon: <GitHubIcon/>
    },
    {
        name: "twitter",
        link: "https://twitter.com/Pro100ton",
        backgroundColor: "#1D9BF0",
        icon: <CustomizedTwitterIcon/>
    },
]

const contactsListFabs: React.ReactNode[] = [];

for (const contact of contactsList) {
    contactsListFabs.push(
        <FabButtonContact
            key={contact.name}
            color={contact.backgroundColor}
            label={contact.name}
            icon={contact.icon}
            link={contact.link}
        />
    )
}

function ContactsBody() {
    return (
        <Grid container spacing={2} columns={{xs: 1, sm: 3, md: 3}} rowSpacing={3} sx={{p: 2}}>
            <Grid item xs={1} sm={3} md={3}>
                <Box display="flex" justifyContent="center" sx={{m: 2}}>
                    {contactsListFabs}
                </Box>
            </Grid>
        </Grid>
    );
}

export default ContactsBody;