import React from 'react';
import BannerMain from "./b1-bannerMain/BannerMain";
import MySkills from "./b2-mySkills/MySkills";
import MyPortfolio from "./b3-myPortfolio/MyPortfolio";
import Contacts from "./b4-contacts/Contacts";

const Main = () => {
    return (
        <div>
            <BannerMain/>
            <MySkills/>
            <MyPortfolio/>
            <Contacts/>
        </div>
    );
};

export default Main;