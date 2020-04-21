import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {navigate} from "@reach/router";
import {APP_ROUTES} from "../../router";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 500,
        backgroundColor: "rgba(255,255,255, 0.6)",
        border: "none",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 12,
    },
    pos: {
        marginBottom: 12,
        fontStyle:"bold",
        textAlign: "justify",
    },
});

interface IProps {
    title: string;
    texts: string[];
}

const CardOutlined = ({title, texts}:IProps) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} variant="h5" component="h2" color="primary">
                    {title}
                </Typography>
                {
                    texts && texts.map((text:string, index:number) => (
                        <Typography className={classes.pos} color="textPrimary" key={index}>
                            {text}
                        </Typography>
                    ))
                }
            </CardContent>
            <CardActions>
                <Button size="small" color="primary"  onClick={()=>navigate(APP_ROUTES.PRODUCTS)}>Conoce Nuestros Productos</Button>
            </CardActions>
        </Card>
    );
};

export default CardOutlined;
