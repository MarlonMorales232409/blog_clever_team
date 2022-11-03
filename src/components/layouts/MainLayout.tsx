import { FC } from "react"
import { MobileNavbar, Navbar } from "../ui"

interface Props {
  children: React.ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <nav className="hidden md:block">
        <Navbar />
      </nav>
      <nav className="block md:hidden">
        <MobileNavbar />
      </nav>
      <main>
        {
          children
        }
      </main>
      <footer>
        <h2>This is the footer</h2>
      </footer>
    </>

  )
}

