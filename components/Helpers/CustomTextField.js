
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    formControl: {
        marginTop: theme.spacing(1),
        width: '100%'
    }
}));

const useOutlinedInputStyles = makeStyles(theme => ({
    root: {
        "&$focused $notchedOutline": {
            borderColor: "#0070f3"
        }
    },
    focused: {},
    notchedOutline: {}
}));

const CustomTextField = ({
    required = false,
    label = undefined,
    name = undefined,
    type = "text",
    autoFocus = false,
    multiline = false,
    rows = 1,
    error = false,
    value = '',
    onChange = (e) => { }
}) => {
    const classes = useStyles();
    const outlinedInputClasses = useOutlinedInputStyles();
    const inputLabel = React.useRef(null);

    return (
        <FormControl
            variant="outlined"
            className={classes.formControl}
            required={required}
        >
            <InputLabel ref={inputLabel} htmlFor={name}>
                {label}
            </InputLabel>
            <OutlinedInput
                variant="outlined"
                id={name}
                label={label}
                type={type}
                name={name}
                classes={outlinedInputClasses}
                autoFocus={autoFocus}
                multiline={multiline}
                rows={rows}
                onChange={(e) => onChange(e)}
                error={error}
                value={value}
            />
        </FormControl>
    );
}

export default CustomTextField;
