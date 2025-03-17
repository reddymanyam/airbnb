import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import EmailIcon from '@mui/icons-material/Email';
import { styled } from '@mui/material/styles';
import { useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

// Custom tab panel component
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`auth-tabpanel-${index}`}
      aria-labelledby={`auth-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
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
    id: `auth-tab-${index}`,
    'aria-controls': `auth-tabpanel-${index}`,
  };
}

// Styled components
const AuthButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: '8px',
  padding: '10px 0',
  fontWeight: 500,
  backgroundColor: '#FF385C', // Airbnb primary color
  '&:hover': {
    backgroundColor: '#E31C5F', // Darker shade when hovering
  },
}));

const SocialButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: '8px',
  padding: '8px 0',
  marginBottom: '10px',
  fontWeight: 500,
  color: '#222222',
  border: '1px solid #DDDDDD',
  backgroundColor: 'white',
  '&:hover': {
    border: '1px solid #222222',
    backgroundColor: 'white',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: '12px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    '& fieldset': {
      borderColor: '#DDDDDD',
    },
    '&:hover fieldset': {
      borderColor: '#717171',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#222222',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#717171',
    '&.Mui-focused': {
      color: '#222222',
    },
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '16px',
  padding: '10px 0',
  color: '#222222',
}));

const AuthContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#EC495B',
  padding: '0 16px',
  overflowY: 'auto',
}));

export default function Auth() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [value, setValue] = React.useState(0);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      await axios.post("http://localhost:5000/users", formData);
      //   alert('Registration successful!');
      setValue(1); // Switch to login tab
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

      const user = response.data.find((user) =>
        (user.email === formData.email) && (user.password === formData.password)
      );

      if (user) {
        // Store user information in localStorage
        localStorage.setItem('user', JSON.stringify(user));
        // Then navigate
        navigate("/dashboard");
      } else {
        alert('Invalid email or password.');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred during login. Please try again.');
    }
  };
  // Social login handlers
  const handleGoogleLogin = () => {
    // Integrate Google OAuth here
    console.log("Google login clicked");
    // Example: window.location.href = 'http://localhost:5000/auth/google';
  };

  const handleFacebookLogin = () => {
    // Integrate Facebook OAuth here
    console.log("Facebook login clicked");
    // Example: window.location.href = 'http://localhost:5000/auth/facebook';
  };

  const handleAppleLogin = () => {
    // Integrate Apple OAuth here
    console.log("Apple login clicked");
    // Example: window.location.href = 'http://localhost:5000/auth/apple';
  };

  const handleEmailLogin = () => {
    // Just focus on the email field for now
    document.getElementById("email-field").focus();
  };

  return (
    <AuthContainer>
      <Box
        sx={{
          width: '100%',
          maxWidth: 550,
          maxHeight: '80vh',
          overflowY: 'auto',
          backgroundColor: 'white',
          borderRadius: isMobile ? '8px' : '12px',
          boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.1)',
          padding: isMobile ? '16px' : '24px',
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          align="center"
          sx={{
            fontWeight: 600,
            color: '#222222',
            marginBottom: '16px'
          }}
        >
          {value === 0 ? 'Sign up for Airbnb' : 'Log in to Airbnb'}
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            TabIndicatorProps={{
              style: {
                backgroundColor: '#FF385C',
              },
            }}
          >
            <StyledTab label="Sign up" {...a11yProps(0)} />
            <StyledTab label="Log in" {...a11yProps(1)} />
          </Tabs>
        </Box>

        <form onSubmit={value === 0 ? handleSignUp : handleLogin}>
          <CustomTabPanel value={value} index={0}>
            {/* Social buttons for signup */}
            <Box sx={{ mb: 2 }}>
              <SocialButton
                fullWidth
                startIcon={<GoogleIcon />}
                onClick={handleGoogleLogin}
              >
                Continue with Google
              </SocialButton>
              <SocialButton
                fullWidth
                startIcon={<FacebookIcon />}
                onClick={handleFacebookLogin}
              >
                Continue with Facebook
              </SocialButton>
              <SocialButton
                fullWidth
                startIcon={<AppleIcon />}
                onClick={handleAppleLogin}
              >
                Continue with Apple
              </SocialButton>
              <SocialButton
                fullWidth
                startIcon={<EmailIcon />}
                onClick={handleEmailLogin}
              >
                Continue with Email
              </SocialButton>
            </Box>

            <Divider sx={{ my: 2 }}>
              <Typography variant="body2" color="text.secondary">or</Typography>
            </Divider>

            <StyledTextField
              label="Name"
              variant="outlined"
              fullWidth
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              size="small"
            />
            <StyledTextField
              id="email-field"
              label="Email"
              variant="outlined"
              fullWidth
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              size="small"
            />
            <StyledTextField
              label="Password"
              variant="outlined"
              fullWidth
              required
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <StyledTextField
              label="Confirm Password"
              variant="outlined"
              fullWidth
              required
              type={showPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              size="small"
            />

            <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
              By selecting Sign up, I agree to Airbnb's Terms of Service, Payments Terms of Service, and Nondiscrimination Policy.
            </Typography>

            <AuthButton fullWidth variant="contained" type="submit">
              Sign up
            </AuthButton>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={1}>
            {/* Social buttons for login */}
            <Box sx={{ mb: 2 }}>
              <SocialButton
                fullWidth
                startIcon={<GoogleIcon />}
                onClick={handleGoogleLogin}
              >
                Continue with Google
              </SocialButton>
              <SocialButton
                fullWidth
                startIcon={<FacebookIcon />}
                onClick={handleFacebookLogin}
              >
                Continue with Facebook
              </SocialButton>
              <SocialButton
                fullWidth
                startIcon={<AppleIcon />}
                onClick={handleAppleLogin}
              >
                Continue with Apple
              </SocialButton>
              <SocialButton
                fullWidth
                startIcon={<EmailIcon />}
                onClick={handleEmailLogin}
              >
                Continue with Email
              </SocialButton>
            </Box>

            <Divider sx={{ my: 2 }}>
              <Typography variant="body2" color="text.secondary">or</Typography>
            </Divider>

            <StyledTextField
              id="email-field-login"
              label="Email"
              variant="outlined"
              fullWidth
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              size="small"
            />
            <StyledTextField
              label="Password"
              variant="outlined"
              fullWidth
              required
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
              We'll email you trip confirmations and receipts.
            </Typography>

            <AuthButton fullWidth variant="contained" type="submit">
              Log in
            </AuthButton>

            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer' }}>
                Forgot password?
              </Typography>
            </Box>
          </CustomTabPanel>
        </form>
      </Box>
    </AuthContainer>
  );
}