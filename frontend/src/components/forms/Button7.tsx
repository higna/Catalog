//import * as React from 'react';
import Button from '@mui/material/Button';

type labelProps = {
    label: string;
};

export default function Button7({ label }: labelProps) {
    return (
        <Button variant="contained">{label}</Button>
    );
}
