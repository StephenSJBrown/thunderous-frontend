import React from "react";
import { Route, withRouter } from "react-router-dom";
import { AnimatedSwitch } from "./AnimatedSwitch";

import HomePage from '../pages/Home'
import LogIn from '../pages/LogIn'
import SignUp from '../pages/SignUp'

import Profile from "../pages/Profile";

import Centres from "../pages/Centres/Centres";

import Coupons from "../pages/Coupons/Coupons";
import Category from "../pages/Coupons/Category";
import Store from "../pages/Coupons/Store";
import Coupon from "../pages/Coupons/Coupon";
import MyCoupons from "../pages/Coupons/MyCoupons";
import Redeem from '../pages/Coupons/Redeem'

import Deposit from "../pages/Deposits/Deposit"
import Weigh from "../pages/Deposits/Weigh"
import Result from "../pages/Deposits/Result"

/**
 * The ".page" class is key to animating a full page and not receive bumps while
 * animating pages in/out. It is position: fixed to allow the animation to play
 * without the DOM elements messing up.
 *
 * Try to remove .page to see the effect.
 */

{/* <Route exact path="/" component={HomePage} />
      <Route path="/profile" component={Profile} />
      <Route path="/centres" component={Centres} />

      <Route exact path="/deposit/" component={Deposit}/>
      <Route path="/deposit/weigh" component={Weigh}/>
      <Route path="/deposit/result" component={Result} />

      <Route exact path="/coupons/" component={Coupons} />
      <Route path="/coupons/:category" component={Category} />
      <Route path="/store/:store" component={Store} />
      <Route path="/coupon/:id" component={Coupon} />

      <Route path="/redeem" component={Redeem} />

      <Route path="/mycoupons" component={MyCoupons} /> */}

const routes = [
  {
    exact: true,
    component: HomePage,
    path: "/"
  },
  {
    component: SignUp,
    path: "/signup"
  },
  {
    component: LogIn,
    path: "/login"
  },
  {
    component: Profile,
    path: "/profile"
  },
  {
    component: Centres,
    path: "/centres"
  },
  {
    exact: true,
    component: Deposit,
    path: "/deposit/"
  },
  {
    component: Weigh,
    path: "/deposit/weigh"
  },
  {
    component: Result,
    path: "/deposit/result"
  },
  {
    exact: true,
    component: Coupons,
    path: "/coupons/"
  },
  {
    component: Category,
    path: "/coupons/:category"
  },
  {
    component: Store,
    path: "/store/:store"
  },
  {
    component: Coupon,
    path: "/coupon/:id"
  },
  {
    component: Redeem,
    path: "/Redeem/"
  },
  {
    component: MyCoupons,
    path: "/mycoupons/"
  }
];

const Routes = withRouter(({ location }) => {
  return (
    <AnimatedSwitch location={location}>
      {routes.map(route => {
        return (
          <Route
            exact
            key={route.path}
            path={route.path}
            component={route.component}
          />
        );
      })}
    </AnimatedSwitch>
  );
});

export default Routes;
