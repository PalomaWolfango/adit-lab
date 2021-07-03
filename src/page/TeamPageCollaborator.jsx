import React,{useEffect} from 'react';
import Footer from '../components/global-components/Footer';
import Layouts from '../components/global-components/Layouts';
import HeaderV3 from '../components/section-components/Header-v3';
import TeamCollaborator from '../components/section-components/Team';
import { sectionData } from '../data/section.json';

const TeamPageCollaborator = () => {
    let data = sectionData.sectionTitle;
    useEffect(() => {
        window.scrollTo(0,0);
}, [])
    return (
        <>
            <Layouts  pageTitle='Team'>
                <HeaderV3 background={data.team.background} title={data.team.title} pageName={data.team.pageName} />
                <TeamCollaborator />
                <Footer />
            </Layouts>
        </>
    );
}

export default TeamPageCollaborator;
