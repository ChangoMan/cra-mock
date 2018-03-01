import React from 'react'

const Pog = (props) => (
    <div>
        <div className="coin__container" style={{
            top: props.positionTop,
            left: props.positionLeft
        }}>

            <div className="coin" style={{
                zIndex: props.zIndex
                // animation: `spin infinite`
            }}>

                <div className="coin__front" style={{
                    backgroundImage: `url("https://raw.githubusercontent.com/austintgriffith/cryptogs/master/reactapp/public/cryptogs/${props.image}")`
                }}></div>

                <div className="coin__back"></div>

                <div className="coin__side">
                    <div className="coin__c"></div>
                    <div className="coin__c"></div>
                    <div className="coin__c"></div>
                    <div className="coin__c"></div>
                    <div className="coin__c"></div>
                    <div className="coin__c"></div>
                    <div className="coin__c"></div>
                    <div className="coin__c"></div>
                    <div className="coin__c"></div>
                    <div className="coin__c"></div>
                    <div className="coin__c"></div>
                    <div className="coin__c"></div>
                    <div className="coin__c"></div>
                    <div className="coin__c"></div>
                    <div className="coin__c"></div>
                    <div className="coin__c"></div>
                </div>

            </div>

        </div>
    </div>
)

export default Pog
