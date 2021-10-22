import React, {useEffect, useState} from 'react';
import {RouteComponentProps} from "@reach/router";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";

const Contact = (props: RouteComponentProps) => {
    const useStyles = makeStyles({
        root: {
            display:"flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap:"wrap"
        },
        infoContainer: {
            display:"flex",
            flexDirection: "column",
            justifyItems: "space-between",
            maxWidth: 600,
            maxHeight: 650
        },
        locationContainer: {
            maxWidth: 600,
            maxHeight: 600
        },
        phonesContainer:{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            marginLeft: "10px"
        },
        phonesSection: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
        }
    });
    const classes = useStyles();

    return (<div className={classes.root}>
            { /*<img src="location.jpg" className={classes.locationContainer} />*/}
        <div className={classes.infoContainer}>
            {/*
                <div className={classes.phonesContainer}>
                    <Typography variant="h5" component="h1" color="primary">
                        Salsamentaria Avileña
                    </Typography>
                    <div className={classes.phonesSection}>
                        <LocalPhoneIcon style={{height: "80px", width: "80px"}} color="primary"/>
                        <Typography variant="h5" component="h5" color="primary">
                            Tel. 571 11 13
                        </Typography>
                    </div>
                </div>
            
            <img src="info-phones.png" />

            <img src="info-address.png" />
            */}
        </div>
    </div>)
};
export default Contact;
