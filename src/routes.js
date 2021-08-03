import { Switch, Route } from 'react-router-dom';
import { appConfig } from './config';

export const routes = (
  <Switch>
    {appConfig.routes.map((route, key) => (
      <Route key={key} exact path={route.path} render={() => route.component} />
    ))}
  </Switch>
);
