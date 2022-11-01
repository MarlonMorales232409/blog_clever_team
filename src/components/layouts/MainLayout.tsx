import { FC } from "react"
import {Navbar} from "../ui"

interface Props {
    children: React.ReactNode
}

export const MainLayout:FC<Props> = ({children}) => {
  return (
    <>
        <Navbar />
        {
            children
        }    
    </>

  )
}

