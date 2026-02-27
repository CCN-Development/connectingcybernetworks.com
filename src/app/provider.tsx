import { TooltipProvider } from '@/components/ui/tooltip';
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
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >

                <TooltipProvider>
                    {children}
                </TooltipProvider>
            </ThemeProvider>
        </>
    )
}

export default Providers