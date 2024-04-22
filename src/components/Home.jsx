// import React from 'react';
import { Link } from "react-router-dom";

function MyForm() {
    return (
        <div style={{ height: '100%', width: '100%', paddingTop: '20px', paddingBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
            <h1>Enter Your information</h1>
            <div className="input-group flex-nowrap">
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <Link to="/login" >
                <button type="button" className="btn btn-primary mt-3">Join to login</button>
            </Link>
        </div>
    );
}

export default MyForm;
