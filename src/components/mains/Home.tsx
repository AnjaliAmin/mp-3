import styled from "styled-components";

const StyledMain=styled.main`
    height: 100vh;
    width: 70%;
    margin-bottom: 0;
    padding: 5%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
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

    img{
        margin: 10px;
        max-width: 60%;
        max-height: 60%;
        align-content: center;
        border-width: 2px;
        border-style: solid;
        border-color: darkblue;
    }

    #pageSummary{
        margin-top: 50px;
        margin-bottom: 50px;
    }

    #mySummary{
        margin-top: 50px;
        margin-bottom: 50px;
    }
    
`;

export default function Home() {
    return (
        <StyledMain>
            <title> Home | Anjali's Resume </title>
            <h1 id="PageTitle">
                Home
            </h1>
            <img src="../../public/AnjaliAminHeadshot.png" alt="Anjali Amin Headshot"/>
            <h3 id="mySummary">
                My name is Anjali Amin. I am a senior at Boston University studying
                computer science, economics, and business. I plan to pursue a career in finance,
                and will be working in investment management full-time upon my graduation.
            </h3>
            <h4 id="pageSummary">
                This website highlights my education and professional experience.
            </h4>
        </StyledMain>
    );
}
