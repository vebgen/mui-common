import { FC, useCallback, MouseEvent, ReactNode } from 'react';
import { IconButton, IconButtonProps, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useIntl } from 'react-intl';
import DeleteIcon from '@mui/icons-material/Delete';


/**
 * An icon button with a blurred icon that gets red when the mouse hovers.
 */
export const DeleteIconBtnShell: FC<IconButtonProps> = styled(IconButton)(
    ({ theme }) => ({
        color: theme.palette.grey[400],
        ':hover': {
            color: theme.palette.error.main,
        },
    })
);


/**
 * Props for the DeleteIconBtn component.
 */
export interface DeleteIconBtnProps<T = any> extends IconButtonProps {
    /**
     * Called when the user clicks the button.
     *
     * If not provided the control will render `null`.
     */
    onRemove?: (payload?: T) => void;

    /**
     * The payload that will be provided to the onRemove callback.
     */
    payload?: T;

    /**
     * Optional tooltip.
     *
     * If this is a string it will be translated using the `intl` context.
     * If this is a ReactNode it will be rendered as is.
     */
    tooltip?: ReactNode;
}


/**
 * An icon button with a blurred icon that gets red when the mouse hovers.
 *
 * The `onRemove()` callback will receive as sole argument the `payload` prop.
 * Note that you can make this button disappear by not providing the `onRemove`
 * prop.
 */
export function DeleteIconBtn<T = any>({
    onRemove,
    payload,
    tooltip,
    ...rest
}: DeleteIconBtnProps<T>) {
    // Translation provider.
    const t = useIntl();

    // The callback used by the button.
    const onRemoveClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        if (onRemove) {
            onRemove(payload);
        }
        e.preventDefault();
        e.stopPropagation();
    }, [onRemove, payload]);

    if (tooltip && typeof tooltip === "string") {
        tooltip = t.formatMessage({ id: tooltip, });
    }

    // Hide the button if no callback is provided.
    if (!onRemove) {
        return null;
    }

    return (
        <DeleteIconBtnShell
            aria-label={typeof tooltip === "string" ? tooltip : undefined}
            onClick={onRemoveClick}
            {...rest}
        >
            {tooltip ? (
                <Tooltip
                    title={tooltip}
                    enterDelay={1000}
                >
                    <DeleteIcon />
                </Tooltip>
            ) : <DeleteIcon />}
        </DeleteIconBtnShell>
    );
}
