import ProjectComponent from '../ProjectComponent'

export const WebDevelopment = () => {
    return (
        <div>
            <p>These are a few of my projects:</p>
            <ProjectComponent title={"Project 1"} githubLink={"www.google.es"} websiteLink={"www.google.es"} 
                imageSrc={process.env.PUBLIC_URL + '/portfolio_profile_picture.jpg'} description={"Brief description"} tags={["Hello", "Bye"]}>

            </ProjectComponent>
            <ProjectComponent title={"Project 1"} githubLink={"www.google.es"} websiteLink={"www.google.es"} 
                imageSrc={process.env.PUBLIC_URL + '/portfolio_profile_picture.jpg'} description={"Brief description"} tags={["Hello", "Bye"]}>

            </ProjectComponent>
        </div>
    )
}

export default WebDevelopment