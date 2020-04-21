import React, {useEffect, useState} from 'react';
import {RouteComponentProps} from "@reach/router";
import {makeStyles} from "@material-ui/core/styles";
import Datatable from "../../components/datatable/Datatable";
import Typography from "@material-ui/core/Typography";

const DashBoard = (props: RouteComponentProps) => {
    const useStyles = makeStyles({
        root: {
            display:"flex",
            flexDirection: "row",
            justifyContent: "start",
            flexWrap:"wrap"
        }
    });
    const classes = useStyles();

    return (<div className={classes.root}>
        <Typography component="h1" variant="h5" color="primary">
            Pedidos Pendientes
        </Typography>
        <Datatable/>
    </div>)
};

export default DashBoard;
