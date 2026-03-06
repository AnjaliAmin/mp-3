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
    
    #CTI{
        margin: 10px;
        margin-bottom: 50px;
    }

    #BMO{
        margin: 10px;
        margin-bottom: 50px;
    }
`;

export default function Work() {
    return (
        <StyledMain>
            <title> Work Experience | Anjali's Resume </title>
            <h1 id="PageTitle">
                Work Experience
            </h1>

            <div id="CTI">
                <h2>
                    Columbia Threadneedle Investments
                </h2>
                <h5>
                    <em> Chicago, IL | June 2025 - August 2025 </em>
                </h5>
                <h4>
                    Equity Investments Intern
                </h4>
                <ul>
                    <li> Produced stock pitch reports for 5 companies (GLOB, INGM, ZETA, BRZE, SPT),
                        building 3-statement models and conducting DCF and multiples-based valuations
                        to determine positions in $3B small-mid cap growth fund </li>
                    <li> Created comps tables for semis/hardware holdings and software holdings
                        utilizing Bloomberg API for Excel </li>
                    <li> Formulated questions for and took notes in meetings with company management
                        and sell-side analysts </li>
                    <li> Monitored ~25 technology holdings and performed industry-agnostic
                        ad-hoc research to assist in fund management </li>
                </ul>
            </div>

            <div id="BMO">
                <h2>
                    BMO Financial Group
                </h2>
                <h5>
                    <em> Chicago, IL | June 2024 - August 2024 </em>
                </h5>
                <h4>
                    Data Reporting and Analytics Summer Analyst
                </h4>
                <ul>
                    <li> Created report detailing the history of a credit deal with a major loss
                        to be used by department management and counsel to determine the avoidability of the loss </li>
                    <li> Assisted with multiple aspects of deal monitoring and management including writing annual reviews,
                        completing financial analysis, and writing an article about analyzing cash flows
                        to be distributed company-wide </li>
                    <li> Gathered and compiled information on over 200 borrowers to create and complete reports
                        and quality control trackers for borrowers in flood zones, in default,
                        or who have undergone debt-to-equity transactions with the bank </li>
                </ul>
            </div>
        </StyledMain>
    );
}