import React, { Component , ReactDOM} from 'react';
import logo from '../images/brownLogo.png';
import image1 from '../images/shrimpy.jpg';
import image2 from '../images/souls2.jpg';
import image4 from '../images/cornbread.jpg';
import '../styles/app.css';
import { Image } from 'semantic-ui-react';
import NavBar from './NavBar';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import { Router, Route,IndexRoute, hashHistory,Link } from 'react-router';


// ReactDOM.render(
//   <Router history ={hashHistory}>
//    <Route path="/" component={App}></Route>
//    <Route path="navbar" component={NavBar}></Route>
//    <Route path= "menu" component={Menu}></Route>
//    <Route path="about" component={About}></Route>
//    <Route path="contact" component={Contact}></Route>
//   </Router>,
//  );
//



class App extends Component {
  render() {
    return (
    <div id="root">
      <div className="App">
       <div className="night-header">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1 className="App-title">Welcome to NightCap</h1>
        <NavBar />
      </div>
      <div className="pic-container">
        <div className="left-pic">
        <Image src={image2} size='large'/>
        </div>
        <div className="middle-pic">
        <Image src={image1} size="large"/>
        </div>
        <div className="right-pic">
        <Image src={image4} size="large"/>
        </div>
      </div>
    </div>
  </div>
    );
  }
}


export default App;
