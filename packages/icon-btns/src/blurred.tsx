import { FC } from 'react';
import { IconButton, IconButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';


/**
 * An icon button with a blurred icon that becomes more apparent when the
 * mouse hovers over it.
 */
export const BlurredIconBtn: FC<IconButtonProps> = styled(IconButton)(
    ({ theme }) => ({
        color: theme.palette.grey[400],
        ':hover': {
            color: theme.palette.grey[800],
        },
    })
);
