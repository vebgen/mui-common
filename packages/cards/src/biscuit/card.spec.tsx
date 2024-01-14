import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import {
    Default,
    WithSubtitle,
    WithIcon,
    WithAvatar,
    WithIconAndSubtitle,
    LongTitle,
    ComponentTitle,
    WithOneAction,
    WithMoreActions,
    default as storybookConfig,
} from './card.stories';


describe('Biscuit', () => {

    it("should render the default story", () => {
        render(<Default {...storybookConfig.args} {...Default.args as any} />);
        expect(screen.getByText("The Biscuit")).toBeInTheDocument();
    });

    it("should render the with subtitle story", () => {
        render(<Default {...storybookConfig.args} {...WithSubtitle.args as any} />);
        expect(screen.getByText(
            "The subtitle can be a little longer to see how it behaves"
        )).toBeInTheDocument();
    });

    it("should render the with icon story", () => {
        render(<Default {...storybookConfig.args} {...WithIcon.args as any} />);
        expect(screen.getByText("The Biscuit")).toBeInTheDocument();
    });

    it("should render the with avatar story", () => {
        render(<Default {...storybookConfig.args} {...WithAvatar.args as any} />);
        expect(screen.getByText("RR")).toBeInTheDocument();
    });

    it("should render the with icon and subtitle story", () => {
        render(<Default {...storybookConfig.args} {...WithIconAndSubtitle.args as any} />);
        expect(screen.getByText(
            "The subtitle can be a little longer to see how it behaves"
        )).toBeInTheDocument();
    });

    it("should render the long title story", () => {
        render(<Default {...storybookConfig.args} {...LongTitle.args as any} />);
        expect(screen.getByText(
            "This is a very long title that should be visible"
        )).toBeInTheDocument();
    });

    it("should render the component as title story", () => {
        render(<Default {...storybookConfig.args} {...ComponentTitle.args as any} />);
        expect(screen.getByText("Component Title")).toBeInTheDocument();
    });

    it("should render the component with an action", () => {
        render(<Default {...storybookConfig.args} {...WithOneAction.args as any} />);
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("should render the component as title story", () => {
        render(<Default {...storybookConfig.args} {...WithMoreActions.args as any} />);
        expect(screen.getByText("Action1")).toBeInTheDocument();
        expect(screen.getByText("Action2")).toBeInTheDocument();
        expect(screen.getByText("Action3")).toBeInTheDocument();
        expect(screen.getByText("Action4")).toBeInTheDocument();
        expect(screen.getByText("Action5")).toBeInTheDocument();
        expect(screen.getByText("Action6")).toBeInTheDocument();
    });

});
