import React, { useState, useEffect } from 'react';

import Layout from "../components/layout"
import Test1 from "../components/test1"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Jumbotron from 'react-bootstrap/Jumbotron';



const IndexPage = () => {

  const [showTest, setTestShow] = useState(false);

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

  function handleBeginTest(e){

    setTestShow(true)

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



  if(showTest){

    return(

      <Layout>

        <Test1/>

      </Layout>

    )

  }

  else{

    return(

      <Layout>

        <Row>

          <Jumbotron>

            <Row className="justify-content-center">

              <h1>Introduction</h1>

            </Row>


            <Row className="justify-content-center">
              
                <h2>Tutorial</h2>


                <p className="mt-5 text-center">
                  This is a simple circle, clicking the circle will change the colour. You can select one of 4 states for each circle.(Red,Blue,Green,Gray) Firstly you must select atleast 6 circles.
                  <br></br><br></br>
                  If you choose gray it is unset and you do not have to remember that circles state. You may disregard it.
                  <br></br><br></br>
                  Secondly you can not select more than 3 colours in a row.
                  Press Begin Test to start
                </p>



                <button
                  id="colour1"
                  className="button button1 buttonRadius"
                  onClick={handleClick}
                  onMouseOver={changeBackground}
                  onMouseLeave={changeBackgroundBack}

                  style={{background:colour.colour1}} > </button>



            </Row>

            <Row className="mt-5 justify-content-center">
              <Button onClick={handleBeginTest} variant="primary">Begin Test</Button>

            </Row>



         </Jumbotron>


        </Row>

      </Layout>

    )

  }





}

export default IndexPage
