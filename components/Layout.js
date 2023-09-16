import Header from "./Header";
import Footer from "./Footer";
import Head from 'next/head';
import React from 'react';
import { useState, useEffect } from 'react';

const Layout = React.forwardRef(({children, activePage}, ref) => {
    const [height, setHeight] = useState(0)

    useEffect(() => {
        setHeight(ref.current.clientHeight)
    }, [ref])
    return (
        <div>
            <Head>
                <title>Reese Gosain</title>
                <meta name="description" content="Reese Gosain's Personal Website"/>
            </Head>
            <Header ref={ref} activePage={activePage} />
            <div className="container">
                {children}
            </div>
            <Footer height={height}/>
        </div>
    );
});
Layout.displayName = "Layout";
export default Layout;