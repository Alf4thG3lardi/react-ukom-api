import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div class='p-2' style={{height:'100vh', background:'rgb(40,40,40)'}}>
        <p class='h2 text-white'>Admin name</p>
        <hr class='border-white mb-5'/>
        <ul>
          <li class='mb-3'>
            <Link to='/clientlist' class='h4 text-white text-decoration-none'>User list</Link>
          </li>
          <li class='mb-3'>
            <Link to='/projectlist' class='h4 text-white text-decoration-none'>Project list</Link>
          </li>
          <li class='mb-3'>
            <Link to='/tasklist' class='h4 text-white text-decoration-none' >Task list</Link>
          </li>
        </ul>

    </div>
  )
}

export default Sidebar