import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../assets/logo.png'
import { useTranslation } from 'react-i18next'
// import { padding } from '@mui/system';
import Switcher from '../components/Switcher'
import { bgcolor, fontSize } from '@mui/system';
const drawerWidth = 240;

function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const {t, i18n} = useTranslation()
    
    const changeLanguage = (language)=>{
        i18n.changeLanguage(language)
    }
  const navItems = [t("navbar.text1"), t("navbar.text2"),t("navbar.text3"),t("navbar.text4"),t("navbar.text5"),t("navbar.text6"),t("navbar.text7")];
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}  className=" dark:bg-[#212B31] pb-[150px]">
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={logo} alt="" />
      </Typography>
      <Divider />
      <List >
        {navItems.map((item) => (
          <ListItem key={item} disablePadding >
            <ListItemButton sx={{ textAlign: 'center' }} >
              <ListItemText primary={item} className='text-gray-700 dark:text-white'/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" className="dark:bg-[white] dark:text-gray-700 " sx={{ backgroundColor: 'black', color: 'white' }}>{t('navbar.button')} </Button>
      
      
      {/* <Button variant='' /> */}
    </Box>
    
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} className='z-10' >
      <CssBaseline />
      <AppBar component="nav" sx={{background:"white"}}  className=" dark:bg-[#040e14] dark:text-white ">
        <Toolbar className='z-10'>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
            className="dark:text-white"
          >
            <MenuIcon />
          </IconButton  >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          <img src={logo} alt="" />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, paddingRight: "30px", }}  className="dark:bg-[#040e14]"> 
            {navItems.map((item) => (
              <Button key={item} className="dark:text-white" sx={{ color: 'black',fontSize:"12px" }} >
                {item}
              </Button>
              
            ))}
            <Button variant="contained" sx={{ backgroundColor: '#040e14', color: '#72787D',fontSize:"12px" }} className="dark:bg-white">{t("navbar.button")}</Button>

          </Box>
          {/* language */}
    <div className='sm:w-full sm:flex sm:justify-end pr-[5px] flex gap-5'>
        <Switcher/>
    <select
    className="sm:py-2 sm:px-4 border border-gray-300 rounded-md shadow-sm text-sm leading-5 font-medium text-gray-700 bg-white focus:outline-none dark:bg-[#040e14] dark:text-[white] "
    onChange={(e) => changeLanguage(e.target.value)}>
    <option value="en">En</option>
    <option value="ru">Ru</option>
    </select>
    </div>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{color:"72787D"}}>
        <Drawer
         className="dark:bg-[#040e14]"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{}}>
        
        <Toolbar />

      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;