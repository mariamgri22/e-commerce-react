import * as React from 'react';
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {ACTION_TYPES} from '../../App';

export default function Header({ dispatch}) {
    const [auth, setAuth] = React.useState(true);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };
   


    const handleCartIconClick = () => {
         dispatch({ type: ACTION_TYPES.TOGGLE_CART });
       
    };
  

    return (
        <Box sx={{ flexGrow: 1 }}>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={auth}
                            onChange={handleChange}
                            aria-label="login switch"
                        />
                    }
                    label={auth ? 'Logout' : 'Login'}
                />
            </FormGroup>
            <AppBar position="static">
                <Toolbar>
                    {auth && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleCartIconClick}
                                color="inherit"
                            >
                                <ShoppingCartIcon />
                            </IconButton>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
