import React from 'react'

const BannerTwo = (props) => (
    <section className="banner banner--alt bg-primary">
        <div className="container-fluid">

            <div className="row">
                <div className="col-md-12 col-lg-6">
                    <h2 className="mb-4"><strong>Whip out your slammer and get rad on the blockchain!</strong></h2>
                    <p className="lead mb-4">CryptoPogs is a fully decentralized ERC721 game. Collect rare pogs and play live with your friends!</p>
                    <p><a className="btn btn-primary btn-lg btn--alt" href="#">Play Now</a></p>
                </div>
                <div className="col-lg-2 text-center d-none d-lg-block" style={{marginTop: '-150px'}}>
                    <div>
                        <img
                            className="pog pog--alt img-fluid"
                            src="https://raw.githubusercontent.com/austintgriffith/cryptogs/master/reactapp/public/cryptogs/awpoison.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="pog pog--alt img-fluid"
                            src="https://raw.githubusercontent.com/austintgriffith/cryptogs/master/reactapp/public/cryptogs/awripsaw.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="pog pog--alt img-fluid"
                            src="https://raw.githubusercontent.com/austintgriffith/cryptogs/master/reactapp/public/cryptogs/ad8ball.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className="col-lg-2 text-center d-none d-lg-block" style={{marginTop: '-48px'}}>
                    <div>
                        <img
                            className="pog pog--alt img-fluid"
                            src="https://raw.githubusercontent.com/austintgriffith/cryptogs/master/reactapp/public/cryptogs/adyinyanggroovy.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="pog pog--alt img-fluid"
                            src="https://raw.githubusercontent.com/austintgriffith/cryptogs/master/reactapp/public/cryptogs/ethereumlogo.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="pog pog--alt img-fluid"
                            src="https://raw.githubusercontent.com/austintgriffith/cryptogs/master/reactapp/public/cryptogs/adbiohaz.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className="col-lg-2 text-center d-none d-lg-block" style={{marginTop: '-150px'}}>
                    <div>
                        <img
                            className="pog pog--alt img-fluid"
                            src="https://raw.githubusercontent.com/austintgriffith/cryptogs/master/reactapp/public/cryptogs/adsmile.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="pog pog--alt img-fluid"
                            src="https://raw.githubusercontent.com/austintgriffith/cryptogs/master/reactapp/public/cryptogs/awskullsstars.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="pog pog--alt img-fluid"
                            src="https://raw.githubusercontent.com/austintgriffith/cryptogs/master/reactapp/public/cryptogs/penguin.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>

    </section>
)

export default BannerTwo
