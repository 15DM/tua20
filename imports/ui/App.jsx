import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

export const App = () => (
  <div className={"container"}>
    <h1>Welcome to Meteor!</h1>
    <Hello/>
    <Info/>
  </div>
);
