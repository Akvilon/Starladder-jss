import * as React from 'react';
import { useState } from 'react';
import { Button } from '../../utils/Button';
import { TabsInfo } from '../App';
import { v4 as uuidv4 } from 'uuid';

type TabsProps = {
    activeTabIndex: number,
    info: Array<TabsInfo>,
    handleTabClick: (index: number) => void
}
const Tabs: React.FC<TabsProps> = ({ activeTabIndex, info, handleTabClick }) => {


    return (
        <>
            {
                info.map(({ title }, index) => {
                    const isSelected = activeTabIndex === index;
                    return (
                        <Button
                            key={uuidv4()}
                            type="button"
                            title={title}
                            index={index}
                            isSelected={isSelected}
                            handleTabClick={handleTabClick}
                        />
                    )

                })
            }
        </>
    )
}

export { Tabs };