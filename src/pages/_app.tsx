import 'styles/globals.css'
import type {AppProps} from 'next/app'

import {NextPage} from "next";
import {ReactElement, ReactNode} from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>)
    return getLayout(<Component {...pageProps} />)
}

export default MyApp
