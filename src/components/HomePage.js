import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div className='jumbotron'>
      <h1>React, Fulx and React Router for ultra-responsive web apps</h1>
      <Link to='about' className='btn btn-primary'>
        About
      </Link>
    </div>
  )
}

export default HomePage
