import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import "./navbar.scss";

export default function Navbar() {
    return (
        <div className='navbar'>
            <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1712793600&semt=ais" alt="company logo" />
            <div className='navbar-items'>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/courses">Courses</Button>
                <Button color="inherit" component={Link} to="/about">About Us</Button>
                <Button color="inherit" component={Link} to="/contact">Contact Us</Button>
                <Button color="inherit" component={Link} to="/login">Login / SignUp</Button>
            </div>
        </div>
    )
}