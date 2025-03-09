import { RouteType } from './config';
import { HomePage } from '../pages/home/HomePage';
import  DashboardPageLayout  from '../pages/dashboard/DashboardPageLayout';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import { DashboardIndex } from '../pages/dashboard/DashboardIndex';

export interface IAppProps {
}

const appRoutes: RouteType[] = [
    {
        index: true,
        element: <HomePage/>,
        state: "home"
    },
    {
        path:'/dashboard',
        element:<DashboardPageLayout/>,
        state: 'dashboard',
        sidebarProps:{
            displayText: "Dashboard",
            icon: <DashboardOutlinedIcon/>
        },
        child: [
            {
                index: true,
                element: <DashboardIndex/>,
                state: 'dashboard.index'
            },
            {
                path: "/dashboard/default",
                element: <DashboardPageLayout/>,
                state: 'dashboard.default',
                sidebarProps:{
                    displayText: 'Default'
                }
            }
        ]
    }
];

export default appRoutes;
