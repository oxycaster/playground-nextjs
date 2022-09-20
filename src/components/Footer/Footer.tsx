import {memo} from "react";
import {Link} from "@mui/material";
import Image from 'next/image'

const Footer = memo(() => {
    return (
        <footer>
            <Link
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer">
                Powered by{' '}
                <span>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
                </span>
            </Link>
        </footer>
    )
})

export default Footer