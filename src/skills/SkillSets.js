import React from 'react';
import SkillIcons from './SkillIcons';
import 'devicon/devicon.min.css';

function SkillSets() {
    return (
        <div className='flex pt-[200px] md:mt-[0px] gap-4 gap-y-4 md:gap-8 md:gap-y-8 h-max flex-row flex-wrap w-max pl-[2%] pr-[2%] md:pl-[20%] md:pr-[20%] justify-center items-center w-full overflow-y-clip'>
            <SkillIcons iconName={"React"} iconAddress={"devicon-react-original"}/>
            <SkillIcons iconName={"Javascript"} iconAddress={"devicon-javascript-plain"}/>
            <SkillIcons iconName={"Typescript"} iconAddress={"devicon-typescript-plain"}/>
            <SkillIcons iconName={"Express"} iconAddress={"devicon-express-original colored"}/>
            <SkillIcons iconName={"Node"} iconAddress={"devicon-nodejs-plain"}/>
            <SkillIcons iconName={"MongoDB"} iconAddress={"devicon-mongodb-plain"}/>
            <SkillIcons iconName={"MySQL"} iconAddress={"devicon-mysql-original"}/>
            <SkillIcons iconName={"C"} iconAddress={"devicon-c-plain"}/>
            <SkillIcons iconName={"C++"} iconAddress={"devicon-cplusplus-plain"}/>
            <SkillIcons iconName={"JAVA"} iconAddress={"devicon-java-plain"}/>
            <SkillIcons iconName={"Python"} iconAddress={"devicon-python-plain"}/>
            <SkillIcons iconName={"HTML5"} iconAddress={"devicon-html5-plain"}/>
            <SkillIcons iconName={"CSS3"} iconAddress={"devicon-css3-plain"}/>
            <SkillIcons iconName={"AWS"} iconAddress={"devicon-amazonwebservices-plain-wordmark"}/>
            <SkillIcons iconName={"Salesforce"} iconAddress={"devicon-salesforce-plain"}/>
            <SkillIcons iconName={"Git"} iconAddress={"devicon-git-plain"}/>
            <SkillIcons iconName={"Github"} iconAddress={"devicon-github-plain"}/>
            <SkillIcons iconName={"BitBucket"} iconAddress={"devicon-bitbucket-original"}/>
            <SkillIcons iconName={"Postman"} iconAddress={"devicon-postman-plain"}/>
            <SkillIcons iconName={"Insomnia"} iconAddress={"devicon-insomnia-plain"}/>
            <SkillIcons iconName={"Tailwind"} iconAddress={"devicon-tailwindcss-original"}/>
            <SkillIcons iconName={"Bootstrap"} iconAddress={"devicon-bootstrap-plain"}/>
            <SkillIcons iconName={"Axios"} iconAddress={"devicon-axios-plain"}/>
            <SkillIcons iconName={"Jest"} iconAddress={"devicon-jest-plain"}/>
            <SkillIcons iconName={"Selenium"} iconAddress={"devicon-selenium-original"}/>
        </div>
    );
}
export default SkillSets;