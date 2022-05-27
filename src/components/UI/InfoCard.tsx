import React from 'react';
import {Card, CardContent} from "@mui/material";

const infoData = [
    {
        year: 2018,
        header: "ASP labs",
        description: "Аудитор информационной безопасности"
    },
    {
        year: 2019,
        header: "РТИ",
        description: "Старший аудитор информационной безопасности"
    },
    {
        year: 2020,
        header: "Infowatch ARMA",
        description: "Младший инженер-разработичк"
    },
    {
        year: 2021,
        header: "Infowatch ARMA",
        description: "Инженер-разработичк"
    },
    {
        year: 2022,
        header: "Infowatch ARMA",
        description: "Старший инженер-разработичк"
    },
]

type Props = {
    selectedYear: number
}

function InfoCard({selectedYear}: Props) {
    let cardHeader = "";
    let cardDescription = "";
    infoData.forEach((element, index, array) => {
        if (element.year === selectedYear) {
            cardHeader = element.header;
            cardDescription = element.description
        }
    })
    return (
        <Card variant="outlined" sx={{mb:1}}>
            <CardContent>
                <h1>{cardHeader}</h1>
                <p>{cardDescription}</p>
            </CardContent>
        </Card>
    );
}

export default InfoCard;