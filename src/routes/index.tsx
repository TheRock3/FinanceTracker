import * as React from 'react';
import { RouteType } from './config';
import { Route } from 'react-router-dom';
import PageWrapper from '../Components/Layout/PageWrapper';
import appRoutes from './appRoutes';

export interface IAppProps {
}

const generateRoute = (routes: RouteType[]): React.ReactNode=> {
  return routes.map((route, index)=>(
    route.index ? (
        <Route
        index={route.index}
        path={route.path}
        element={
            <PageWrapper state={route.state}>
                {route.element}
            </PageWrapper>
        }
        key={index}/>
    ): (
        <Route
        index={route.index}
        path={route.path}
        element={
            <PageWrapper state={route.state?? undefined}>
                {route.element}
            </PageWrapper>
            }
        key={index}
        >
            {route.child && generateRoute(route.child)}
        </Route>
    )
  ));
};

export const routes: React.ReactNode = generateRoute(appRoutes);
