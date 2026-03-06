import styled from "styled-components";

const StyledMain=styled.main`height: 100vh;
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

    #PageTitle {
        text-align: center;
        padding-bottom: 30px;
        padding-top: 5px;
    }

    #BU{
        margin-top: 10px;
        margin-bottom: 70px;
    }

    #GS{
        margin-top: 10px;
        margin-bottom: 70px;
    }
    
`;

export default function Education(){
    return(
        <StyledMain>
            <title> Education | Anjali's Resume </title>
            <h1 id="PageTitle">
                Education
            </h1>

            <div id="BU">
                <h2>
                    Boston University - College of Arts and Sciences
                </h2>
                <h4>
                    <em> Bachelor of Arts in Economics and Computer Science, Minor in Business Administration </em>
                </h4>
                <h5>
                    Expected graduation date: May 2029
                </h5>
                <h5>
                    <em> GPA: </em> 3.56
                </h5>
                <p>
                    <em> Honors: </em> Kilachand Honors College, Dean’s List,
                    Cornell Women In Investing Stock Pitch Competition Winner
                </p>
                <p>
                    <em> Relevant Coursework: </em> Corporate Financial Management,
                    Financial Accounting, Equities and Securities Analysis
                </p>
            </div>
            <div id="GS">
                <h2>
                    George School
                </h2>
                <h4>
                    <em> High School Diploma </em>
                </h4>
                <h5>
                    September 2018 - May 2022
                </h5>
                <h5>
                    <em> Weighted GPA : </em> 4.53
                </h5>
                <h5>
                    <em> Unweighted GPA: </em> 3.87
                </h5>
                <p>
                    <em> Honors: </em> Head of School's List, Honor Roll
                </p>
                <p>
                    <em> Activities: </em> Varsity Field Hockey, Basketball,
                    Student Ambassador, George School Thrift Store Leader, Argo, Curious George
                </p>
            </div>
        </StyledMain>
    );
}