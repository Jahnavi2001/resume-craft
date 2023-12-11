import { Outlet } from "react-router-dom"
import Header from "./Header"

const Editor = () => {
  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  )
}
export default Editor