import React, { PropsWithChildren } from 'react'

interface PageProps {
    title?: string;
    fullWidth?: boolean;
}

function Page({ title, fullWidth, children }: PropsWithChildren<PageProps>) {
    const baseClassNames = "px-5 py-8"
    const notFullWidthClassNames = "container mx-auto  max-w-screen-md"

    const className = baseClassNames + (!fullWidth ? " " + notFullWidthClassNames : "");



  return (
    <main className={className}> 
    {
        title && <h1 className='text-3xl font-bold mb-10'>{title}</h1>
    }
    {children}   
    </main>
  )
}

export default Page