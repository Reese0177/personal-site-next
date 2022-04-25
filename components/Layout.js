import Header from "./Header";
import Head from 'next/head';

const Layout = (props) => (
    <div>
        <Head>
            <title>Reese Gosain</title>
        </Head>
        <Header />
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout;