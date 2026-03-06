import styled from "styled-components";
import {useState} from "react";

const StyledMain=styled.main<{outputColor: string}>`
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
    
    #CalculatorTitle{
        text-align: center;
        font-size: calc(15px + 1.2vw);
        margin-bottom: 5%;
        margin-top: 5%;
    }

    #CalculatorProject {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 100px solid transparent;
        padding: 5%;
        border-image: url("/public/border.png") 100 stretch;
        margin: 5%;
        font-family: Georgia, "Times New Roman", serif;
        font-size: calc(15px + 1.2vw);
        max-width: 90%;
    }

    #firstInput{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin: 5%;
        font-size: calc(10px + 1.2vw);
    }

    #secondInput{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin: 5%;
        font-size: calc(10px + 1.2vw);
    }

    #operations{
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin: 5%;
    }

    #Add{
        border: 1px solid darkblue;
        border-radius: 15px;
        background-color: white;
        color: darkblue;
        font-family: Georgia, "Times New Roman", serif;
        font-size: calc(10px + 1.2vw);
        padding: 3%;
    }

    #Subtract{
        border: 1px groove darkblue;
        border-radius: 15px;
        background-color: white;
        color: darkblue;
        font-family: Georgia, "Times New Roman", serif;
        font-size: calc(10px + 1.2vw);
        padding: 3%;
    }

    #Multiply{
        border: 1px solid darkblue;
        border-radius: 15px;
        background-color: white;
        color: darkblue;
        font-family: Georgia, "Times New Roman", serif;
        font-size: calc(10px + 1.2vw);
        padding: 3%;
    }

    #Divide{
        border: 1px solid darkblue;
        border-radius: 15px;
        background-color: white;
        color: darkblue;
        font-family: Georgia, "Times New Roman", serif;
        font-size: calc(10px + 1.2vw);
        padding: 3%;
    }

    #Power{
        border: 1px solid darkblue;
        border-radius: 15px;
        background-color: white;
        color: darkblue;
        font-family: Georgia, "Times New Roman", serif;
        font-size: calc(10px + 1.2vw);
        padding: 3%;
    }

    #Clear{
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin: 5%;
        border: 1px solid darkblue;
        border-radius: 15px;
        background-color: white;
        color: darkblue;
        font-family: Georgia, "Times New Roman", serif;
        font-size: calc(10px + 1.2vw);
        padding: 3%;
    }

    #output{
        color: ${(props) => props.outputColor};
        font-family: Georgia, "Times New Roman", serif;
        font-size: calc(15px + 1.2vw);
        padding: 3%;
    }

`;

export default function Projects () {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [output, setOutput] = useState(0);
    const [outputColor, setColor] = useState("darkblue");

    function doAdd() {
        const result = Number(input1) + Number(input2)
        setOutput(result);
        setColor(result < 0 ? "red" : "darkblue")
    }

    function doSubtract() {
        const result = Number(input1) - Number(input2);
        setOutput(result);
        setColor(result < 0 ? "red" : "darkblue")
    }

    function doMultiply() {
        const result = Number(input1) * Number(input2);
        setOutput(result);
        setColor(result < 0 ? "red" : "darkblue")
    }

    function doDivide() {
        const result = Number(input1) / Number(input2);
        setOutput(result);
        setColor(result < 0 ? "red" : "darkblue")
    }

    function doPower() {
        let result = 1;
            for (let i = 0; i < Math.abs(Number(input2)); i++) {
                result = result * Number(input1);
            }
        setOutput(Number(input2) < 0 ? 1/result : result);
        setColor(result < 0 ? "red" : "darkblue")
    }

    function clearAll() {
        setInput1("");
        setInput2("");
        setOutput(0);
        setColor("darkblue");
    }

    return (
        <StyledMain outputColor={outputColor}>
            <title> Projects | Anjali's Resume </title>
            <h1 id="PageTitle">
                Projects
            </h1>

                <h2 id="CalculatorTitle">
                    Calculator
                </h2>
            <div id="CalculatorProject">
                <div id="firstInput">
                    <label htmlFor="first">First number:</label>
                    <input
                        id={`first`}
                        value={input1}
                        placeholder={``}
                        onChange={(e)=>setInput1(e.target.value)}

                    />
                </div>
                <div id="secondInput">
                    <label htmlFor="second">Second number:</label>
                    <input
                        id={`second`}
                        value={input2}
                        placeholder={``}
                        onChange={(e)=>setInput2(e.target.value)}
                    />
                </div>

                <div id="operations">
                    <button id="Add" onClick={doAdd}>+</button>
                    <button id="Subtract" onClick={doSubtract}>-</button>
                    <button id="Multiply" onClick={doMultiply}>*</button>
                    <button id="Divide" onClick={doDivide}>/</button>
                    <button id="Power" onClick={doPower}>**</button>
                </div>

                <button id="Clear" onClick={clearAll}>Clear</button>

                <h3 id="output">{output}</h3>
            </div>
        </StyledMain>
    );
}