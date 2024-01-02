import { useRouteError } from "react-router-dom";




export const Page404 = () => {

    const error: any = useRouteError();

    return (
        <section>
            <p>We could not find the address. Please ensure the URL is correct</p>
            <i>{error.statusText || error.message}</i>
        </section>
    )
}