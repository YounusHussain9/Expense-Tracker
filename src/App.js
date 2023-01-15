import Balance from './components/balance/Balance.component';
import Header from './components/header/Header.component';
import History from './components/history/History.component';
import Calculated from './components/calculated/Calculated.component';
import Addnew from './components/addnewtrans/Addnew.component';
import { GlobalProvider } from './ContextApi/Globalstate';
import './App.css';

function App() {
  return (
    <GlobalProvider >
      <div id='app-container'><Header />
<Balance />
<Calculated />
<History />
<Addnew />
</div>

    </GlobalProvider>
  );
}

export default App;
