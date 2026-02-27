import Header from '@/layout/Header';
import React from 'react'


function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header />
            {children}
            {children}
            {children}
        </div>
    )
}

export default MainLayout