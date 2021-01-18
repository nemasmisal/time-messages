import './App.css';
import Home from './home';
import Navbar from './navbar';
import Lobby from './lobby';
import ChatRoom from './chat-room';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import AuthContextProvide from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
        <AuthContextProvide>
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
      </AuthContextProvide>
    </BrowserRouter>
  );
}

export default App;
