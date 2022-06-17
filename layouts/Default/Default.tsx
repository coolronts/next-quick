import { Footer, Header, Navbar } from '../../units'
import { cloneElement, useLayoutEffect, useState } from 'react'

type DefaultProps = {
    children: React.ReactNode;
}

export const Default: React.FC<DefaultProps> = ({ children }) => {
    const [isParentLoading, setIsParentLoading] = useState(true);
    
    const clone = cloneElement(children as React.ReactElement, { handleParentLoading: setIsParentLoading });
    useLayoutEffect(() => { }, [isParentLoading]);
    return (
        <>
            <Header />
            <Navbar />
            {clone}
            {!isParentLoading && <Footer />}
        </>
    )
}
