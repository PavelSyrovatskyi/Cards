import React from 'react';
import Card from './Card.jsx';
import './App.css';
import logo1 from './img/menu-button.png';
import logo2 from './img/thunder.svg';
import logo3 from './img/user-2.svg';
import Footer from "./Footer";
import Header from "./Header";

const footerList = [
  {
    id: 1,
    menu: 'HOME',
    logo: logo1
  },
  {
    id: 2,
    menu: 'TOOLKIT',
    logo: logo2
  },
  {
    id: 3,
    menu: 'PROFILE',
    logo: logo3
  }

]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  handleCountChangeIncrement = () => {
    this.setState((state) => {
      return {count: state.count++}
    })
  }
  handleCountChangeDecrement = () => {

  }
render() {
  return (
    <>
      <div className="App">
        <button onClick={this.handleCountChangeIncrement}>{this.state.count}</button>
        <div className="main">
          <Header
            header={'Getting started'}
          />

          <div className="menu">
            <Card
              title={'Introduction'}
              subtitle={'Complete'}
              status={'active'}
            />

            <Card
              title={'The Jigsaw Test'}
              subtitle={'2 minutes'}
              status={'active'}
            />

            <Card
              title={'Set your objectives'}
              subtitle={'1 minute'}
              status={'progress'}
            />
            '
            <Card
              title={'Baseline Evaluation'}
              subtitle={'10 minutes'}
              status={'unlock'}
            />

          </div>


        </div>
        <div className="footer">
          {footerList.map((item) => {
            return (
              <Footer
                id={item.id}
                logo={item.logo}
                menu={item.menu}
              />
            )
          })}




        </div>
      </div>

    </>
  );
}

}

export default App;
