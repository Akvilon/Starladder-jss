import React, { useState } from 'react';
import { Header } from './Header';
import { Tabs } from './Tabs';
import { TabContent } from './TabContent';
import { matchesList, battlesList } from '../data';
import { CardModel } from '../models/CardModel';
import { useTheme } from 'react-jss';
import useStyles from './App.styles';

export type TabsInfo = {
  title: string,
  content: Array<CardModel>
}

const App = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabsInfo, setTabsInfo] = useState([
    {
      title: 'matches',
      content: matchesList
    },
    {
      title: 'battles',
      content: battlesList
    },
  ])


  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  }

  const activeItem = tabsInfo[activeTabIndex];
  return (
    <div className="wrapper">
      <Header>
        <Tabs
          activeTabIndex={activeTabIndex}
          info={tabsInfo}
          handleTabClick={handleTabClick}
        />
      </Header>
      <main className="main">
        <TabContent list={activeItem.content} />
      </main>
    </div>
  );
}

export { App };
