import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { IconButtonProps } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import { BlurredIconBtn } from './blurred';


const storybookConfig: Meta<IconButtonProps> = {
    component: BlurredIconBtn,
    title: 'icon-btns/BlurredIconBtn',
    args: {
        children: <FormatListBulletedIcon />,
    },
};

export default storybookConfig;


/**
 * Common component rendering.
 */
const Template: StoryFn<IconButtonProps> = (args: IconButtonProps) => (
    <BlurredIconBtn {...args} />
)


/**
 * The default story shows the button.
 */
export const Default: StoryFn<IconButtonProps> = Template.bind({});
Default.args = {};
