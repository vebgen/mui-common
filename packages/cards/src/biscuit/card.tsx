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
     * If this is a string it will be considered a translation key and will be
     * translated. Otherwise it is rendered as-is.
     */
    title: ReactNode;

    /**
     * The subtitle of this card.
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
                    <FormattedMessage
                        id={subtitle}
                        description={`Card subtitle`}
                        defaultMessage={subtitle}
                    />
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
