import React from 'react';
import { ProgressBar } from 'react-bootstrap';

function BarOfProgress(props) {
  return (
    <ProgressBar now={props.progress}/>
  )
}

export default BarOfProgress;
