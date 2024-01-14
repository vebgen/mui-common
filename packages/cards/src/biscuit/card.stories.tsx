import { StoryFn, Meta } from '@storybook/react';
import { IntlProvider } from "react-intl";
import { Button, Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { red } from '@mui/material/colors';

import { Biscuit, BiscuitProps } from './card';


const storybookConfig: Meta<BiscuitProps> = {
    title: 'cards/biscuit/Biscuit',
    component: Biscuit,
    args: {
        title: "The Biscuit",
        children: <p>Biscuit</p>,
    },
}

export default storybookConfig;

const Template: StoryFn<BiscuitProps> = (args) => {
    return (
        <IntlProvider locale="en" onError={(err) => { }}>
            <Biscuit {...args} />
        </IntlProvider>
    );
}

export const Default: StoryFn<BiscuitProps> = Template.bind({});
Default.args = {};

export const WithSubtitle: StoryFn<BiscuitProps> = Template.bind({});
WithSubtitle.args = {
    subtitle: "The subtitle can be a little longer to see how it behaves",
};

export const WithIcon: StoryFn<BiscuitProps> = Template.bind({});
WithIcon.args = {
    headerIcon: <HomeIcon />,
};

export const WithAvatar: StoryFn<BiscuitProps> = Template.bind({});
WithAvatar.args = {
    headerIcon: (
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            RR
        </Avatar>
    ),
};

export const WithIconAndSubtitle: StoryFn<BiscuitProps> = Template.bind({});
WithIconAndSubtitle.args = {
    headerIcon: <HomeIcon />,
    subtitle: "The subtitle can be a little longer to see how it behaves",
};

export const LongTitle: StoryFn<BiscuitProps> = Template.bind({});
LongTitle.args = {
    title: "This is a very long title that should be visible",
};

export const ComponentTitle: StoryFn<BiscuitProps> = Template.bind({});
ComponentTitle.args = {
    title: <p>Component Title</p>,
};

export const WithOneAction: StoryFn<BiscuitProps> = Template.bind({});
WithOneAction.args = {
    actions: [
        <Button key="action-one">Action</Button>
    ],
};

export const WithMoreActions: StoryFn<BiscuitProps> = Template.bind({});
WithMoreActions.args = {
    actions: [
        <Button key="action-one">Action1</Button>,
        <Button key="action-two">Action2</Button>,
        <Button key="action-three">Action3</Button>,
        <Button key="action-four">Action4</Button>,
        <Button key="action-five">Action5</Button>,
        <Button key="action-six">Action6</Button>,
    ],
};
