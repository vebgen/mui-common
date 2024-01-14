import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SyncIcon from '@mui/icons-material/Sync';

import { RotatingBtn, RotatingBtnProps } from './rotating';


const storybookConfig: Meta<RotatingBtnProps> = {
    component: RotatingBtn,
    title: 'buttons/RotatingBtn',
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
    <RotatingBtn {...args} startIcon={<SyncIcon/>}>
        A Button
    </RotatingBtn>
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
