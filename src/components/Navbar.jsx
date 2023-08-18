import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemIcon from '@mui/material/ListItemIcon';
import ToDoIcon from './ToDoIcon';
import CalendarIcon from './CalendarIcon';
import RemindersIcon from './RemindersIcon';
import PlanningIcon from './PlanningIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const drawerWidth = 240;

function Navbar(props) {
  const { window } = props;
  const [openFeatures, setOpenFeatures] = React.useState(false);
  const [openCompany, setOpenCompany] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [featuresMenu, setFeaturesMenu] = React.useState(null);
  const [companyMenu, setCompanyMenu] = React.useState(null);
  const featuresMenuState = Boolean(featuresMenu);
  const companyMenuState = Boolean(companyMenu);

  const handleFeaturesMenu = (event) => {
    setFeaturesMenu(event.currentTarget);
  };
  const handleFeaturesClose = () => {
    setFeaturesMenu(null);
  };
  const handleCompanyMenu = (event) => {
    setCompanyMenu(event.currentTarget);
  };
  const handleCompanyClose = () => {
    setCompanyMenu(null);
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleClickFeatures = () => {
    setOpenFeatures(!openFeatures);
  };
  const handleClickCompany = () => {
    setOpenCompany(!openCompany);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center', px:1 }}>
      <Box onClick={handleDrawerToggle} sx={{ display:'block', textAlign:'right', p:2}}>
        <CloseIcon fontSize='large'/>
      </Box>
      <List sx={{color: 'var(--clr-neutral-gray)'}}>
        <ListItemButton onClick={handleClickFeatures}>
          <ListItemText primary="Features" />
          {openFeatures ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openFeatures} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon sx={{ minWidth: '30px'}}>
                <ToDoIcon />
              </ListItemIcon>
              <ListItemText primary="Todo List" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon sx={{ minWidth: '30px'}}>
                <CalendarIcon />
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon sx={{ minWidth: '30px'}}>
                <RemindersIcon />
              </ListItemIcon>
              <ListItemText primary="Reminders" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon sx={{ minWidth: '30px'}}>
                <PlanningIcon />
              </ListItemIcon>
              <ListItemText primary="Planning" />
            </ListItemButton>
          </List>
        </Collapse>
      <ListItemButton onClick={handleClickCompany}>
          <ListItemText primary="Company" />
          {openCompany ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openCompany} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="History" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Our Team" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Blog" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItem key='Careers' disablePadding>
          <ListItemButton sx={{ textAlign: 'left'}}>
            <ListItemText primary='Careers' />
          </ListItemButton>
        </ListItem>
        <ListItem key='About' disablePadding>
          <ListItemButton sx={{ textAlign: 'left'}}>
            <ListItemText primary='About' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary='Login'/>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary='Register' sx={{py:1 ,borderRadius:3 ,border: '2px solid var(--clr-neutral-gray)'}}/>
            </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor:'#fff', color:'var(--clr-neutral-black)', boxShadow:'none' }}>
        <Toolbar>
          <Box
            component="div"
            sx={{ flexGrow: {xs:1, md:0}, display: { xs: 'flex', sm: 'flex' }, alignItems:'center', mt:'10px' }}
          >
          <img src="/images/logo.svg" alt="Snap Logo" />
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}>
            <MenuIcon sx={{flexGrow: 1}} fontSize='large'/>
          </IconButton>
          <Box
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems:'center', mt:1 }}
          >
            <Box sx={{ ml:5 }}>
              <Button
                id="features-button"
                aria-controls={featuresMenuState ? 'features-button' : undefined}
                aria-haspopup="true"
                aria-expanded={featuresMenuState ? 'true' : undefined}
                onClick={handleFeaturesMenu}
                sx={{mx:2 ,textTransform: 'none', color:'var(--clr-neutral-gray)', fontWeight:'var(--fw-bold)'}}
                endIcon={featuresMenuState ?<KeyboardArrowUpIcon />:<KeyboardArrowDownIcon />}
              >
                Features
              </Button>
              <Menu
                id="features-button"
                anchorEl={featuresMenu}
                open={featuresMenuState}
                onClose={handleFeaturesClose}
                MenuListProps={{
                  'aria-labelledby': 'features-button',
                }}
              >
                <MenuItem onClick={handleFeaturesClose}>
                  <ToDoIcon />
                  Todo List
                </MenuItem>
                <MenuItem onClick={handleFeaturesClose}>
                  <CalendarIcon />
                  Calendar
                </MenuItem>
                <MenuItem onClick={handleFeaturesClose}>
                  <RemindersIcon />
                  Reminders
                </MenuItem>
                <MenuItem onClick={handleFeaturesClose}>
                  <PlanningIcon />
                  Planning
                </MenuItem>
              </Menu>
              <Button
                id="company-button"
                aria-controls={companyMenuState ? 'company-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={companyMenuState ? 'true' : undefined}
                onClick={handleCompanyMenu}
                sx={{mx:2, textTransform: 'none', color:'var(--clr-neutral-gray)', fontWeight:'var(--fw-bold)'}}
                endIcon={companyMenuState ?<KeyboardArrowUpIcon />:<KeyboardArrowDownIcon />}
              >
                Company
              </Button>
              <Menu
                id="company-menu"
                anchorEl={companyMenu}
                open={companyMenuState}
                onClose={handleCompanyClose}
                MenuListProps={{
                  'aria-labelledby': 'company-menu',
                }}
              >
                <MenuItem onClick={handleCompanyClose}>History</MenuItem>
                <MenuItem onClick={handleCompanyClose}>Our Team</MenuItem>
                <MenuItem onClick={handleCompanyClose}>Blog</MenuItem>
              </Menu>
              <Button sx={{mx:2, textTransform: 'none', color:'var(--clr-neutral-gray)', fontWeight:'var(--fw-bold)'}}>
                Careers
              </Button>
              <Button sx={{mx:2, textTransform: 'none', color:'var(--clr-neutral-gray)', fontWeight:'var(--fw-bold)'}}>
                About
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' }, mt:1 }}>
            <Button color="inherit" sx={{textTransform:'none', py:'5px', px:1, mx:1,fontWeight:'bold', color:'var(--clr-neutral-gray)'}}>Login</Button>
            <Button sx={{textTransform:'none',py:'6px', px:'18px', mx:'2px' ,borderRadius:'.825rem' ,border: '2px solid var(--clr-neutral-gray)', fontWeight:'bold', color:'var(--clr-neutral-gray)'}}>Register</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{display: { xs: 'block', md: 'none' }}}>
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
