import { Card, CardActions, CardContent, Grid, Typography, Button, DialogContent, DialogContentText, Dialog, DialogTitle, DialogActions } from "@material-ui/core";
import React from "react";
import { getMachDetail } from "../api/Api";
import { useState, Fragment, props } from "react";
import vsimg from '../img/vs.png';


const Mycard = ({ match }) => {

    const [detail, setDetail] = useState({});

    const [open, setOpen] = useState(false);

    const handleClick = (id) => {
        alert("Match id is " + id)
        console.log("match id is ", id)

        getMachDetail(id)
            .then((data) => {
                console.log("this is match detail...", data);
                console.log(id);
                setDetail(data)
                handleOpen()
            })
            .catch((error) => console.log(error));
    }


    const getmachCard = () => {
        return (
            <Card style={{ marginTop: 20, background: match.matchStarted ? "#e2e2e2" : "" }}>

                {/* <Card style={{ marginTop: 20}}> */}
                <CardContent>
                    <Grid container justify="center" alignItems="center" spacing={4}>
                        <Grid item>
                            <Typography variant="h4">{match["team-1"]}</Typography>

                        </Grid>
                        <Grid item>
                            <img style={{ width: 80 }} src={vsimg} alt='vs image' height={150} width={200} />

                        </Grid>
                        <Grid item>
                            <Typography variant="h4">{match["team-2"]} </Typography>

                        </Grid>
                    </Grid>
                </CardContent>

                <CardActions>
                    <Grid container justify="center" spacing={3} alignItems="center" style={{ marginBottom: 20 }}>

                        <Button onClick={() => handleClick(match.unique_id)}
                            item variant="contained" color="primary"> Show Details </Button>

                        <Button style={{ marginLeft: 10 }} item variant="contained" color="primary">
                            Start Time {new Date(match.dateTimeGMT).toLocaleString()} </Button>
                        {/* Start Time {new Date().toString()} </Button> */}
                    </Grid>
                </CardActions>

            </Card>
        );
    }




    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const getDialog = () => (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title"> {"Match Detail.."} </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography>{detail.stat}</Typography>
                    <Typography>
                        Match Status - 
                            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                            {detail.matchStarted ? "Started" : "Still not started"}
                        </span>
                    </Typography>

                    <Typography>
                        Teams - 
                            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                            {detail.score}
                        </span>
                    </Typography>
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus> Close </Button>
            </DialogActions>
        </Dialog>
    );

    return (
        <Fragment>
            {getmachCard()}
            {getDialog()}
        </Fragment>)


    // return getmachCard();

}



export default Mycard;

