import React,{useEffect} from 'react';
import Footer from '../components/global-components/Footer';
import Layouts from '../components/global-components/Layouts';
import Connect from '../components/section-components/Connect';
import HeaderV3 from '../components/section-components/Header-v3';
import Publications from '../components/section-components/Publications';
import { sectionData } from './../data/section.json';


const PublicationPage = () => {
    let data = sectionData.sectionTitle;
    useEffect(() => {
        window.scrollTo(0,0);
}, [])
    return (
        <>
            <Layouts pageTitle='Publications'>
                <HeaderV3  background={data.publications.background} title={data.publications.title} pageName={data.publications.pageName}/>
                <Publications/>
                <Footer />
            </Layouts>
        </>
    );
}

export default PublicationPage;