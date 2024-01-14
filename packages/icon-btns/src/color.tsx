import { HTMLAttributes, MouseEvent, useState, useCallback } from 'react';
import { StyledComponent } from '@emotion/styled';
import { ColorResult, SketchPicker } from 'react-color';
import { styled, IconButton, Popover, PopoverOrigin } from '@mui/material';

/**
 * A simple div that presents a color.
 */
export const ColorDiv: StyledComponent<HTMLAttributes<HTMLDivElement>> = styled(
    'div', {
    shouldForwardProp: (p) => p !== 'color',
})(({ color }) => ({
    width: '16px',
    height: '16px',
    backgroundColor: color,
}));
import {  } from 'react';
import {  } from '@mui/material';

import { byteToHex } from '@advaita/alchepy.base';

const anchorOrigin: PopoverOrigin = {
    vertical: 'bottom',
    horizontal: 'center',
};

const transformOrigin: PopoverOrigin = {
    vertical: 'top',
    horizontal: 'center',
};

/**
 * The properties expected by the PickColorBtn component.
 */
export interface PickColorBtnProps {
    /// Current color.
    color: string;

    /// The callback to trigger whe the user changes the color.
    setColor: (value: string) => void;

    disableAlpha?: boolean;
}

/**
 * An icon button that allows picking a color.
 */
export const PickColorBtn = ({
    color,
    setColor,
    disableAlpha = false,
}: PickColorBtnProps) => {
    // The reference element where we attach the popup.
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    // The user wants to change the color.
    const onClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget);
        e.preventDefault();
        e.stopPropagation();
    }, []);

    // The user closed the popup.
    const onClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

    // The user changed the color.
    const onChange = useCallback(
        (value: ColorResult) => {
            if (disableAlpha) {
                setColor(value.hex);
            } else {
                setColor(
                    `#${
                        byteToHex(value.rgb.r)
                    }${
                        byteToHex(value.rgb.g)
                    }${
                        byteToHex(value.rgb.b)
                    }${
                        byteToHex(value.rgb.a ? (Math.round(value.rgb.a * 255)) : 255)
                    }`
                );
            }
        },
        [setColor, disableAlpha]
    );

    // Opened or closed based on presence/absence of anchor.
    const open = Boolean(anchorEl);

    return (
        <>
            <IconButton onClick={onClick}>
                <ColorDiv color={color} />
            </IconButton>
            <Popover
                open={open}
                onClose={onClose}
                anchorEl={anchorEl}
                anchorOrigin={anchorOrigin}
                transformOrigin={transformOrigin}
            >
                <SketchPicker
                    color={color}
                    onChange={onChange}
                    disableAlpha={disableAlpha}
                />
            </Popover>
        </>
    );
};

export default PickColorBtn;
