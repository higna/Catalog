//import * as React from 'react';
import Button from '@mui/material/Button';

type labelProps = {
    label: string;
    type?: "button" | "submit" | "reset";
};

export default function Button7({ label,type }: labelProps) {
    return (
        <Button type={type} variant="contained" className={"myButton"}>
            {label}
        </Button>
    );
}