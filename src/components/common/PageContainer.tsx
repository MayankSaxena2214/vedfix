import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface PageContainerProps{
    children:ReactNode,
    styles?:string
}
const PageContainer = ({children,styles}:PageContainerProps) => {
  return (
    <div className={
        cn(
            `px-30 py-3.5`,
            styles
        )
    }>
      {children}
    </div>
  )
}

export default PageContainer
