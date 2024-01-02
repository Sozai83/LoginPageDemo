import { memo, FC } from 'react';
import { Outlet } from 'react-router-dom';

type Home = {
}

export const Home: FC<Home> = memo(() => {
    return (
        <section>
            <p>Home</p>
            <Outlet />
        </section>
    )
})