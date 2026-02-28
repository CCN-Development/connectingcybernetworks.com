import Footer from '@/layout/Footer';
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
            <Footer />
        </div>
    )
}

export default MainLayout