import React, { lazy, Suspense } from 'react';
import {Layout} from "antd";
import { Route, Switch, Redirect } from 'react-router-dom';
const SiderBar = lazy(() => import(/* webpackChunkName: "layout" */ '../components/layout/SiderBar'));
const HeaderBar = lazy(() => import(/* webpackChunkName: "layout" */ '../components/layout/HeaderBar'));
const Home = lazy(() => import(/* webpackChunkName: "home" */ '../pages/home/Home'));
const Connect = lazy(() => import(/* webpackChunkName: "connect" */ '../pages/user/connect/Connect'));
const List = lazy(() => import(/* webpackChunkName: "userList" */ '../pages/user/list/List'));
const Rich = lazy(() => import(/* webpackChunkName: "rich" */ '../pages/tool/rich/Rich'));
const Project = lazy(() => import(/* webpackChunkName: "rich" */ '../pages/project/index'));

const NotFind = lazy(() => import(/* webpackChunkName: "notFind" */ '../pages/notFind/NotFind'));

class Index extends React.Component {

  render() {
    const loggedIn = window.localStorage.getItem('loggedIn');
    const mainPage = (
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <SiderBar></SiderBar>
        </Suspense>
        <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <HeaderBar history={this.props.history}></HeaderBar>
        </Suspense>
          <div className="layout-content">
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/" component={ Home }/>
                <Route path="/user/connect" component={ Connect }/>
                <Route path="/user/list" component={ List }/>
                <Route path="/tool/rich" component={ Rich }/>
                <Route path='/project' component={Project}/>
                <Route component={ NotFind }/>
              </Switch>
            </Suspense>
          </div>
        </Layout>
      </Layout>
    );
    return (
      loggedIn ? (
        mainPage
      ) : (
        <Redirect to="/login"/>
      )
    );
  }
}

export default Index;
