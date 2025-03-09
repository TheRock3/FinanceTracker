import { Avatar, Drawer, List, ListItem, ListItemButton, ListItemIcon, Stack, Toolbar } from '@mui/material';
import * as React from 'react';
import SizeConfig from '../../configs/SizeConfig';
import colorConfigs from '../../configs/ColorConfig';
import appRoutes from '../../routes/appRoutes';
import { routes } from '../../routes';

export interface IAppProps {
}

export default function Sidebar (props: IAppProps) {
  return (
    <Drawer variant='permanent'
    sx={{
      width: SizeConfig.sidebar.width,
      flexShrink: 0,
      "& .MultiDrawer-paper":{
        width: SizeConfig.sidebar.width,
        boxSizing: 'border-box',
        borderRight: '0px',
        backgroundColor: colorConfigs.sidebar.bg
      }

    }}>
      <List disablePadding key={Math.random().toString()}>
        <Toolbar>
        <Stack 
        sx={{
          width: '100%'
        }}
        direction='row'
        justifyContent='center'>
          <Avatar/>
        </Stack>
        </Toolbar>
        {appRoutes.map((route,index)=>(
          route.sidebarProps?(
            route.child ? (
              <ListItemButton>
                <ListItemIcon>
                  {route.sidebarProps.icon && route.sidebarProps.icon}
                </ListItemIcon>
                  {route.sidebarProps.displayText}
              </ListItemButton>
            ):
            null
          ):null
        ))}
      </List>
      </Drawer>
  );
}
