import React from 'react';
import CommonsCard from "main/components/Commons/CommonsCard";
import commonsFixtures from "fixtures/commonsFixtures";

export default {
    title: 'components/Commons/CommonsCard', 
    component: CommonsCard
};

const Template = (args) => {
    return (
        <CommonsCard {...args} />
    )
};

export const nullButton = Template.bind({});
nullButton.args = {
    buttonText: null,
    commons: commonsFixtures.threeCommons[0]
};

export const textButton = Template.bind({});
textButton.args = {
    buttonText: "Join",
    commons: commonsFixtures.threeCommons[0]
};
