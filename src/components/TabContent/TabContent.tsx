import * as React from 'react';
import { Card } from '../Card';
import { v4 as uuidv4 } from 'uuid';
import { CardModel } from '../../models/CardModel';
import { useTheme } from 'react-jss';
import useStyles from './TabContent.styles';

type TabContentProps = {
    list: Array<CardModel>
}

const TabContent: React.FC<TabContentProps> = ({ list }) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <div className={classes.tabContent}>
            {
                list.map(item => {
                    return (
                        <Card key={uuidv4()} item={item}/>
                    )
                }) 
            }
        </div>
    )
}

export { TabContent };