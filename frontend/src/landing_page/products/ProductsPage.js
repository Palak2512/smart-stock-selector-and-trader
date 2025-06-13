import React from 'react';
import Universe from './Universe';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Navbar from '../Navbar';
import Footer from '../Footer';
function ProductsPage() {
    return ( 
        <>
            
            <Hero />
            <LeftSection imageurl="Assets/kite.png"
             productName="Aero" 
             infoParagraph="Equinex's ultra-fast trading terminal with streaming stock data, AI-powered filters, advanced charting tools, and a clean, intuitive interface. Trade smarter with Aero — seamless across web and mobile."
              trymore="Try more"
               learnmore="Learn more "
             />
            
            <RightSection imageurl="Assets/console.png"
             productName="Nest" 
             infoParagraph="Your smart portfolio and analytics dashboard. Track your holdings, live P&L, trade history, and performance insights — all in one elegant and easy-to-navigate space."
              trymore="Try more"
               learnmore="Learn more "/>

            <LeftSection imageurl="Assets/coin.png"
             productName="Sprout" 
             infoParagraph="Mutual Funds & SIP investment module - for long-term growth."
              trymore="Try more"
               learnmore="Learn more " />

            <RightSection />
            <LeftSection 
            imageurl="Assets/Equilearn.png"
            imageheight="400px"
             productName="Equilearn" 
             infoParagraph="Your smart learning companion — an AI-powered chatbot that answers stock market basics, simplifies complex terms, and guides beginners with friendly, real-time support."
              trymore="Try more"
               learnmore="Learn more " /> 
            
           
            <Universe />
            
        </>
    );
}

export default ProductsPage;