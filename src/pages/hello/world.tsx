import type {NextPageWithLayout} from "../_app";
import HelloWorldLayout from "../../components/layouts/HelloWorldLayout";
import {Button} from "@mui/material";


const world: NextPageWithLayout = () => {
    return (
        <>
            <h1>hello, world.</h1>
            <Button variant="contained">Button</Button>
        </>
    )
};

world.getLayout = (page) => {
    return <HelloWorldLayout>{page}</HelloWorldLayout>
};

export default world;
