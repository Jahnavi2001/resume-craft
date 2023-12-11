import { Link } from "react-router-dom"
import Header from "./Header"

const SelectTemplate = () => {
  return (
    <div>
      <Header/>
      <Link to='/editor/personal-info'>SelectTemplate</Link>
    </div>
  )
}

export default SelectTemplate