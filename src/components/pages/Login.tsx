import { memo, FC } from 'react';

type Login = {
    test: any
}


export const Login: FC<Login> = memo((props) => {

    const { test } = props;

    return (
        <section>
            <p>Login</p>
            <p>{test}</p>
        </section>
    )
})