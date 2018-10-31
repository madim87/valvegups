import React, { Component } from 'react';
import Header from './Header';
import Main from '../containers/Main';
import Footer from './Footer';
import '../asset/css/App.css';

class App extends Component {

  render() {
    const textFooter = 'Footer text balvanka (@)';
    return (
    <div>
      <div className="App">
        <Header/>
        <Main/>
        <Footer
          footertextData = {textFooter}
        />
      </div>
    </div>
    );
  }
}

export default App;
