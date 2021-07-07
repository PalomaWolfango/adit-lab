import React,{useEffect} from 'react';
import Footer from '../components/global-components/Footer';
import Layouts from '../components/global-components/Layouts';
import New from '../components/section-components/New'
import HeaderV3 from '../components/section-components/Header-v3';
import { sectionData } from '../data/section.json';

const News = () => {
    let data = sectionData.sectionTitle;
    useEffect(() => {
        window.scrollTo(0,0);
}, [])
    return (
       <Layouts  pageTitle="News">
           <HeaderV3  background={data.news.background} title={data.news.title} pageName={data.news.pageName}  />
           <New />
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <Footer />
       </Layouts>
    );
}

export default News;