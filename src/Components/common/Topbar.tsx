import { AppBar, Toolbar, Typography } from '@mui/material';
import SizeConfig from '../../configs/SizeConfig';
import colorConfigs from '../../configs/ColorConfig';

export interface IAppProps {
}

export function Topbar (props: IAppProps) {
  return (
    <AppBar 
      position='fixed'
      sx={{
        width: `calc(100% - ${SizeConfig.sidebar.width})`,
        ml: SizeConfig.sidebar.width,
        boxShadow: 'unset',
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color
      }}>
        <Toolbar>
          <Typography variant='h6'>
            TopBar
          </Typography>
        </Toolbar>
    </AppBar>
  );
}
