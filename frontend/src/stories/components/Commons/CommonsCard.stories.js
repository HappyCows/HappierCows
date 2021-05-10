import React from 'react';

import CommonsCard from "main/components/Commons/CommonsCard";

export default {
    title: 'components/Commons/CommonsCard', 
    component: CommonsCard
};

const Template = (args) => {
    return (
        <CommonsCard {...args} />
    )
};

const c = {
    id: 5,
    name: 'Seths Common'
}

export const nullButton = Template.bind({});
nullButton.args = {
    buttonText: null,
    commons: c
};

export const textButton = Template.bind({});
textButton.args = {
    buttonText: "Join",
    commons: c
};
