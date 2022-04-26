import Header from "./Header";
import Footer from "./Footer";
import Head from 'next/head';
import React from 'react';
import { useState, useEffect, useRef } from 'react';

const Layout = React.forwardRef((props, ref) => {
    const [height, setHeight] = useState(0)

    useEffect(() => {
        setHeight(ref.current.clientHeight)
    })
    return (
        <div>
            <Head>
                <title>Reese Gosain</title>
            </Head>
            <Header ref={ref} />
            <div className="container">
                {props.children}
            </div>
            <Footer height={height}/>
        </div>
    );
});

export default Layout;