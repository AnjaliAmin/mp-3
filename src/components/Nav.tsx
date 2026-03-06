import {Link} from "react-router";
import styled from "styled-components"

const StyledNav=styled.nav`
    background-color: #ffcff0;
    padding: 0;
    width: 30%;
    border-width: 2px;
    border-style: solid;
    border-color: #ffcff0;
    border-right-color: darkblue;
    
    @media screen and (max-width: 750px){
        width: 100%;
        border-bottom-color: darkblue;
        border-right-color: #ffcff0;
    }
`;

const StyledList=styled.ul`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding-left: 0;
    list-style: none;
    height: 80%;
    
    @media screen and (max-width: 750px){
        justify-content: center;
        flex-direction: row;
        padding-inline-start: 0;
    }
`;

const StyledListItem=styled.li`
    display: inline-block;
    padding: 10%;
    width: 80%;
    margin: 20% auto;
    border: 2px solid darkblue;
    background-color: #ddccff;
    text-align: center;
    
    @media screen and (max-width: 750px){
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 18%;
        margin: 1%;
        padding: 2%;
    }
    
`;

const StyledLink=styled(Link)`
    text-decoration: none;
    font-family: Georgia, "Times New Roman", serif;
    font-size: calc(2px + 1.3vw);
    color: darkblue;
    text-align: center;
  
`;


export default function Nav() {
    return(
        <StyledNav>
            <StyledList>
                <StyledListItem><StyledLink to="/">Home</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/edu.html">Education</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/work.html">Work Experience</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/clubs.html">Club Experience</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/projects.html">Projects</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/skills.html">Skills</StyledLink></StyledListItem>
            </StyledList>
        </StyledNav>
    );
}