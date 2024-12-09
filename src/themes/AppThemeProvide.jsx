import { createTheme } from "@mui/material/styles";

export const getDesignTokens = (mode) => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "light" ? '#1976d2' : '#90caf9',
        contrastText: '#ffffff',
      },
      secondary: {  //Used for accent elements like buttons, chips, or highlights.
        main: mode === "light" ? '#9c27b0' : '#ce93d8',
        contrastText: '#ffffff',
      },
      error: {   //Applied to inputs showing errors (like invalid forms) and error messages.
        main: '#f44336',
      },
      warning: {  //Used for alerts or indicators that show warnings.
        main: '#ff9800',
      },
      info: {    //Often used in banners or alerts to provide information.
        main: '#2196f3',
      },
      success: {  //Indicates successful actions (e.g., form submissions, success alerts).
        main: '#4caf50',
      },
      background: {
        default: mode === "light" ? '#f5f5f5' : '#121212',
        paper: mode === "light" ? '#ffffff' : '#1e1e1e',
      },
      text: {
        primary: mode === "light" ? '#000000' : '#ffffff',
        secondary: mode === "light" ? '#757575' : '#b0b0b0',
      },
    },
    components: {
      // Button component
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            padding: '8px 16px',
            ...(mode === "light" && {
              backgroundColor: '#1976d2',
              color: '#ffffff',
            }),
            ...(mode === "dark" && {
              backgroundColor: '#90caf9',
              color: '#000000',
            }),
          },
        },
      },
      // AppBar component (top navigation bar)
      MuiAppBar: {
        styleOverrides: {
          root: {
            ...(mode === "light" && {
              backgroundColor: '#1976d2',
            }),
            ...(mode === "dark" && {
              backgroundColor: '#333333',
            }),
          },
        },
      },
      // Typography component (text)
      MuiTypography: {
        styleOverrides: {
          root: {
            ...(mode === "light" && {
              color: '#000000',
            }),
            ...(mode === "dark" && {
              color: '#ffffff',
            }),
          },
        },
      },
      // Card component (container for content)
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '16px',
            ...(mode === "light" && {
              backgroundColor: '#ffffff',
              color: '#000000',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }),
            ...(mode === "dark" && {
              backgroundColor: '#1e1e1e',
              color: '#ffffff',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
            }),
          },
        },
      },
      // TextField component (input field)
      MuiTextField: {
        styleOverrides: {
          root: {
            ...(mode === "light" && {
              backgroundColor: '#f5f5f5',
            }),
            ...(mode === "dark" && {
              backgroundColor: '#333333',
              color: '#ffffff',
            }),
          },
        },
      },
      // Drawer component (sidebar)
      MuiDrawer: {
        styleOverrides: {
          paper: {
            ...(mode === "light" && {
              backgroundColor: '#ffffff',
              color: '#000000',
            }),
            ...(mode === "dark" && {
              backgroundColor: '#1e1e1e',
              color: '#ffffff',
            }),
          },
        },
      },
      // IconButton component (button with an icon)
      MuiIconButton: {
        styleOverrides: {
          root: {
            ...(mode === "light" && {
              color: '#1976d2',
            }),
            ...(mode === "dark" && {
              color: '#90caf9',
            }),
          },
        },
      },
      // Table component (data display)
      MuiTable: {
        styleOverrides: {
          root: {
            ...(mode === "light" && {
              backgroundColor: '#ffffff',
              color: '#000000',
            }),
            ...(mode === "dark" && {
              backgroundColor: '#1e1e1e',
              color: '#ffffff',
            }),
          },
        },
      },
      // ListItem component (list element)
      MuiListItem: {
        styleOverrides: {
          root: {
            ...(mode === "light" && {
              backgroundColor: '#ffffff',
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
            }),
            ...(mode === "dark" && {
              backgroundColor: '#1e1e1e',
              '&:hover': {
                backgroundColor: '#333333',
              },
            }),
          },
        },
      },
      // Avatar component (user profile image)
      MuiAvatar: {
        styleOverrides: {
          root: {
            ...(mode === "light" && {
              backgroundColor: '#1976d2',
            }),
            ...(mode === "dark" && {
              backgroundColor: '#90caf9',
            }),
          },
        },
      },
      // Snackbar component (temporary notifications)
      MuiSnackbar: {
        styleOverrides: {
          root: {
            ...(mode === "light" && {
              backgroundColor: '#1976d2',
              color: '#ffffff',
            }),
            ...(mode === "dark" && {
              backgroundColor: '#333333',
              color: '#ffffff',
            }),
          },
        },
      },
      // Alert component (status messages)
      MuiAlert: {
        styleOverrides: {
          root: {
            ...(mode === "light" && {
              backgroundColor: '#f5f5f5',
              color: '#000',
            }),
            ...(mode === "dark" && {
              backgroundColor: '#333333',
              color: '#fff',
            }),
          },
        },
      },
      // Switch component (toggle on/off)
      MuiSwitch: {
        styleOverrides: {
          root: {
            ...(mode === "light" && {
              color: '#1976d2',
            }),
            ...(mode === "dark" && {
              color: '#90caf9',
            }),
          },
        },
      },
      // Checkbox component (checkable option)
      MuiCheckbox: {
        styleOverrides: {
          root: {
            ...(mode === "light" && {
              color: '#1976d2',
            }),
            ...(mode === "dark" && {
              color: '#90caf9',
            }),
          },
        },
      },
      // Radio component (selectable option)
      MuiRadio: {
        styleOverrides: {
          root: {
            ...(mode === "light" && {
              color: '#1976d2',
            }),
            ...(mode === "dark" && {
              color: '#90caf9',
            }),
          },
        },
      },
      // Pagination component (navigation for data)
      MuiPagination: {
        styleOverrides: {
          root: {
            ...(mode === "light" && {
              backgroundColor: '#ffffff',
            }),
            ...(mode === "dark" && {
              backgroundColor: '#1e1e1e',
            }),
          },
        },
      },
      // Tooltip component (info on hover)
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            ...(mode === "light" && {
              backgroundColor: '#1976d2',
              color: '#ffffff',
            }),
            ...(mode === "dark" && {
              backgroundColor: '#90caf9',
              color: '#000000',
            }),
          },
        },
      },
      // Modal component (dialog overlay)
      MuiModal: {
        styleOverrides: {
          root: {
            ...(mode === "light" && {
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
            }),
            ...(mode === "dark" && {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
            }),
          },
        },
      },
      // ButtonBase component (base for buttons)
      MuiButtonBase: {
        styleOverrides: {
          root: {
            ...(mode === "light" && {
              backgroundColor: 'transparent',
            }),
            ...(mode === "dark" && {
              backgroundColor: 'transparent',
            }),
          },
        },
      },
    },
  });
};