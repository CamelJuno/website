import * as React from "react"
import Layout from "../components/layout";
import EcosystemVideoMov from "../videos/ecosystem-small.mp4";
import EcosystemVideo from "../videos/ecosystem-small.webm";
import EcosystemPoster from "../videos/ecosystem.png";
import {StaticImage} from "gatsby-plugin-image";
import {useState, useEffect} from "react";

const menu = require('../contents/urls.json');

const HackJunoPage = () => {
    const [isSafari, setSafari] = useState(false)
    useEffect(() => {
        setSafari(/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)));
    });
    return (
        <div className={'ecosystem-page'}>
            <Layout>
                <section className={'hero-section'}>
                    <div className={'container-hackjuno'}>
                        <div className={'row'}>
                            <div className={'hacks-title col-12 col-sm-8 col-xl-6'}>
                                <h1 data-sal="fade"
                                    data-sal-delay="200"
                                    data-sal-duration="1000">Hack Juno
                                </h1>
                            </div>
                            <div className={'image'} data-sal="fade"
                                 data-sal-delay="400"
                                 data-sal-duration="1000">
                                <StaticImage
                                    src={'../images/hackjuno.png'}
                                    alt={'HackJuno'}
                                    placeholder="blurred"
                                />
                            </div>
                            <div className={'col-12 col-sm-8 col-xl-6'}>
                                <div className={'text-box'} data-sal="fade"
                                     data-sal-delay="400"
                                     data-sal-duration="1000">
                                    Apply for a grant to incentivize your development on Junø
                                </div>
                                <div className={'text-box'} data-sal="fade"
                                     data-sal-delay="400"
                                     data-sal-duration="1000">
                                    Note that Hack Juno HackJuno are separate and applications should follow the instructions <a className={'anchor-link'} target={'_blank'} rel={'noreferrer'} href='https://medium.com/hack-juno-dao/hack-juno-280670cd71b2'>here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                        <div className={'row justify-content-center'} style={{minHeight : '1560px'}}>
                            <iframe class="clickup-embed clickup-dynamic-height" style={{background : 'none'}} src="https://forms.clickup.com/20614357/f/kn36n-108/H11M293NZ99MAXACV3"></iframe>
                            <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
                            <script async src="https://app-cdn.clickup.com/assets/js/forms-embed/v1.js"></script>
                        </div>
                </section>
            </Layout>
        </div>
    )
}

export default HackJunoPage
