import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {RouteComponentProps} from "@reach/router";
import {APP_ROUTES} from "../../router";
import auth from "../../core/auth/auth.service";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Salsamentaria Avileña
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "white",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Register = (props: RouteComponentProps) => {
    const classes = useStyles();
    const [mail,setMail] = useState("");
    const [username,setUsername] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [allowExtraMail, setAllowExtraMail] = useState(false);
    const register = async() => {
        const registered = await auth.register({username,password,address,allowExtraMail, mail});
        localStorage.setItem("avilena_at", registered.data.signup.authorization);
    };
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <img src="avilena-icon.png" />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Crear una nueva Cuenta
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="mail"
                                name="mail"
                                variant="outlined"
                                required
                                fullWidth
                                id="mail"
                                label="Correo"
                                value={mail}
                                onChange={(e) => setMail(e.target.value)}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="username"
                                name="username"
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="Tus Nombres"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="address"
                                label="Dirección"
                                name="address"
                                autoComplete="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" checked={allowExtraMail} onChange={(e)=>setAllowExtraMail(e.target.checked)} color="primary" />}
                                label="Quiero recibir promociones, noticias y actualizaciones en mi correo"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={()=> {
                            register()
                        }}
                    >
                        Registrarme
                    </Button>
                    <Grid container justify="space-between">
                        <Grid item xs>
                            <Link href={APP_ROUTES.HOME} variant="body2">
                                Volver al Inicio
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href={APP_ROUTES.LOGIN} variant="body2">
                                Ya tienes una cuenta? Inicia Sesión
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
};

export default Register;
