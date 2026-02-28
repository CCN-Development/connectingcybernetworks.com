import { TooltipProvider } from '@/components/ui/tooltip';
import PrivacyContext from '@/context/PrivacyContext';
import { ThemeProvider } from '@/context/ThemeProvider';
import React from 'react'
type Props = {
    children: React.ReactNode;
}

function Providers({ children }: Props) {
    return (
        <>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                <PrivacyContext>
                    <TooltipProvider>
                        {children}
                    </TooltipProvider>
                </PrivacyContext>
            </ThemeProvider>
        </>
    )
}

export default Providers