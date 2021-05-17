import React from 'react';
import CommonsList from "main/components/Commons/CommonsList";
import commonsFixtures from "fixtures/commonsFixtures";

export default {
    title: 'components/Commons/CommonsList', 
    component: CommonsList
};

const Template = (args) => {
    return (
        <CommonsList {...args} />
    )
};

export const nullButton = Template.bind({});
nullButton.args = {
    buttonText: null,
    commonList: commonsFixtures.threeCommons
};

export const textButton = Template.bind({});
textButton.args = {
    buttonText: "Join",
    commonList: commonsFixtures.threeCommons
};
