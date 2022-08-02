
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
// import Dashboard from './components/Dashboard'
import './App.scss'
import { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div>
        <Home/>
     <Layout/>
     <About/>
     
     <Portfolio/>
     <Contact/>
    
      </div>
    );
  }
}

export default App