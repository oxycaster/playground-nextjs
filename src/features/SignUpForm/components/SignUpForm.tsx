import {Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Link, TextField, Typography} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from "react";
import {CognitoIdentityProviderClient, SignUpCommand} from "@aws-sdk/client-cognito-identity-provider";

const AWS_REGION = process.env.NEXT_PUBLIC_AWS_REGION
const COGNITO_APPLICATION_CLIENT_ID = process.env.NEXT_PUBLIC_COGNITO_APPLICATION_CLIENT_ID

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const client = new CognitoIdentityProviderClient({ region: AWS_REGION })
        const command = new SignUpCommand({
            ClientId: COGNITO_APPLICATION_CLIENT_ID,
            Username: email,
            Password: password,
        })

        try {
            const data = await client.send(command)
            console.log(data)

        } catch (err) {

        }

        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>

            <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                <LockOutlinedIcon/>
            </Avatar>

            <Typography component="h1" variant="h5">
                新規登録
            </Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="ログインID"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}/>

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="パスワード"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}/>

                <FormControlLabel
                    control={<Checkbox value="remember" color="primary"/>}
                    label="利用規約とプライバシーポリシーにご同意の上、確認画面へお進みください。"/>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}>確認メールの送信</Button>

                <Grid container>
                    <Grid item xs>
                        <Link href="features/SignInForm/components/SignUpForm#" variant="body2">
                            ログインID・パスワードを忘れた方はこちら
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="features/SignInForm/components/SignUpForm#" variant="body2">
                            {"新規登録はこちら"}
                        </Link>
                    </Grid>
                </Grid>

            </Box>
        </Box>
    )
}
export default SignUpForm;