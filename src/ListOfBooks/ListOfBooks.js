import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from '../Data/tileData';
import './ListOfBooks.css';
import Badge from '@material-ui/core/Badge';
import {Link} from "react-router-dom";
// import Book from './Book/Book';

export const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            flexWrap: 'nowrap',
            width: 500,
            height: 450,
        },
        margin: {
            margin: theme.spacing(2),
            marginRight: theme.spacing(3),
        },
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
    }),
);



    // fetch('http://jsonapiplayground.reyesoft.com/v2/hbooks')
    //     .then(function(response) {
    //             if (response.status !== 200) {
    //                 console.log('Looks like there was a problem. Status Code: ' +
    //                     response.status);
    //                 return;
    //             }
    //
    //             // Examine the text in the response
    //             response.json().then(function(data) {
    //                 TitlebarGridList(data);
    //             });
    //         }
    //     )
    //     .catch(function(err) {
    //         console.log('Fetch Error :-S', err);
    //     });

        //     res => res.json())
        // .then((data) => {
        //     if(data.status !== 200) {
        //
        //     }
        //    let tileData = data.results;
        //     return TitlebarGridList(tileData);
        // })
        // .catch((error) => {
        //     console.log(JSON.stringify(error));
        // })



export default function TitlebarGridList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={360} className={classes.gridList}>
                {/*<GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>*/}
                    {/*<ListSubheader component="div"></ListSubheader>*/}
                {/*</GridListTile>*/}
                {tileData.map(tile => (
                    <GridListTile key={tile.img}>
                        <Link to="/book">
                        <img className={'gallery_images'} src={tile.img} alt={tile.title}
                             // onClick={(e) => this.handleClick(e)}
                             // onClick={tile.img}
                        />
                        </Link>
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>by: {tile.author}</span>}

                            actionIcon={
                                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                    <InfoIcon />
                                </IconButton>
                            }
                            actionIcon={
                                <Badge className={classes.margin} badgeContent={1000} max={999} color="secondary">
                                    {/*{counter}*/}
                                </Badge>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
