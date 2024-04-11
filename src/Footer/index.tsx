import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './footer.scss'; 

export default function Footer() {
    return (
        <Box className="footer">
            <Typography variant="body1">
                © {new Date().getFullYear()} My App. All rights reserved.
            </Typography>
        </Box>
    );
}