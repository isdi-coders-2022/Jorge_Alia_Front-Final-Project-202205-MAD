import { ReactElement } from 'react';
import { aMenuItems } from '../models/menu.model';

export function Layout({
    options,
    children,
}: {
    options: aMenuItems;
    children: ReactElement;
}) {
    return (
        <>
            {/* <Header options={options}></Header> */}
            <main>{children}</main>
            {/* <Footer></Footer> */}
        </>
    );
}
