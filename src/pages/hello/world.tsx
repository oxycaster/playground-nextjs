import type {NextPageWithLayout} from "../_app";
import HelloWorldLayout from "../../components/layouts/HelloWorldLayout";


const world: NextPageWithLayout = () => {
    return <h1>hello, world.</h1>
};

world.getLayout = (page) => {
    return <HelloWorldLayout>{page}</HelloWorldLayout>
};

export default world;
