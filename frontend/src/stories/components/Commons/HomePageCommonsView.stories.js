import React from 'react';

import HomePageCommonsView from "main/components/Commons/HomePageCommonsView";
import commonsFixtures from "fixtures/commonsFixtures"

export default {
    title: 'components/Commons/HomePageCommonsView', 
    component: HomePageCommonsView
};

const Template = (args) => {
    return (
        <HomePageCommonsView {...args} />
    )
};

export const nullButton = Template.bind({});
nullButton.args = {
    commonsJoined: commonsFixtures.threeCommons,
    commonsNotJoined: commonsFixtures.threeCommons
};


