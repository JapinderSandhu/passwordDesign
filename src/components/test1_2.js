import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Jumbotron from 'react-bootstrap/Jumbotron';


import "./layout.css"

const Test = ({ children }) => {

  const [showTestConfirmation, setShowTestConfirmation] = useState(false);

  const [showSame, setShowSame] = useState(false);

  const [showFew, setShowFew] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);

  const [colour, setColour] = useState({

    colour1: "white",
    colour2: "white",
    colour3: "white",
    colour4: "white",
    colour5: "white",
    colour6: "white",
    colour7: "white",
    colour8: "white",
    colour9: "white",
    colour10: "white",
    colour11: "white"

  });



  function AlertDismissible() {

    if (showSame) {

      return (
        <Alert variant="danger" onClose={() => setShowSame(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            You chose too many of the same colours in a consecutive order.
            Try changing it up!
          </p>
        </Alert>
      );

    }

    if (showFew) {

      return (
        <Alert variant="warning" onClose={() => setShowFew(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            You did not choose enough colours
          </p>
        </Alert>
      );

    }

    if (showSuccess) {

      return (
        <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
          <Alert.Heading>Success!</Alert.Heading>
          <p>
            You have set your password
          </p>
        </Alert>
      );

    }

    return <div></div>;

  }

  function handleReset(e){

    setColour({
      colour1: "darkgray",
      colour2: "white",
      colour3: "white",
      colour4: "white",
      colour5: "white",
      colour6: "white",
      colour7: "white",
      colour8: "white",
      colour9: "white",
      colour10: "white",
      colour11: "white"
   });

  }


  function handleSubmit(e){

     console.log(Object.keys(colour).length)

     console.log(colour[0])

     var emptySelections = 0



    // loop through colour object of circles colours
    for  (const [key, value] of Object.entries(colour) )  {

     console.log( `Key => ${key} | Value => ${value}`)

     // if empty/unset circle increment counter
     if(value==='white'|value==='darkgray'){
       emptySelections = emptySelections + 1
     }


    }

    //:CHECK 1: if unset circles > 6 return invalid submission

    console.log("emptySelections",emptySelections)

    if(emptySelections>6){
       // display ALERT ERROR few circles chosen
       console.log("Invalid Choose Set More Circles")
       setShowFew(true)
    }

    //:CHECK 2: if 3 consecutive colours are the same return invalid submission]

    for ( var i = 0; i < Object.entries(colour).length - 3 ; i++){





      if
       (

         (
             // if circles are white or gray
             !((Object.entries(colour)[i][1] ==='white'|| Object.entries(colour)[i][1] ==='darkgray')&&(Object.entries(colour)[i+1][1] ==='white'|| Object.entries(colour)[i+1][1] ==='darkgray')&&(Object.entries(colour)[i+2][1] ==='white'|| Object.entries(colour)[i+2][1] ==='darkgray'))


         )


         &&

        // if 4 circles are same in consecutive order and the same colour
         ( (Object.entries(colour)[i][1]===Object.entries(colour)[i+1][1]) && (Object.entries(colour)[i+1][1]===Object.entries(colour)[i+2][1]) && (Object.entries(colour)[i+2][1]===Object.entries(colour)[i+3][1]))

      )



     {

          // alert warning when ERROR
         setShowSame(true)

       }


    }

    if(!(showFew&&showSame)){

      setShowSuccess(true)

    }



  }



  function handleClick(e) {

    e.preventDefault();

    console.log(e.target.style.background)

    console.log(e.target.id)


    if(e.target.style.background==="white"){

      setColour({
        ...colour,
       [e.target.id]: 'red'
     });

    }

    if(e.target.style.background==="red"){

      setColour({
        ...colour,
       [e.target.id]: 'blue'
     });

    }

    if(e.target.style.background==="blue"){

      setColour({
        ...colour,
       [e.target.id]: 'green'
     });

    }

    if(e.target.style.background==="green"){

      setColour({
        ...colour,
       [e.target.id]: 'darkgray'
     });


    }

    if(e.target.style.background==="darkgray"){

      setColour({
        ...colour,
       [e.target.id]: 'red'
     });

    }


  }

  function changeBackground(e) {

    if(e.target.style.background==='white'){
      e.target.style.background = 'darkgray';
      e.target.style.border = '1px solid white';
    }

  }

  function changeBackgroundBack(e) {

    if(e.target.style.background==='darkgray'){
      e.target.style.background = 'white';
      e.target.style.border = '1px solid black';
    }

  }

  return (
    <>

    <Container className="buttonContainer" >




      <Row xl={6} lg={6} className="buttonWrapper justify-content-center">


        <button
          id="colour1"
          className="button button1 buttonRadius"
          onClick={handleClick}
          onMouseOver={changeBackground}
          onMouseLeave={changeBackgroundBack}

          style={{background:colour.colour1}} > 1 </button>

        <button
          id="colour2"

          className="button button2 buttonRadius"
          onClick={handleClick}
          onMouseOver={changeBackground}
          onMouseLeave={changeBackgroundBack}
          style={{background:colour.colour2}} > 2 </button>
        <button
          id="colour3"

          className="button button3 buttonRadius"
          onClick={handleClick}
          onMouseOver={changeBackground}
          onMouseLeave={changeBackgroundBack}
          style={{background:colour.colour3}} > 3 </button>

        <button
          id="colour4"

          className="button button4 buttonRadius"
          onClick={handleClick}
          onMouseOver={changeBackground}
          onMouseLeave={changeBackgroundBack}
          style={{background:colour.colour4}} > 4 </button>

        <button
          id="colour5"

          className="button button5 buttonRadius"
          onClick={handleClick}
          onMouseOver={changeBackground}
          onMouseLeave={changeBackgroundBack}
          style={{background:colour.colour5}} > 5 </button>

        <button
          id="colour6"

          className="button button6 buttonRadius"
          onClick={handleClick}
          onMouseOver={changeBackground}
          onMouseLeave={changeBackgroundBack}
          style={{background:colour.colour6}} > 6 </button>

      </Row>

      <Row xl={6} lg={6} className="justify-content-center">

        <button
          id="colour7"

          className="button button7 buttonRadius"
          onClick={handleClick}
          onMouseOver={changeBackground}
          onMouseLeave={changeBackgroundBack}

          style={{background:colour.colour7}} > 7 </button>

        <button
          id="colour8"

          className="button button8 buttonRadius"
          onClick={handleClick}
          onMouseOver={changeBackground}
          onMouseLeave={changeBackgroundBack}
          style={{background:colour.colour8}} > 8 </button>
        <button
          id="colour9"

          className="button button9 buttonRadius"
          onClick={handleClick}
          onMouseOver={changeBackground}
          onMouseLeave={changeBackgroundBack}
          style={{background:colour.colour9}} > 9 </button>

        <button
          id="colour10"

          className="button button10 buttonRadius"
          onClick={handleClick}
          onMouseOver={changeBackground}
          onMouseLeave={changeBackgroundBack}
          style={{background:colour.colour10}} > 10 </button>

        <button
          id="colour11"

          className="button button11 buttonRadius"
          onClick={handleClick}
          onMouseOver={changeBackground}
          onMouseLeave={changeBackgroundBack}
          style={{background:colour.colour11}} > 11 </button>


      </Row>

      <Row className="mt-5 justify-content-center">

         <Button onClick={handleSubmit} className="m-3" variant="warning">Submit Password</Button>
         <Button onClick={handleReset} className="m-3" variant="danger">Reset</Button>

      </Row>

      <Row xl={6} lg={6} className="mt-5 justify-content-center">

        <AlertDismissible />

      </Row>

    </Container>

    </>
  )
}



export default Test
