import React, {Fragment} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TypeAnimationText from "./TypeAnimationText";

const card = (
    <React.Fragment>
        <CardContent>
            <Typography variant="h5" component="div">
                kek
            </Typography>
            <Typography sx={{mb: 1.5}} color="text.secondary">
                adjective
            </Typography>
            <Typography variant="body2">
                well meaning and kindly. well meaning and kindly. well meaning and kindly. well meaning and kindly.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </React.Fragment>
);

function CardPrototype(props) {
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