import React, { Fragment } from "react";
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";

import VideoPlayer from "./components/video-player";
import Options from "./components/options";
import Notifications from "./components/notifications";

/* require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2); */

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid black',
        [theme.breakpoints.down('xs')]: {
            width: '90%',
        },
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    }
}))

const App = () => {

    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography variant='h2' align="center">Stream Me Up ! </Typography>
            </AppBar>
            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>


        </div>

    )
}

export default App;