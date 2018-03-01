import React from 'react'

const PogAnimation = (props) => (
    <div>
        <div className="coin__container coin__container--center">

            <div className="coin coin--animation">

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

export default PogAnimation
