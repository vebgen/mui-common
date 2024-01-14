import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { ReloadIconBtn, ReloadIconBtnProps } from './reload';


const storybookConfig: Meta<ReloadIconBtnProps> = {
    component: ReloadIconBtn,
    title: 'icon-btns/ReloadIconBtn',
    args: {
        loading: false,
        refetch: () => { alert("refetch"); },
    },
};

export default storybookConfig;


/**
 * Common component rendering.
 */
const Template: StoryFn<ReloadIconBtnProps> = (args) => (
    <ReloadIconBtn {...args} />
);


/**
 * The default story shows the button.
 */
export const Default: StoryFn<ReloadIconBtnProps> = Template.bind({});
Default.args = {};


/**
 * The default story shows the button.
 */
export const WhileLoading: StoryFn<ReloadIconBtnProps> = Template.bind({});
WhileLoading.args = {
    loading: true,
};
