import styled from "styled-components";

const StyledMain=styled.main`
    height: 100vh;
    width: 70%;
    margin-bottom: 0;
    padding: 5%;
    text-align: left;
    color: darkblue;
    font-size: calc(5px + 1.5vw);

    @media screen and (max-width: 1000px) {
        width: 100%;
    }

    #PageTitle{
        text-align: center;
        padding-bottom: 30px;
        padding-top: 5px;
    }
    
    #technical{
        margin-top: 30px;
        margin-bottom: 30px;
    }

    #languages{
        margin-top: 30px;
        margin-bottom: 30px;
    }

    #interests{
        margin-top: 30px;
        margin-bottom: 30px;
    }
`;

export default function Skills() {
    return(
        <StyledMain>
            <title> Skills | Anjali's Resume </title>
            <h1 id="PageTitle">
                Skills
            </h1>

            <div id="technical">
                <h2>
                    <em> Technical Skills </em>
                </h2>
                <h4>
                    Microsoft Word, PowerPoint, and Excel, Bloomberg, Python, HTML, CSS, JavaScript
                </h4>
            </div>
            <div id="languages">
                <h2>
                    <em> Languages </em>
                </h2>
                <h4>
                    Native English, Conversational Spanish
                </h4>
            </div>
            <div id="interests">
                <h2>
                    <em> Interests </em>
                </h2>
                <h4>
                    Creative writing, travel, sustainable fashion, reading, pottery, cooking
                </h4>
            </div>
        </StyledMain>
    );
}