import React from 'react';
import AppHeader from './Components/AppHeader/AppHeader';
import classes from './App.module.css';
import TeamComponent from './Components/TeamComponent/TeamComponent';

const App: React.FC = () => {
  return (
    <div className={classes.container} data-testid="AppTestID">
      <AppHeader />
      <TeamComponent />
    </div>
  );
};

export default App;
