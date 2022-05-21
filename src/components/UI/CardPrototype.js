import React, {Fragment} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";

function CardPrototype(props) {

    const card = (
        <Fragment>
            <CardContent>
                <Typography variant="h5" component="div" align="center">
                    {props.cardHeader}
                </Typography>
                <Typography sx={{mb: 1.5}} align="center" color="text.secondary">
                    {props.cardMemo}
                </Typography>
                <Typography variant="body2" align="center">
                    {props.cardBody}
                </Typography>
            {
                props.link &&
                    <Box display="flex" justifyContent="center" sx={{pt: "10px"}}>
                        <Button variant="outlined" href={props.link} size="small">Learn More</Button>
                    </Box>
            }
            </CardContent>
        </Fragment>
    );

    return (
        <Fragment>
            {props.transparent
                ? <Card variant="outlined" sx={{
                    background: "transparent",
                    border: "none"
                }}>{card}</Card>
                : <Card variant="outlined">{card}</Card>}
        </Fragment>
    );
}

CardPrototype.defaultProps = {
    transparent: false,
}

export default CardPrototype;