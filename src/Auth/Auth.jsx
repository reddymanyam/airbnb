import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import bgimg from '../assets/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg';
import styled from '@emotion/styled';
import axios from 'axios';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3, color: 'white' }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const CustomPaper = styled(Box)(({ theme }) => ({
    padding: '24px',
    borderRadius: '16px',
    width: '400px',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    backdropFilter: 'blur(4px)',
    color: 'white',
}));

const CustomTextField = styled(TextField)({
    '& .MuiInputBase-root': {
        color: 'white',
    },
    '& .MuiInputLabel-root': {
        color: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: '#ccc',  
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white',
        },
    },
});

export default function Auth() {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            await axios.post("http://localhost:5000/users", formData);
            alert('Registration successful!');
            setValue(1); 
        } catch (err) {
            console.error('Error:', err.response ? err.response.data : err.message);
            alert('Please fill in the details correctly.');
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get("http://localhost:5000/users", {
                params: {
                    email: formData.email,
                    password: formData.password
                }
            });

            const user = response.data.find((user) => (user.email === formData.email) && (user.password === formData.password));

            if (user) {
                alert('Login successful!');
            } else {
                alert('Invalid email or password.');
            }
        } catch (err) {
            console.error(err);
            alert('An error occurred during login. Please try again.');
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100%',
                backgroundImage: `url(${bgimg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <CustomPaper>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        variant="fullWidth"
                        textColor="inherit"
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: 'white',
                            },
                        }}
                    >
                        <Tab label="SignUp" {...a11yProps(0)} sx={{ color: 'white' }} />
                        <Tab label="Login" {...a11yProps(1)} sx={{ color: 'white' }} />
                    </Tabs>
                </Box>
                <form onSubmit={value === 0 ? handleSignUp : handleLogin}>
                    <CustomTabPanel value={value} index={0}>
                        <CustomTextField
                            id="name-input"
                            label="Enter your Name"
                            fullWidth
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            sx={{ mb: 2, mt: 2 }}
                        />
                        <CustomTextField
                            id="email-input-login"
                            label="Enter your Email"
                            fullWidth
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            sx={{ mb: 2 }}
                        />
                        <CustomTextField
                            id="password-input-login"
                            label="Enter your Password"
                            fullWidth
                            required
                            type="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            sx={{ mb: 2 }}
                        />
                        <CustomTextField
                            id="confirm-password-input"
                            label="Confirm your Password"
                            fullWidth
                            required
                            type="password"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            sx={{ mb: 2 }}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant="contained" sx={{ width: '150px', mb: 2 }} type='submit'>
                                SignUp
                            </Button>
                        </Box>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <CustomTextField
                            id="email-input-signup"
                            label="Enter your Email"
                            fullWidth
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            sx={{ mb: 2, mt: 2 }}
                        />
                        <CustomTextField
                            id="password-input-signup"
                            label="Enter your Password"
                            fullWidth
                            required
                            type="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                            <Button variant="contained" sx={{ width: '150px', mb: 2 }} type='submit'>
                                Login
                            </Button>
                        </Box>
                    </CustomTabPanel>
                </form>
            </CustomPaper>
        </Box>
    );
}
