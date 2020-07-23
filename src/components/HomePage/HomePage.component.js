import { Component } from 'react'
import './HomePage.style.css'
import stocksGrowth from './../../images/homeImages/hero-pic.png'



export class HomePage extends Component {

    render() {
        return(
            <section className="Home">
                <div className="Home-Content">

                    <div className="Home-Head">
                        <h2>
                            Ready-to-use PWA theme for Magento!
                        </h2>

                        <p>
                            ScandiPWA is the fastest way to get PWA for any Magento store
                        </p>
                    </div>

                    <div className="Home-Body">
                        <h3>
                            key benefits
                        </h3>
                        <ul>
                            <li>
                                Ludicrously fast page load
                            </li>
                            <li>
                                Boost of mobile conversions
                            </li>
                            <li>
                                Priority in organic search
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img src={stocksGrowth} className="Home-StocksImage" />
                    </div>

                </div>
            </section>
        )
    }
}