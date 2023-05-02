import React from 'react';
import classes from './TeamHeaderCard.module.css';
import { Card } from '@consta/uikit/Card';

type PropsType = {
  verticalTitle: string;
  userName: string;
  userPosition: string;
  userAvatarFile: string;
};

const TeamHeaderCard: React.FC<PropsType> = ({ verticalTitle, userName, userPosition, userAvatarFile }) => {
  const imgUrl = new URL(`/src/img/avatars/${userAvatarFile}`, import.meta.url).href;

  return (
    <Card verticalSpace="m" horizontalSpace="m" shadow={false} className={classes.container}>
      <div className={classes.leftColumn}>
        {userAvatarFile && <img src={imgUrl} className={classes.avatar} alt="avatar" />}
      </div>
      <div className={classes.rightColumn}>
        <div className={classes.verticalContainer}>
          <div className={classes.verticalElement}>{verticalTitle}</div>
        </div>
        <div className={classes.userName}>{userName}</div>
        <div className={classes.userPosition}>{userPosition}</div>
      </div>
    </Card>
  );
};

export default TeamHeaderCard;
