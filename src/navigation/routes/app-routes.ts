export enum AppRoutes {
  Login = 'Login',
  Home = 'Home',
}

export type AppRouteProps = {
  [AppRoutes.Login]: undefined; // nu primeste nimic
  [AppRoutes.Home]: {title: string}; // (key=screenName, value=ce primeste screen-ul)
};
