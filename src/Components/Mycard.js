import { Card, CardActions, CardContent, Grid, Typography, Button, DialogContent, DialogContentText, Dialog, DialogTitle, DialogActions } from "@material-ui/core";
import React from "react";
import { getMachDetail } from "../api/Api";
import { useState, Fregment } from "react";

const Mycard = ({ match }) => {

    const [detail, setDetail] = useState({});

    const [open, setOpen] = useState(false);

    const getmachCard = () => {
        return (
            <Card style={{ marginTop: 20, background: match.matchStarted ? "#e2e2e2" : "" }}>
                <CardContent>
                    <Grid container justify="center" alignItems="center" spacing={4}>
                        <Grid item>
                            <Typography variant="h4">{match["team-1"]}</Typography>
                        </Grid>
                        <Grid item>
                            <img style={{ width: 80 }} src={require("../img/vs1.jpg")} alt='vs image'></img>
                        </Grid>
                        <Grid item>
                            <Typography variant="h4">{match["team-2"]} </Typography>
                        </Grid>
                    </Grid>
                </CardContent>

                <CardActions>
                    <Grid container justify="center" spacing={3} alignItems="center">
                        <Button item variant="contained" color="primary" onClick={() => {
                            handleDetail(match.unique_id);
                        }}> Show Details </Button>
                        <Button style={{ marginLeft: 10 }} item variant="contained" color="primary">
                            Start Time {new Date(match.dateTimeGMT).toLocaleDateString()} </Button>
                    </Grid>
                </CardActions>

            </Card>)

const handleDetail = (id) => {
    alert("Match id is ", id)

    getMachDetail(id)
        .then((data) => {
            console.log(data)
            setDetail(data)
            handleOpen()
        })
        .catch((error) => console.log(error));
}

const handleClose = () => {
    setOpen(false);
}

const handleOpen = () => {
    setOpen(true);

}

const getDialog = () => (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
            {"Match Detail.."}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                <Typography>{detail.state}</Typography>
                <Typography>
                    Match
                    <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                        {detail.matchStarted ? "Started" : "Still not started"}
                    </span>
                </Typography>

                <Typography>
                    Score
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
)

    



        return (
            <Fregment>
                {getmachCard()}
                {getDialog()}
            </Fregment>)


    };
}

export default Mycard;

