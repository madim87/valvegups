import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../asset/css/App.css';

class App extends Component {

  state = {
    standartGap:{
                    'inGapMin' : 0.12,
                    'inGapMax' : 0.15,
                    'outGapMin': 0.20,
                    'outGapMax': 0.25,
                  },
    standartShim: {
                    '250' : 2.50,
                    '255' : 2.55,
                  }
  }

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
