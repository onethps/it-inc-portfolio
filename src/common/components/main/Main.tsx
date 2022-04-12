import React from 'react';
import FirstBlock from "./FirstBlock/FirsBlock";
import MySkills from "./MySkills/MySkills";
import MyPortfolio from "./MyPortfolio/MyPortfolio";
import Contacts from "./Contacts/Contacts";

const Main = () => {
    return (
        <div>
            <FirstBlock/>
            <MySkills/>
            <MyPortfolio/>
            <Contacts/>
        </div>
    );
};

export default Main;