import React from 'react'

const Header = (props) => (
    <header className="site-header">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-md-4">
                    <img className="mb-0" src="https://content.screencast.com/users/hunter1291/folders/Jing/media/925accc6-40aa-4b7b-a160-416daca391a8/00000362.png" width="271" height="70" border="0" />
                </div>
                <div className="col-md-4">
                    <h1 className="logo text-center"><a href="/">CryptoPogs</a></h1>
                </div>
                <div className="col-md-4">
                    <nav className="site-nav">
                        <ul>
                            <li>
                                <a href="#">My Pogs</a>
                            </li>
                            <li>
                                <a href="#">Play Pogs</a>
                            </li>
                            <li>
                                <a href="#">Buy Pogs</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
)

export default Header
