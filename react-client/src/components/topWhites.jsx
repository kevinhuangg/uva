import React from 'react';

class TopWhites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topWines: [
      { name: 'peter michael',
        year: 2009,
        price: 30
       },
      { name: 'berringer',
        year: 2007,
        price: 20
       },
       { name: 'peter michael',
        year: 2012,
        price: 15
       },
       { name: 'joel gatt',
        year: 2009,
        price: 30
       },
       { name: 'stella',
        year: 2009,
        price: 30
       },
       { name: 'barefoot',
        year: 2009,
        price: 10
       }
      ]
    }

  }

  render() {
    return (
      <div className='topCategory'>
        <h2>
          Best White Wines
        </h2>
        <ul>
          <li><h4>{this.state.topWines[0].name}</h4></li>
          <li><h4>{this.state.topWines[1].name}</h4></li>
          <li><h4>{this.state.topWines[2].name}</h4></li>
          <li><h4>{this.state.topWines[3].name}</h4></li>
          <li><h4>{this.state.topWines[4].name}</h4></li>
        </ul>
      </div>
    )
  }
}

export default TopWhites;