import React from 'react'
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, TextField, Typography } from '@material-ui/core'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { userLogin } from '../../store/actions/user-action'

const LoginDialog = (props) => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues:{email:'ntphuong2603@gmail.com',password:"0987654321", rememberMe: false},
        validationSchema:Yup.object({
            email:Yup.string().required("Email is required").email("Email is invalid"),
            password:Yup.string().required("Password is required")
        }),
        onSubmit(values, {resetForm}){
            // console.log("Values:",values);
            dispatch(userLogin(values))
            props.setOpenDialog(!props.openDialog)
            props.setShowBackdrop(true);
        }
    })

    const errorHelper = (formik, values) => ({
        error: formik.errors[values] && formik.touched[values] ? true : false,
        helperText: formik.errors[values] && formik.touched[values] ? formik.errors[values] : null,
    })

    return(
        <Dialog open={props.openDialog} onClose={()=>{props.setOpenDialog(!props.openDialog)}} maxWidth="sm">
            <DialogTitle onClose={()=>{props.setOpenDialog(!props.openDialog)}}>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
            </DialogTitle>
            <DialogContent>
                <TextField
                    variant="outlined"
                    margin="normal"
                    // width="xs"
                    fullWidth
                    label="Email"
                    name="email"
                    {...formik.getFieldProps('email')}
                    {...errorHelper(formik,'email')}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    {...formik.getFieldProps('password')}
                    {...errorHelper(formik,'password')}
                />
                <FormControlLabel
                    label="Remember me"
                    control={<Checkbox color="primary" 
                    name="rememberMe"
                    value={formik.values.rememberMe}  
                    onChange={formik.handleChange}/>}
                />
            </DialogContent>
            <DialogActions>
                <Button fullWidth size="large" onClick={formik.handleSubmit} color="secondary" variant="contained">
                    Login
                </Button>
                <Button fullWidth size="large" onClick={()=>{props.setOpenDialog(!props.openDialog)}} color="primary" variant="outlined">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default LoginDialog