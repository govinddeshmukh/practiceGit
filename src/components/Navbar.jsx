import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div style={{width:"100%", height:"4rem", background:"wheat", display:"flex", alignItems:"center",justifyContent:"space-around",padding:"0 2rem"}}>
        <div>
            <h1>Logo</h1>
        </div>
        <nav>
            <ul style={{display:"flex",width:"10rem",height:"100%",alignItems:"center",justifyContent:"space-between"}}>
                <Link style={{textDecoration:"none",color:"black"}} to='/'><li style={{listStyle:"none",textDecoration:"none"}}>Home</li></Link>
                <Link style={{textDecoration:"none",color:"black"}} to='/contact'><li style={{listStyle:"none",textDecoration:"none"}}>Contact</li></Link>
            </ul>
        </nav>
        <div>
            <button style={{padding:".5rem 1.5rem"}}>Login</button>

        </div>
    </div>
  )
}
