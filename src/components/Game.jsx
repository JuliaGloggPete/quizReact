import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Game = (props) => {

const questions = getQuestions();
//const [currentQuestion, setCurrentQuestion] = useState(0)
const [selectedAnswer, setSelectedAnswer] = useState(null);
let currentQuestion = 1;



const navigate = useNavigate();
const params = useParams();
if('currentquestion'in params){
    if(params.currentquestion > 0 && params.currentquestion <= questions.length){
        currentQuestion = Number(params.currentquestion);
    }

}
const question = questions[currentQuestion -1];

const options = question.answers.map((answer, index)=>(
    <p className="option" key={index}>
        <input type="radio"
         name="question" onClick={()=> setSelectedAnswer(index) } /> {answer}

         </p>


));
const handleDecided = () => {
    if (selectedAnswer === question.correct) {
        console.log("Rätt");
        props.answeredCorrectly();
    }
    else{
        console.log("fel!")
    }

    if (currentQuestion < questions.length -1){

   // setCurrentQuestion(currentQuestion +1)
   navigate("/game/"+(currentQuestion + 1))
    }
    else{

        navigate("/result");
    }

}

return (
    <div>
        <h3> {question.question}</h3>
        <h2> {options}</h2>
        <button onClick={handleDecided}>Svara</button>


    </div>
)

}

const getQuestions = () =>{

return[

{ question: "När är det julafton?", 
answers: ["24 maj", "24 dec", "3maj"],
correct: 1
},
{ question: "Sista datumet inlämningsuppgift", 
answers: ["14 nov", "24 dec", "6 oktober"],
correct: 2
},
{ question: "Vad är bäst?", 
answers: ["Zoom", "Discord", "Teams"],
correct: 0
}


]


}

export default Game;