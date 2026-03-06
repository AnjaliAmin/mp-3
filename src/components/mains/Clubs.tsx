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

    #BUFC{
        margin: 10px;
        margin-bottom: 50px;
    }

    #180DC{
        margin: 10px;
        margin-bottom: 50px;
    }
`;

export default function Clubs() {
    return(
        <StyledMain>
            <title> Club Experience | Anjali's Resume </title>
            <h1 id="PageTitle">
                Extracurriculars
            </h1>

            <div id="BUFC">
                <h2>
                    Boston University Finance and Investment Club
                </h2>
                <h5>
                    <em> Boston, MA | September 2022 - Present </em>
                </h5>
                <h4>
                    Chief Risk Officer
                </h4>
                <h4>
                    VP of Diversity and Inclusion, Chief Risk Analyst, Investment Board Member
                </h4>
                <ul>
                    <li> Mentored 3 students through semester-long stock pitches,
                        assisting with research, modeling, and slide design </li>
                    <li> Produced quarterly fund performance reports and released
                        coverage updates for NAPA and MODG </li>
                </ul>
                <h4>
                    Investment Associate
                </h4>
                <ul>
                    <li> Produced stock pitch presentations for URBN and NAPA
                        to determine positions in BU’s $1.1M endowment fund </li>
                    <li> Conducted industry/company research, created financial models such as
                        revenue forecasts, DCFs, and comparable companies to determine company valuations,
                        and produced slide decks for presentation in club-wide competitions </li>
                    <li> Selected as best Investment Associate out of 43 people in the program </li>
                </ul>
            </div>

            <div id="180DC">
                <h2>
                    180 Degrees Consulting
                </h2>
                <h5>
                    <em> Boston, MA | September 2023 - January 2024 </em>
                </h5>
                <h4>
                    Junior Consultant
                </h4>
                <ul>
                    <li> Presented insights and solutions for the future of embedded and
                        frictionless finance in banks and big tech as well as opportunistic
                        industries for digitized banking and how new players can enter </li>
                    <li> Collaborated with 5 other consultants to directly assist multiple
                        clients with clarifying project scope and desired outcome, focusing
                        on developing use case for client to launch strategic planning app </li>
                </ul>
            </div>
        </StyledMain>
    );
}