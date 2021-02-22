import {Switch, Route} from 'react-router-dom';
//import components
import PrincipalView from '../principal-view/principal-view';
import ToolsView from '../knowledge-views/tools-view';
import ContactForm from '../contact-form/contact-form';
import ProyectsView from '../proyects-view/proyects-view';


const Routes = ()=>{
  return(
    <Switch>
      <Route exact path="/">
        <PrincipalView/>
      </Route>
      <Route path="/my-skills">
        <ToolsView/>
      </Route>
      <Route path="/proyects">
        <ProyectsView/>
      </Route>
      <Route path="/contact-form">
        <ContactForm/>
      </Route>
    </Switch>
  );
}

export default Routes;
