import { ReactElement } from 'react';
import { aMenuItems } from '../models/menu.model';
import { Footer } from './footer/footer';
import { Header } from './header/header';

export function Layout({
    options,
    children,
}: {
    options: aMenuItems;
    children: ReactElement;
}) {
    return (
        <>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
}
