import React from 'react';
import Title from "./Title/Title";
import MySkills from "./MySkills/MySkills";
import MyPortfolio from "./MyPortfolio/MyPortfolio";
import Contacts from "./Contacts/Contacts";

const Main = () => {
    return (
        <div>
            <Title/>
            <MySkills/>
            <MyPortfolio/>
            <Contacts/>
        </div>
    );
};

export default Main;