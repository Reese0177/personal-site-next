import Header from "./Header";
import Head from 'next/head';
import React from 'react';

const Layout = React.forwardRef((props, ref) => (
    <div>
        <Head>
            <title>Reese Gosain</title>
        </Head>
        <Header ref={ref}/>
        <div className="container">
            {props.children}
        </div>
    </div>
));

export default Layout;