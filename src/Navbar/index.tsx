import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import "./navbar.scss";

export default function Navbar() {
    return (
        <div className='navbar'>
            <img src="https://cdn.pixabay.com/photo/2023/12/21/02/09/fox-8461067_1280.jpg" alt="company logo" />
            <div className='navbar-items'>
                <Button color="inherit" sx={{ fontWeight: 'bold', fontSize: '16px' }} component={Link} to="/">Home</Button>
                <Button color="inherit" sx={{ fontWeight: 'bold', fontSize: '16px' }} component={Link} to="/courses">Courses</Button>
                <Button color="inherit" sx={{ fontWeight: 'bold', fontSize: '16px' }} component={Link} to="/about">About Us</Button>
                <Button color="inherit" sx={{ fontWeight: 'bold', fontSize: '16px' }} component={Link} to="/contact">Contact Us</Button>
                <Button color="inherit" sx={{ fontWeight: 'bold', fontSize: '16px' }} component={Link} to="/login">Login / SignUp</Button>
            </div>
        </div>
    )
}