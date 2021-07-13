import React,{useEffect} from 'react';
import Footer from '../components/global-components/Footer';
import Layouts from '../components/global-components/Layouts';
import Connect from '../components/section-components/Connect';
import HeaderV3 from '../components/section-components/Header-v3';
import ProjectDetailsInner from '../components/project-components/Project-details';
import { sectionData } from './../data/section.json';

const ProjectDetails = () => {
    let data = sectionData.sectionTitle;
    useEffect(() => {
        window.scrollTo(0,0);
}, [])
    return (
        <>
            <Layouts  pageTitle='Project Details'>
                <HeaderV3 background={data.projectDetails.background} title={data.projectDetails.title} pageName={data.projectDetails.pageName} />
                <ProjectDetailsInner />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Footer />
            </Layouts>
        </>
    );
}

export default ProjectDetails;
