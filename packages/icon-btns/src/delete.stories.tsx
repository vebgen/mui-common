import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { IntlProvider } from "react-intl";

import { DeleteIconBtn } from './delete';
import type { DeleteIconBtnProps } from './delete';


const storybookConfig: Meta<DeleteIconBtnProps> = {
    component: DeleteIconBtn,
    title: 'icon-btns/DeleteIconBtn',
    args: {
        onRemove: () => {
            alert("Delete");
        },
        payload: {},
        tooltip: "Delete",
    },
};

export default storybookConfig;


/**
 * Common component rendering with an url and an icon.
 */
const Template: StoryFn<DeleteIconBtnProps> = (args) => (
    <IntlProvider locale="en" onError={(err) => { }}>
        <DeleteIconBtn
            {...args}
        />
    </IntlProvider>
);


/**
 * The default story shows the button.
 */
export const Default: StoryFn<DeleteIconBtnProps> = Template.bind({});
Default.args = {};


/**
 * No button when `onRemove()` is not set.
 */
export const NoButton: StoryFn<DeleteIconBtnProps> = Template.bind({});
NoButton.args = {
    onRemove: undefined,
};


/**
 * Shows the tooltip
 */
export const WithTooltip: StoryFn<DeleteIconBtnProps> = Template.bind({});
WithTooltip.args = {
    tooltip: "Delete this item",
};


/**
 * Shows the tooltip as a ReactNode.
 */
export const WithNodeTooltip: StoryFn<DeleteIconBtnProps> = Template.bind({});
WithNodeTooltip.args = {
    tooltip: <em>This is italic</em>,
};
