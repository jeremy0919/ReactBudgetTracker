import './App.css';
import PageHolder from './Pages/PageHolder';
import { PageProvider } from './Context/RenderPage1';
import Header from './Pages/Header';
import { AccountProvidor } from './Context/AccountInfo';
function App() {


  return (
    <div className="App">
      <PageProvider>
      <AccountProvidor>
        <Header></Header>
           <PageHolder />
           </AccountProvidor>
      </PageProvider>
      <p>have userInfo display all lists, current budget, overal spending graphic, buttons expand lists beneath them </p>
      <p>add bar left and right functionality </p>
      <p>Change print list to be nice and color cordinated </p>
      <p>make things look nice</p>
      
      <p>condense files like page 0</p>
      <p>change username Identification to Gui </p>
    </div>
  );
}

export default App;

