//import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import type { Control } from 'react-hook-form';
import '../../App.css';

type labelProps = {
    label: string;
    name: string;
    control: Control<any>;
};
export default function TextField7({ label, name, control }: labelProps) {
    return (

        <Controller
            name={name}
            control={control}
            render={({
                field: { onChange, value },
                fieldState: { error },
                //formState,
            }) => (
                <TextField
                    id="outlined-basic"
                    onChange={onChange}
                    value={value}
                    label={label}
                    variant="outlined"
                    className={'myForm'}
                    error={!!error}
                    helperText={error?.message}
                />
            )
            }
        />

    );
}