import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../store/actions/user-action'
import * as Yup from 'yup'
import { Avatar, Backdrop, Button, Checkbox, CircularProgress, Container, FormControlLabel, Grid, Link, makeStyles, TextField, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

const styles = makeStyles(theme=>({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

const Login = (props) => {
    const classes=styles()
    const notifications = useSelector(state=>state.notifications)
    // const { auth } = useSelector(state=>state.users)
    const dispatch = useDispatch()
    const [showBackdrop, setShowBackdrop] = useState(false)

    const formik = useFormik({
        initialValues:{email:'ntphuong2603@gmail.com',password:"0987654321", rememberMe: false},
        validationSchema:Yup.object({
            email:Yup.string().required("Email is required").email("Email is invalid"),
            password:Yup.string().required("Password is required")
        }),
        onSubmit(values, {resetForm}){
            // console.log("Values:", values);
            dispatch(userLogin(values))
            setShowBackdrop(true);
        }
    })

    const errorHelper = (formik, values) => ({
        error: formik.errors[values] && formik.touched[values] ? true : false,
        helperText: formik.errors[values] && formik.touched[values] ? formik.errors[values] : null,
    })

    useEffect(()=>{
        if (notifications && notifications.success){
            setShowBackdrop(false);
            // if (auth){
                props.history.push('/dashboard')
            // } else {
            //     props.history.push('/')
            // }
        }
    },[notifications, props.history])

    return(
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <form className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
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
                    control={<Checkbox color="primary" 
                        name="rememberMe"
                        value={formik.values.rememberMe}  
                        onChange={formik.handleChange}/>}
                    label="Remember me"
                />
                <Button
                    // type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    size="large"
                    // onSubmit={formik.handleSubmit}
                    onClick={formik.handleSubmit}
                >
                    Login
                </Button>
                {/* <Grid container>
                    <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                    </Grid>
                    <Grid item>
                    <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                    </Grid>
                </Grid> */}
            </form>
            </div>
            <Backdrop className={classes.backdrop} open={showBackdrop}>
                <CircularProgress color="secondary" />
            </Backdrop>
        </Container>
    )
}

export default Login