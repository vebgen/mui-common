import { StyledComponent } from '@emotion/styled';
import { IconButton, IconButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';


/**
 * Properties expected by the RotatingBtn control.
 */
export interface RotatingBtnProps extends IconButtonProps {
    /**
     * Should the icon be rotating?
     */
    active: boolean;

    /**
     * The time it takes to do a complete revolution.
     */
    duration?: number;
}


/**
 * A button whose icon rotates when the active property is set.
 */
export const RotatingIconBtn: StyledComponent<RotatingBtnProps> = styled(
    IconButton, {
    shouldForwardProp: (propName) =>
        propName !== 'active' && propName !== 'duration',
})<RotatingBtnProps>(({
    active,
    duration = 0.5
}) => ({
    '@keyframes spin': {
        '0%': {
            transform: 'rotate(360deg)',
        },
        '100%': {
            transform: 'rotate(0deg)',
        },
    },
    animation: active ? `spin ${duration}s linear infinite` : undefined,
}));
