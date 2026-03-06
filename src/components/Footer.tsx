import {Link} from "react-router";
import styled from "styled-components";

const StyledFooter = styled.footer`
    padding: 1%;
    color: darkblue;
    border-top: 2px solid darkblue;
    background-color: #ddccff;
    
`;

export default function Footer() {
    return(
        <StyledFooter>
            <p> All Rights Reserved by Anjali Amin: <Link to=""> Credits</Link> &copy; </p>
        </StyledFooter>
    );
}