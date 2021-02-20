import {Switch, Route} from 'react-router-dom';
//import components
import PrincipalView from '../principal-view/principal-view';
import PresentView from '../presentation-view/presentation-view';
import ToolsView from '../knowledge-views/tools-view';
import ProyectsView from '../proyects-view/proyects-view';


const Routes = ()=>{
  return(
    <Switch>
      <Route exact path="/">
        <PrincipalView/>
      </Route>
      <Route path="/presentation">
        <PresentView/>
      </Route>
      <Route path="/tools">
        <ToolsView/>
      </Route>
      <Route path="/proyects">
        <ProyectsView/>
      </Route>
    </Switch>
  );
}

export default Routes;
