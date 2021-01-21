import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import { Home, ChatRoom, Lobby } from './pages';
import Navbar from './shared/navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/lobby" component={Lobby} />
          <Route path="/chat-room" component={ChatRoom} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
