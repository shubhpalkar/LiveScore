import React from "react";
import { AppBar, Toolbar, IconButton, Typography , Button} from "@material-ui/core";
import  MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon></MenuIcon>
                     </IconButton>
                <Typography variant="h6"> Live Score </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )

}

export default Navbar;
