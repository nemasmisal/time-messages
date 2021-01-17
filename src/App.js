import './App.css';
import Home from './home';
import Navbar from './navbar';
import Lobby from './lobby';
import ChatRoom from './chat-room';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/lobby">
              <Lobby />
            </Route>
            <Route path="/chat-room">
              <ChatRoom />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
