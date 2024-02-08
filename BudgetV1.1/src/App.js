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
    </div>
  );
}

export default App;

