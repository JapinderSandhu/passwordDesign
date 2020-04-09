import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge'
import Jumbotron from 'react-bootstrap/Jumbotron';

import FinalReport from "../components/testFinalReport"




import "./layout.css"

const Test = ({ children }) => {


  const [testActive, settestActive] = useState(false);


  const [attempt, setAttempt] = useState(1);

  const [attemptError, setAttemptError] = useState(false);

  const [attemptIncrement, setAttemptIncrement] = useState(false);


  const [showFinalTest, setShowFinalTest] = useState(false);


  const [showTest1, setShowTest1] = useState(true);

  const [showTest2, setShowTest2] = useState(false);

  const [showTest3, setShowTest3] = useState(false);

  const [showContinueTest2, setshowContinueTest2] = useState(false);

  const [showContinueTest3, setshowContinueTest3] = useState(false);

  const [showFinalResults, setshowFinalResults] = useState(false);

  const [showFinalResultsPage, setshowFinalResultsPage] = useState(false);


  const [showSame, setShowSame] = useState(false);

  const [showFew, setShowFew] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);

  const [colour, setColour] = useState({

    colour1: "white",
    colour2: "red",
    colour3: "red",
    colour4: "blue",
    colour5: "white",
    colour6: "white",
    colour7: "white",
    colour8: "white",
    colour9: "white",
    colour10: "blue",
    colour11: "red",
    colour12: "red"

  });

  const [colourTest, setColourTest] = useState({

    colour1: "white",
    colour2: "red",
    colour3: "red",
    colour4: "blue",
    colour5: "white",
    colour6: "white",
    colour7: "white",
    colour8: "white",
    colour9: "white",
    colour10: "blue",
    colour11: "red",
    colour12: "red"

  });

  const [logs, setLogs] = useState([]);



  function handleBeginTest(test){


    handleReset()

    settestActive(true)

    // log start time
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds

    var timeStamp = (year.toString()).concat("-",month,"-",date," ",hours,":",min,":",sec)



    setLogs(logs => [...logs, [timeStamp,"userid","Text21",test,"start"] ] )

    // console.log([timeStamp,"userid","Text21",test,"start"])

    console.log(logs)





  }


  function handleAttempt(){


    handleReset()
    setAttemptIncrement(false)
    setShowFew(false)
    setShowSame(false)
    setAttempt(attempt + 1)


  }

  function handleContinueTest2(){

    setColour({
      colour1: "red",
      colour2: "red",
      colour3: "red",
      colour4: "white",
      colour5: "white",
      colour6: "blue",
      colour7: "white",
      colour8: "white",
      colour9: "white",
      colour10:"red",
      colour11:"red",
      colour12:"red"


   });

   setColourTest({
     colour1: "red",
     colour2: "red",
     colour3: "red",
     colour4: "white",
     colour5: "white",
     colour6: "blue",
     colour7: "white",
     colour8: "white",
     colour9: "white",
     colour10:"red",
     colour11:"red",
     colour12:"red"

  });
   settestActive(false)

   setshowContinueTest2(false)

   setShowTest1(false)

   setShowTest2(true)

   setShowSuccess(false)

   setAttemptError(false)

   setAttemptIncrement(false)

   setAttempt(1)

  }
  function handleContinueTest3(){

    setColour({
      colour1: "blue",
      colour2: "blue",
      colour3: "blue",
      colour4: "white",
      colour5: "red",
      colour6: "red",
      colour7: "red",
      colour8: "white",
      colour9: "green",
      colour10:"green",
      colour11:"green",
      colour12:"white"


   });

   setColourTest({
     colour1: "blue",
     colour2: "blue",
     colour3: "blue",
     colour4: "white",
     colour5: "red",
     colour6: "red",
     colour7: "red",
     colour8: "white",
     colour9: "green",
     colour10:"green",
     colour11:"green",
     colour12:"white"

  });


   settestActive(false)

   setshowContinueTest3(false)

   setShowTest2(false)

   setShowTest3(true)

   setShowSuccess(false)

   setAttemptError(false)

   setAttemptIncrement(false)

   setAttempt(1)

  }



  function AlertDismissible() {

    if (showSame) {



      return (
        <Alert variant="danger" onClose={() => setShowSame(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            You chose too many of the same colours in a consecutive order.
            Try changing it up! You have {3 - attempt} attempts left.
          </p>

          <Button variant="danger" onClick={handleAttempt} >Try Again</Button>

        </Alert>
      );

    }

    if (showFew) {


      return (
        <Alert variant="danger" onClose={() => setShowFew(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            You did not choose enough colours. You have {3 - attempt} attempts left.
          </p>

          <Button variant="danger" onClick={handleAttempt} >Try Again</Button>

        </Alert>
      );

    }

    if (showSuccess) {

      return (
        <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
          <Alert.Heading>Success!</Alert.Heading>
          <div>

            <Row className="justify-content-center text-center">

              <p className="text-center">
                The password is correct
              </p>

            </Row>

            <Row className="justify-content-center text-center">

              { showContinueTest2 && <Button onClick={handleContinueTest2} variant="success">Continue Test 2</Button> }

              { showContinueTest3 && <Button onClick={handleContinueTest3} variant="success">Continue Test 3</Button> }

              { showFinalResults && <Button  onClick={setshowFinalResultsPage(true)} variant="success">See Final Results</Button> }


            </Row>

          </div>

        </Alert>
      );

    }

    if (attemptIncrement){

      return(

        <Alert variant="danger" onClose={() => setShowSame(false)} dismissible>
          <Alert.Heading>Oh snap! You entered the password incorrectly!</Alert.Heading>
          <p>
            You have {3 - attempt} attempts left
          </p>

          <Button variant="danger" onClick={handleAttempt} >Try Again</Button>

        </Alert>

      )

    }

    if (attemptError){

      return(

        <Alert variant="danger" onClose={() => setShowSame(false)} dismissible>
          <Alert.Heading>Oh snap! You are out of attempts!</Alert.Heading>
          <p>
            You entered the password incorrectly
          </p>

          { showContinueTest2 && <Button onClick={handleContinueTest2} variant="success">Continue Test 2</Button> }

          { showContinueTest3 && <Button onClick={handleContinueTest3} variant="success">Continue Test 3</Button> }

          { showFinalResults && <Button onClick={setshowFinalResultsPage(true)} variant="success">Continue Final Test</Button> }


        </Alert>

      )

    }


    return <div></div>;

  }

  function handleReset(e){

    setColour({
      colour1: "white",
      colour2: "white",
      colour3: "white",
      colour4: "white",
      colour5: "white",
      colour6: "white",
      colour7: "white",
      colour8: "white",
      colour9: "white",
      colour10:"white",
      colour11:"white",
      colour12:"white"

   });

  }

  function handleFinalTest(e){


  }


  function handleSubmit(test){

     var emptySelections = 0
     var checkTest = 0



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
       // log start time
       var date = new Date().getDate(); //Current Date
       var month = new Date().getMonth() + 1; //Current Month
       var year = new Date().getFullYear(); //Current Year
       var hours = new Date().getHours(); //Current Hours
       var min = new Date().getMinutes(); //Current Minutes
       var sec = new Date().getSeconds(); //Current Seconds

       var timeStamp = (year.toString()).concat("-",month,"-",date," ",hours,":",min,":",sec)



       setLogs(logs => [...logs, [timeStamp,"userid","Text21",test,"submitError"] ] )

       // console.log([timeStamp,"userid","Text21",test,"start"])

       console.log(logs)
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
         // log start time
         var date = new Date().getDate(); //Current Date
         var month = new Date().getMonth() + 1; //Current Month
         var year = new Date().getFullYear(); //Current Year
         var hours = new Date().getHours(); //Current Hours
         var min = new Date().getMinutes(); //Current Minutes
         var sec = new Date().getSeconds(); //Current Seconds

         var timeStamp = (year.toString()).concat("-",month,"-",date," ",hours,":",min,":",sec)



         setLogs(logs => [...logs, [timeStamp,"userid","Text21",test,"submitError"] ] )

         // console.log([timeStamp,"userid","Text21",test,"start"])

         console.log(logs)




       }


    }


    // check if the password is correct/ matches - valid
    for ( var i = 0; i < Object.entries(colourTest).length ; i++){

     // if empty/unset circle increment counter
     if(Object.entries(colour)[i][1]===Object.entries(colourTest)[i][1]) {
       checkTest = checkTest + 1
     }




    }

    console.log("CheckTest",checkTest)
    //if all 11 circles are correct
    if(( !(showFew&&showSame) && (checkTest===12) ) ) {

      setShowSuccess(true)

      // log start time
      var date = new Date().getDate(); //Current Date
      var month = new Date().getMonth() + 1; //Current Month
      var year = new Date().getFullYear(); //Current Year
      var hours = new Date().getHours(); //Current Hours
      var min = new Date().getMinutes(); //Current Minutes
      var sec = new Date().getSeconds(); //Current Seconds

      var timeStamp = (year.toString()).concat("-",month,"-",date," ",hours,":",min,":",sec)



      setLogs(logs => [...logs, [timeStamp,"userid","Text21",test,"submitSuccess"] ] )



      if(showTest1){
        setshowContinueTest2(true)

      }
      if(showTest2){
        setshowContinueTest3(true)
        setshowContinueTest2(false)
        setShowTest2(false)


      }
      if(showTest3){

        setshowFinalResults(true)

      }

    }else if(attempt > 2){

      //too many attempts
      setAttemptError(true)
      // log start time
      var date = new Date().getDate(); //Current Date
      var month = new Date().getMonth() + 1; //Current Month
      var year = new Date().getFullYear(); //Current Year
      var hours = new Date().getHours(); //Current Hours
      var min = new Date().getMinutes(); //Current Minutes
      var sec = new Date().getSeconds(); //Current Seconds

      var timeStamp = (year.toString()).concat("-",month,"-",date," ",hours,":",min,":",sec)



      setLogs(logs => [...logs, [timeStamp,"userid","Text21",test,"submitError"] ] )

      // console.log([timeStamp,"userid","Text21",test,"start"])

      console.log(logs)

      if(showTest1){
        setshowContinueTest2(true)

      }
      if(showTest2){
        setshowContinueTest3(true)
        setshowContinueTest2(false)
        setShowTest2(false)


      }
      if(showTest3){

        setshowFinalResults(true)

      }


    }else{
      setAttemptIncrement(true)
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

  if(!showFinalResultsPage){

    return (
      <>

      <Container className="buttonContainer" >

        <Row className="mt-0 justify-content-center">

          <Jumbotron className="mt-0 justify-content-center">

            <Row className="mt-0 justify-content-center">

              <h1>Final Test</h1>

            </Row>

            <Row className="mt-5 justify-content-center">

                <p className="mt-3 mb-0 text-center">

                  You have 3 attemps. You must enter the password for:

                </p>

                {showTest1 && <h5 className="mt-3 mb-0 text-center"> Test 1 Grocery</h5>}

                {(showTest2 || showContinueTest3) && <h5 className="mt-3 mb-0 text-center">Test 2 Bank</h5>}

                {showTest3 && <h5 className="mt-3 mb-0 text-center">Test 3 Email</h5>}


            </Row>




            <Row className="mt-5 mb-0 justify-content-center">

              { (showTest1 && !showContinueTest2) && <Button onClick={() => handleBeginTest("test1")} variant="primary">Begin Test 1 Grocery</Button> }

              { showTest2 && <Button onClick={() => handleBeginTest("test2")} variant="primary">Begin Test 2 Bank</Button> }

              { showTest3 && <Button onClick={() => handleBeginTest("test3")} variant="primary">Begin Test 3 Email</Button> }

              <Badge pill variant="danger" >
                <h6 > Attempt <Badge variant="light">{attempt}</Badge> </h6>
              </Badge>

            </Row>

            {testActive && <Row className="mt-5 justify-content-center">

              {/* stopwatch */}


            </Row>}



            <Row  className="mt-3 mb-0 justify-content-center">

              <AlertDismissible />

            </Row>



         </Jumbotron>


        </Row>





  {testActive && <div>

         <Row  className="buttonWrapper justify-content-center">


                <button
                  id="colour1"
                  className="button button1 buttonRadius"
                  onClick={handleClick}
                  onMouseOver={changeBackground}
                  onMouseLeave={changeBackgroundBack}

                  style={{background:colour.colour1}} >  </button>

                <button
                  id="colour2"

                  className="button button2 buttonRadius"
                  onClick={handleClick}
                  onMouseOver={changeBackground}
                  onMouseLeave={changeBackgroundBack}
                  style={{background:colour.colour2}} >  </button>
                <button
                  id="colour3"

                  className="button button3 buttonRadius"
                  onClick={handleClick}
                  onMouseOver={changeBackground}
                  onMouseLeave={changeBackgroundBack}
                  style={{background:colour.colour3}} >  </button>

                <button
                  id="colour4"

                  className="button button4 buttonRadius"
                  onClick={handleClick}
                  onMouseOver={changeBackground}
                  onMouseLeave={changeBackgroundBack}
                  style={{background:colour.colour4}} >  </button>

                <button
                  id="colour5"

                  className="button button5 buttonRadius"
                  onClick={handleClick}
                  onMouseOver={changeBackground}
                  onMouseLeave={changeBackgroundBack}
                  style={{background:colour.colour5}} >  </button>

                <button
                  id="colour6"

                  className="button button6 buttonRadius"
                  onClick={handleClick}
                  onMouseOver={changeBackground}
                  onMouseLeave={changeBackgroundBack}
                  style={{background:colour.colour6}} >  </button>

              </Row>

              <Row  className="justify-content-center">

                <button
                  id="colour7"

                  className="button button7 buttonRadius"
                  onClick={handleClick}
                  onMouseOver={changeBackground}
                  onMouseLeave={changeBackgroundBack}

                  style={{background:colour.colour7}} >  </button>

                <button
                  id="colour8"

                  className="button button8 buttonRadius"
                  onClick={handleClick}
                  onMouseOver={changeBackground}
                  onMouseLeave={changeBackgroundBack}
                  style={{background:colour.colour8}} >  </button>
                <button
                  id="colour9"

                  className="button button9 buttonRadius"
                  onClick={handleClick}
                  onMouseOver={changeBackground}
                  onMouseLeave={changeBackgroundBack}
                  style={{background:colour.colour9}} > </button>

                <button
                  id="colour10"

                  className="button button10 buttonRadius"
                  onClick={handleClick}
                  onMouseOver={changeBackground}
                  onMouseLeave={changeBackgroundBack}
                  style={{background:colour.colour10}} >  </button>

                <button
                  id="colour11"

                  className="button button11 buttonRadius"
                  onClick={handleClick}
                  onMouseOver={changeBackground}
                  onMouseLeave={changeBackgroundBack}
                  style={{background:colour.colour11}} >  </button>

                  <button
                    id="colour12"

                    className="button button11 buttonRadius"
                    onClick={handleClick}
                    onMouseOver={changeBackground}
                    onMouseLeave={changeBackgroundBack}
                    style={{background:colour.colour12}} >  </button>


              </Row>

              <Row className="mt-5 justify-content-center">

                { (showTest1 && !showContinueTest2) && <Button onClick={() => handleSubmit("test1")} className="m-3" variant="warning">Submit Password</Button> }

                { showTest2 && <Button onClick={() => handleSubmit("test2")} className="m-3" variant="warning">Submit Password</Button> }

                { showTest3 && <Button onClick={() => handleSubmit("test3")} className="m-3" variant="warning">Submit Password</Button> }



                 <Button onClick={handleReset} className="m-3" variant="danger">Reset</Button>

              </Row>

        </div>}

      </Container>

      </>
    )

  }else{

    return(
      <FinalReport logs={logs}/>
    )
  }
}



export default Test
