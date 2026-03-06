import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import Header from "./components/Header.tsx";
import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";
import Education from "./components/mains/Education.tsx";
import Home from "./components/mains/Home.tsx";
import Work from "./components/mains/Work.tsx";
import Clubs from "./components/mains/Clubs.tsx";
import Projects from "./components/mains/Projects.tsx";
import Skills from "./components/mains/Skills.tsx";
import styled from "styled-components";

const StyledWrapper=styled.div`
    background-color: #abf6ff;
    width: 80vw;
    margin: 0 auto;
    border-width: 2px;
    border-style: solid;
    border-color: darkblue;
`;

const StyledContainer=styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    
    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`;

function Root() {
    return(
        <StyledWrapper>
            <Header/>
            <StyledContainer>
                <Nav/>
                <Routes>

                    <Route
                        path={`/*`}
                        element={<Home/>}
                    />

                    <Route
                        path={`/edu.html`}
                        element={<Education/>}
                    />

                    <Route
                        path={`/work.html`}
                        element={<Work/>}
                    />

                    <Route
                        path={`/clubs.html`}
                        element={<Clubs/>}
                    />

                    <Route
                        path={`/projects.html`}
                        element={<Projects/>}
                    />

                    <Route
                        path={`/skills.html`}
                        element={<Skills/>}
                    />

                </Routes>
            </StyledContainer>
            <Footer/>
        </StyledWrapper>
    );
}

const router=createBrowserRouter(
    [{path:"*",Component: Root}]
)

export default function App() {

    return (
      <>
          <RouterProvider router={router}/>
      </>
    )
}

