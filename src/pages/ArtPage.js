//pages/ArtPage.js

//import '../styles/ArtPage.css';
import SiteHeader from '../components/SiteHeader';
import MyFooter from '../components/Footer';
import { Card } from 'antd';

function ArtPage() {
    return(
        <div className="art-page">
            <div className="top">
                <SiteHeader title='art' />
            </div>
            <div className="content">
                <div className="art-blurb">
                    <h3> My Art</h3>
                    <p>
                        Welcome to my corner of the web where I share my art and stuff that's inspired me lately!
                        While I'm not a professional, I do dabble in traditional art as a hobby and love to throw
                        together a painting over a quiet weekend. My work mostly revolves around character design
                        but I'm branching out to different styles and subjects soon! This page will be updated
                        to show off more of my work as time goes on.

                        My gallery currently has some watercolor paintings I made during high school while 
                        completing my IBDP diploma and finding my artistic passions. Feel free to explore and 
                        and I hope you find something that speaks to you.
                    </p>
                </div>
                <div className="art-cards">
                    <div className="cards-row">
                                                
                    </div>
                </div>
            </div>
            <div className="bottom">
                <MyFooter />
            </div>
        </div>
    );
}

export default ArtPage;