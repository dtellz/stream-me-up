import React, { Fragment } from "react";
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar'
import VideoPlayer from "./components/video-player";
import Options from "./components/options";
import Notifications from "./components/notifications";

/* require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2); */

const App = () => {
    return (
        <Fragment>
            <AppBar position='fixed' color='inherit'>
                <Typography variant='h2' align="center">Stream Me Up ! </Typography>
            </AppBar>
            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>


        </Fragment>

    )
}

export default App;