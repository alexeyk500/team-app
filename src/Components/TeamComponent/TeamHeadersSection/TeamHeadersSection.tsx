import React from 'react';
import TeamHeaderCard from './TeamHeaderCard/TeamHeaderCard';
import classes from './TeamHeadersSection.module.css';

const TeamHeadersSection: React.FC = () => {
  return (
    <div className={classes.container}>
      <TeamHeaderCard
        verticalTitle={'Вертикаль БРД'}
        userName={'Ерофеев Александр Петрович'}
        userPosition={'Главный менеджер офиса\nуправления данными БРД и БПЛ и прочее'}
        userAvatarFile={'Styupan_AS.jpg'}
      />
      <TeamHeaderCard
        verticalTitle={'Вертикаль БРД'}
        userName={'Ерофеев Александр Петрович'}
        userPosition={'Главный менеджер офиса\nуправления данными БРД и БПЛ и прочее'}
        userAvatarFile={'Styupan_AS.jpg'}
      />
      <TeamHeaderCard
        verticalTitle={'Вертикаль БРД'}
        userName={'Ерофеев Александр Петрович'}
        userPosition={'Главный менеджер офиса\nуправления данными БРД и БПЛ и прочее'}
        userAvatarFile={'Styupan_AS.jpg'}
      />
      <TeamHeaderCard
        verticalTitle={'Вертикаль БРД'}
        userName={'Ерофеев Александр Петрович'}
        userPosition={'Главный менеджер офиса\nуправления данными БРД и БПЛ и прочее'}
        userAvatarFile={'Styupan_AS.jpg'}
      />
      <TeamHeaderCard
        verticalTitle={'Вертикаль БРД'}
        userName={'Ерофеев Александр Петрович'}
        userPosition={'Главный менеджер офиса\nуправления данными БРД и БПЛ и прочее'}
        userAvatarFile={'Styupan_AS.jpg'}
      />
    </div>
  );
};

export default TeamHeadersSection;
