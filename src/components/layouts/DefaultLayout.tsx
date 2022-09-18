import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import React from "react";

type Props = {
    children?: React.ReactNode;
    home?: boolean;
};

const DefaultLayout = ({children}: Props) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
};

export default DefaultLayout;
