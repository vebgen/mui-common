import { FC } from 'react';
import SyncIcon from '@mui/icons-material/Sync';

import { RotatingIconBtn } from './rotating';
import type { RotatingBtnProps } from './rotating';


/**
 * Properties expected by the ReloadBase component.
 */
export interface ReloadIconBtnProps extends
    Omit<RotatingBtnProps, "active" | "children" | "onClick" | "disabled"> {

    /**
     * If true the icon will be spinning.
     */
    loading?: boolean;

    /**
     * The callback fired when the component is clicked.
     */
    refetch: () => void;
}


/**
 * A button that can trigger a refresh.
 *
 * The icon is animated so that it spins when the loading property is set.
 */
export const ReloadIconBtn: FC<ReloadIconBtnProps> = ({
    loading = false,
    refetch,
    ...rest
}) => (
    <RotatingIconBtn
        active={loading}
        disabled={loading}
        onClick={refetch}
        {...rest}
    >
        <SyncIcon />
    </RotatingIconBtn>
);

