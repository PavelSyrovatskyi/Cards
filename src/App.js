import React from 'react';
import Card from './Card.js';
import Counter from './Counter.js';
import './App.css';
import logo1 from './img/menu-button.png';
import logo2 from './img/thunder.svg';
import logo3 from './img/user-2.svg';
import Footer from "./Footer";
import Header from "./Header";


const cardList = [
  {
    id:1,
    title: 'Introduction',
    subtitle: 'Complete'
  },
  {
    id:2,
    title: 'The Jigsaw Test',
    subtitle: '2 minutes'
  },
  {
    id:3,
    title: 'Set your objectives',
    subtitle: '1 minute'
  },
  {
    id:4,
    title: 'Baseline Evaluation',
    subtitle: '10 minutes'
  }
];

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

];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }


render() {
  return (
    <>
      <div className="App">
        <Counter />
        <div className="main">
          <Header
            header={'Getting started'}
          />

          <div className="menu">
            {cardList.map(item => {
              return (
                <Card
                  key={item.id}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              )
            })}

          </div>


        </div>
        <div className="footer">
          {footerList.map((item) => {
            return (
              <Footer
                key={item.id}
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
