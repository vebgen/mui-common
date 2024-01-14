import { FC, ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import Card, { CardProps } from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


// The style for the card.
const sxCard = {
    maxWidth: 345,
    width: 345,
    p: 1,
    m: 1,
};


/**
 * Properties expected by the {@link Biscuit} component.
 */
export interface BiscuitProps extends Omit<CardProps, "title"> {
    /**
     * The title of this card.
     *
     * If this is a string it will be translated using the `react-intl`
     * library. If it is a component it will be rendered as is;
     * make sure to wrap the string that you don't want translated
     * with a fragment.
     */
    title: ReactNode;

    /**
     * The subtitle of this card.
     *
     * If this is a string it will be translated using the `react-intl`
     * library. If it is a component it will be rendered as is;
     * make sure to wrap the string that you don't want translated
     * with a fragment.
     */
    subtitle?: ReactNode;

    /**
     * The icon to show in the header.
     */
    headerIcon?: ReactNode;

    /**
     * The icon to show in the header.
     */
    headerAction?: ReactNode;

    /**
     * Components that will be rendered at the bottom of the card.
     */
    actions?: ReactNode[];

    /**
     * Components that will be rendered inside the card.
     */
    children?: ReactNode;
}


/**
 * The simple base card.
 *
 * The card has a fixed width of 345 pixels, is raised and consists
 * of the standard MUI card components: header, content (the children
 * are placed there) and actions.
 *
 * The header has an optional icon to the left and an optional action
 * to the right. The title and subtitle can be a string or a component.
 * The string will be translated using the `react-intl` library.
 */
export const Biscuit: FC<BiscuitProps> = ({
    title,
    subtitle,
    headerIcon,
    headerAction,
    actions,
    children,
    ...rest
}) => (
    <Card
        sx={sxCard}
        raised
        {...rest}
    >
        <CardHeader
            title={
                (typeof title === 'string' && title) ? (
                    <FormattedMessage id={title} />
                ) : (
                    title ?? ''
                )
            }
            subheader={
                (typeof subtitle === 'string' && subtitle) ? (
                    <FormattedMessage id={subtitle} />
                ) : (
                    subtitle ?? undefined
                )
            }
            avatar={headerIcon}
            action={headerAction}
        />

        <CardContent>
            {children}
        </CardContent>

        {(actions && actions.length > 0) ? (
            <CardActions>
                {actions}
            </CardActions>
        ) : null}
    </Card>
);
