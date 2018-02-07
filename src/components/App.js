import React, { Component , ReactDOM} from 'react';
import logo from '../images/blueLogo.png';
import image1 from '../images/souls.jpg';
import image2 from '../images/souls2.jpg';
import image4 from '../images/cornbread.jpg';
import { Image } from 'semantic-ui-react';
import '../styles/app.css';
import NavBar from './NavBar';
import Menu from './Menu';
// import About from './About';
import Contact from './Contact';
import { Router, Route } from 'react-router';


// ReactDOM.render(
//   <Router history ={Router}>
//    <Route path="/" component={App}></Route>
//    <Route path="navbar" component={NavBar}></Route>
//    <Route path= "menu" component={Menu}></Route>
//    {/* <Route path="about" component={About}></Route> */}
//    <Route path="contact" component={Contact}></Route>
//   </Router>,
//  );




class App extends Component {
  render() {
    return (
    <div id="root">
      <div className="App">
       <div className="night-header">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <NavBar />
        <h1 className="App-title">Let Us Feed You...</h1>
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
      <footer className="night-footer">

      </footer>
        </div>
      </div>
    </div>
  </div>
    );
  }
}


export default App;
