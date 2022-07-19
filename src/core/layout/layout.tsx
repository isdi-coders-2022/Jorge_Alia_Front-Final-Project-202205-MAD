import React from 'react';
import { ReactElement } from 'react';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

export function Layout({ children }: { children: ReactElement }) {
    const template = (
        <>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
    return template;
}

export default Layout;
