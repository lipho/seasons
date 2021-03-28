import './SeasonDisplay.css';

import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }
  return lat > 0 ? 'winter' : 'summer';
}

const seasonConf = {
  summer: {
    text: 'Let\'s hit the beach',
    icon: 'sun',
  },
  winter: {
    text: 'Burr, it\'s chilly',
    icon: 'snowflake',
  }
}

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {text, icon} = seasonConf[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`${icon} icon massive icon-left`}/>
      <h1>{text}</h1>
      <i className={`${icon} icon massive icon-right`}/>
    </div>
  )
}

export default SeasonDisplay;
