type Props = {
    children?: React.ReactNode;
    home?: boolean;
};

const HelloWorldLayout = ({children}: Props) => {
    return(
        <>
            <main>{children}</main>
        </>
    )
};

export default HelloWorldLayout;