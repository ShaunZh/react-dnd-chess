/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-11-19 23:38:47
 * @LastEditors: Zhang jie
 * @LastEditTime: 2021-11-24 17:26:23
 */

import React from 'react';
import {
  Switch,
  Route,
  RouteProps,
} from 'react-router-dom';

const Counter = React.lazy(() => import('@/pages/Counter'));
const Home = React.lazy(() => import('@/pages/Home'));
const PostsList = React.lazy(() => import('@/pages/Posts/PostsList'));
const AddPostForm = React.lazy(() => import('@/pages/Posts/AddPostForm'));
const ReactDndChess = React.lazy(() => import('@/pages/ReactDndChess'));

const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/postsList',
    exact: true,
    component: PostsList,
  },
  {
    path: '/addPost',
    exact: true,
    component: AddPostForm
  },
  {
    path: '/Counter',
    exact: true,
    component: Counter
  },
  {
    path: '/react-dnd-chess',
    exact: true,
    component: ReactDndChess
  }

];

export default function RouteConfig(): React.ReactElement {
  return (
    <Switch>
      {
        routes.map((route, i) => {
          const Component = route.component as typeof React.Component;
          return (
            <Route key={i} {...route}>
              <Component></Component>
            </Route>
          );
        })
      }
    </Switch>
  );
}