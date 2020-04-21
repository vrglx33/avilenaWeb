import React, {useEffect} from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {isWidthDown, isWidthUp} from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import {navigate} from "@reach/router";
import {APP_ROUTES} from "../../router";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            width: "100%",
            height: "100%",
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
    }),
);
interface IProps {
    items: any[];
    width: any;
    clickable?: boolean;
}

const ImageGrid = ({items, width, clickable}:IProps) => {
    const classes = useStyles();
    const isLarge = isWidthUp('sm', width) && isWidthDown('xl', width);
    const isSmall = isWidthDown('md', width);
    const colSize = isSmall ? 2 : 4;
    const colHeight = isLarge ? 300 : isSmall ? 200 : 400;
    return (
        <div className={classes.root}>
            <GridList cellHeight={colHeight} className={classes.gridList} cols={colSize}>
                {items.map((tile) => (
                    <GridListTile key={tile.imageLink} cols={1} onClick={() => clickable ? navigate(`${APP_ROUTES.PRODUCTS}/${tile.id}`): console.log("not clickable")}>
                        <img src={tile.imageLink} alt={tile.name} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
};

export default withWidth()(ImageGrid);
