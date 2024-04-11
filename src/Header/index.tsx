import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Navbar from '../Navbar';

export default function Header() {
    return (
        <AppBar position="static">
            <Navbar/>
        </AppBar>
    );
};