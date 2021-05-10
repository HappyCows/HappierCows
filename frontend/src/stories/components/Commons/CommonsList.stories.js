import React from 'react';

import CommonsList from "main/components/Commons/CommonsList";

export default {
    title: 'components/Commons/CommonsList', 
    component: CommonsList
};

const Template = (args) => {
    return (
        <CommonsList {...args} />
    )
};

const commons = [
    {
      id: 5,
      name: 'Seths Common'
    },
    {
      id: 4,
      name: 'Phils Common'
    },
    {
      id: 18,
      name: 'Kevins Common'
    },
  ];

export const nullButton = Template.bind({});
nullButton.args = {
    buttonText: null,
    commonList: commons
};

export const textButton = Template.bind({});
textButton.args = {
    buttonText: "Join",
    commonList: commons
};
