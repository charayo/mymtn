import Image from 'next/image'
import React, { Component } from 'react'


class MainNav extends Component {
    render() {
        return (
            <nav>
                <div className="main-nav">
                    <div className="p-0 ml-3" style={{height: '40px'}}>
                        <Image 
                        src="/../public/images/mtn-logo-nav.svg"
                        width="40"
                        height="40"
                    />
                    </div>
                </div>
            </nav>
            
        )
    }
}

export default MainNav
