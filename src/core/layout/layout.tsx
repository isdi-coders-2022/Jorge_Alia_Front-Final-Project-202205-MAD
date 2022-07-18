import { ReactElement } from 'react';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

export function Layout({ children }: { children: ReactElement }) {
    return (
        <>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
}
