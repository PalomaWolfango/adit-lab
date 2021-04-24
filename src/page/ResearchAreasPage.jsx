import React,{useEffect} from 'react';
import Footer from '../components/global-components/Footer';
import Layouts from '../components/global-components/Layouts';
import ResearchAreasInner from '../components/section-components/ResearchAreas'
import HeaderV3 from '../components/section-components/Header-v3';
import { sectionData } from './../data/section.json';

const ResearchAreas = () => {
    let data = sectionData.sectionTitle;
    useEffect(() => {
        window.scrollTo(0,0);
}, [])
    return (
       <Layouts  pageTitle="Research Areas">
           <HeaderV3  background={data.researchAreas.background} title={data.researchAreas.title} pageName={data.researchAreas.pageName}  />
           <ResearchAreasInner />
           <Footer />
       </Layouts>
    );
}

export default ResearchAreas;