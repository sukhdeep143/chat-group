// import React from 'react'

import { Link } from "react-router-dom"

function Login() {
  return (
    <div style={{ height: '100%', width: '100%', paddingTop: '20px', paddingBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Enter your chat id or code to enter</h1>
            <div className="input-group flex-nowrap">
                <input type="text" className="form-control" placeholder="Room code" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <Link to="/Chat" >
             <button type="button" className="btn btn-primary mt-3">Join now</button>
            </Link>
        </div>
  )
}

export default Login