import React from 'react';
import Link from 'next/link';

const nav = () => {
  return (
 
    <nav className="navbar navbar-expand-xl navbar-light bg-dark">
        <div className="container-fluid">
            <Link href="#"><a className="navbar-brand ms-4">Guillaume Burgnies</a></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto me-5">
                    <li className="nav-item">
                        <Link href="#"><a className="nav-link active" aria-current="page">Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/#projects"><a className="nav-link">Projects</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#"><a className="nav-link">About</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

  )
}

export default nav