import styled from 'styled-components';

const StyledHeader=styled.header`
    padding: 1%;
    color: darkblue;
    background-color: #ddccff;
    text-align: left;
    border-bottom: 2px solid darkblue;

    @media screen and (max-width: 750px){
        text-align: center;
    }
`;
export default function Header() {
    return(
        <StyledHeader>
            <header>
                <h1> Anjali's Resume </h1>
                <p> A webpage displaying Anjali's resume and career goals </p>
            </header>
        </StyledHeader>
    );
}