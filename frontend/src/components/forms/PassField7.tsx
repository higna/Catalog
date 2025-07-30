import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Controller } from 'react-hook-form';
import type { Control } from 'react-hook-form';
import { FormHelperText } from '@mui/material';

type labelProps = {
    label: string;
    name: string;
    control: Control<any>;
};
export default function PassField7({ label, name, control }: labelProps) {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { onChange, value },
                fieldState: { error },
                //formState,
            }) => (
                <FormControl variant="outlined" className={'myForm'}>
                    <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        onChange={onChange}
                        value={value}
                        error={!!error}
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label={
                                        showPassword ? 'hide the password' : 'display the password'
                                    }
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label={label}
                    />
                    <FormHelperText sx={{ color: "red" }}>
                        {error?.message}
                    </FormHelperText>
                </FormControl>
            )
            }
        />

    );
}
