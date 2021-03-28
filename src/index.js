import React from 'react';
import ReactDOM from 'react-dom';

import "semantic-ui-css/semantic.min.css";


import SeasonDisplay from "./SeasonDisplay";
import Spinner from './Spinner';

class App extends React.Component {
  state = {lat: null, errMsg: null};

  componentDidMount() {

    window.navigator.geolocation.getCurrentPosition(
      pos => this.setState({lat: pos.coords.latitude}),
      err => this.setState({errMsg: err.message}),
    );

  }


  renderContent() {
    if (this.state.errMsg) {
      return <div>ErrorMessage: {this.state.errMsg}</div>
    }
    if (this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    return <Spinner/>
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
