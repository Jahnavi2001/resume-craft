import { Link } from "react-router-dom"
import Header from "./Header"

const ChooseTemplate = () => {
  return (
    <div>
      <Header/>
      <Link to='/editor/personal-info'>ChooseTemplate</Link>
    </div>
  )
}

export default ChooseTemplate