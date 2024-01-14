import { StyledComponent } from '@emotion/styled';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';


/**
 * Properties expected by the RotatingBtn control.
 */
export interface RotatingBtnProps extends ButtonProps {
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
export const RotatingBtn: StyledComponent<RotatingBtnProps> = styled(
    Button, {
    shouldForwardProp: (propName) =>
        propName !== 'active' && propName !== 'duration',
})<RotatingBtnProps>(({
    active,
    duration = 0.5
}) => ({
    "& svg": {
        '@keyframes spin': {
            '0%': {
                transform: 'rotate(0deg)',
            },
            '100%': {
                transform: 'rotate(360deg)',
            },
        },
        animation: active ? `spin ${duration}s linear infinite` : undefined,
    }
}));
