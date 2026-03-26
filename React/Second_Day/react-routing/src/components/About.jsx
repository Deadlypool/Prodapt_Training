import {useContext} from 'react'
import {AppContext} from '../AppContext'

const About = () => {
    const {projectTitle} = useContext(AppContext);
    return (
        <div>
            <h1>{projectTitle}</h1>
            <p>This is the about page.</p>
        </div>
    );
}

export default About;