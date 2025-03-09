import { Box, Toolbar } from '@mui/material';
import { Topbar } from '../common/Topbar';
import SizeConfig from '../../configs/SizeConfig';
import Sidebar from '../common/Sidebar';
import colorConfigs from '../../configs/ColorConfig';
import { Outlet } from 'react-router-dom';

export default function MainLayout () {
  return (
    <Box>
        <Topbar/>
        <Box component="nav" 
            sx={{
            width: SizeConfig.sidebar.width,
            flexShrink: 0
            }}>

          <Sidebar/>
        </Box>
        <Box component="main" 
            sx={{
            flexGrow: 1, 
            p:3, 
            width: `calc(100% - ${SizeConfig.sidebar.width})`, 
            minHeight: '100vh', 
            backgroundColor: colorConfigs.mainBg
            }}> 
          <Toolbar/>
          <Outlet/>
        </Box>
    </Box>
  );
}
