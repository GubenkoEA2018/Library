import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import tileData from '../Data/tileData';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function AutoGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        {tileData.map(tile => (
                            <div key={tile.img}>
                                <img className={'gallery_images'} src={tile.img} alt={tile.title}/>
                                <div
                                    title={tile.title}
                                    subtitle={<span>by: {tile.author}</span>}>
                                </div>
                            </div>
                        ),)
                        }
                        </Paper>
                        </Grid>
                        <Grid item xs>
                        <Paper className={classes.paper}>xs</Paper>
                        </Grid>
                        <Grid item xs>
                        <Paper className={classes.paper}>xs</Paper>
                        </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                        <Grid item xs>
                        <Paper className={classes.paper}>xs</Paper>
                        </Grid>
                        <Grid item xs={6}>
                        <Paper className={classes.paper}>xs=6</Paper>
                        </Grid>
                        <Grid item xs>
                        <Paper className={classes.paper}>xs</Paper>
                        </Grid>
                        </Grid>
                        </div>
                        );
                    }
