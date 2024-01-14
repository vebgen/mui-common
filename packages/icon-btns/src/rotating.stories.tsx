import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import { RotatingIconBtn, RotatingBtnProps } from './rotating';


const storybookConfig: Meta<RotatingBtnProps> = {
    component: RotatingIconBtn,
    title: 'icon-btns/RotatingIconBtn',
    args: {
        active: false,
        duration: 0.5,
        children: <FormatListBulletedIcon />,
    },
};

export default storybookConfig;


/**
 * Common component rendering with a two-item menus.
 */
const Template: StoryFn<RotatingBtnProps> = (args) => (
    <RotatingIconBtn
        {...args}
    />
);


/**
 * The default story shows the button.
 */
export const Default: StoryFn<RotatingBtnProps> = Template.bind({});
Default.args = {};


/**
 * The default story shows the button.
 */
export const WithRotation: StoryFn<RotatingBtnProps> = Template.bind({});
WithRotation.args = {
    active: true,
};
