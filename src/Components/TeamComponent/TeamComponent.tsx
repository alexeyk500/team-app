import React from 'react';
import classes from './TeamComponent.module.css';
import { Text } from '@consta/uikit/Text';
import TeamHeadersSection from './TeamHeadersSection/TeamHeadersSection';

const TeamComponent: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        <Text size="4xl" weight="bold" className={classes.title}>
          {`Команда`}
        </Text>
        <TeamHeadersSection />
      </div>
    </div>
  );
};

export default TeamComponent;
