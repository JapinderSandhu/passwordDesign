import React, { useState, useEffect } from 'react';

import Layout from "../components/layout"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';





const IndexPage = () => {

  const [colour1, setColour1] = useState('white');
  const [colour2, setColour2] = useState('white');
  const [colour3, setColour3] = useState('white');
  const [colour4, setColour4] = useState('white');
  const [colour5, setColour5] = useState('white');
  const [colour6, setColour6] = useState('white');
  const [colour7, setColour7] = useState('white');
  const [colour8, setColour8] = useState('white');
  const [colour9, setColour9] = useState('white');
  const [colour10, setColour10] = useState('white');
  const [colour11, setColour11] = useState('white');



  function handleClick(e) {

    e.preventDefault();

    console.log(e.target.style.background)

    console.log(e.target.id)

    // if button 1 pressed
    if(e.target.id==='1'){
      if(e.target.style.background==="white"){

        setColour1('red')

      }
      if(e.target.style.background==="red"){

        setColour1('blue')

      }
      if(e.target.style.background==="blue"){

        setColour1('green')

      }
      if(e.target.style.background==="green"){

        setColour1('white')

      }

    }
    // if button 2 pressed
    if(e.target.id==='2'){
      if(e.target.style.background==="white"){

        setColour2('red')

      }
      if(e.target.style.background==="red"){

        setColour2('blue')

      }
      if(e.target.style.background==="blue"){

        setColour2('green')

      }
      if(e.target.style.background==="green"){

        setColour2('white')

      }

    }

    // if button 1 pressed
    if(e.target.id==='3'){
      if(e.target.style.background==="white"){

        setColour3('red')

      }
      if(e.target.style.background==="red"){

        setColour3('blue')

      }
      if(e.target.style.background==="blue"){

        setColour3('green')

      }
      if(e.target.style.background==="green"){

        setColour3('white')

      }

    }

    // if button 1 pressed
    if(e.target.id==='4'){
      if(e.target.style.background==="white"){

        setColour4('red')

      }
      if(e.target.style.background==="red"){

        setColour4('blue')

      }
      if(e.target.style.background==="blue"){

        setColour4('green')

      }
      if(e.target.style.background==="green"){

        setColour4('white')

      }

    }
    // if button 1 pressed
    if(e.target.id==='5'){
      if(e.target.style.background==="white"){

        setColour5('red')

      }
      if(e.target.style.background==="red"){

        setColour5('blue')

      }
      if(e.target.style.background==="blue"){

        setColour5('green')

      }
      if(e.target.style.background==="green"){

        setColour5('white')

      }

    }
    // if button 1 pressed
    if(e.target.id==='6'){
      if(e.target.style.background==="white"){

        setColour6('red')

      }
      if(e.target.style.background==="red"){

        setColour6('blue')

      }
      if(e.target.style.background==="blue"){

        setColour6('green')

      }
      if(e.target.style.background==="green"){

        setColour6('white')

      }

    }

    // if button 1 pressed
    if(e.target.id==='7'){
      if(e.target.style.background==="white"){

        setColour7('red')

      }
      if(e.target.style.background==="red"){

        setColour7('blue')

      }
      if(e.target.style.background==="blue"){

        setColour7('green')

      }
      if(e.target.style.background==="green"){

        setColour7('white')

      }

    }
    // if button 1 pressed
    if(e.target.id==='8'){
      if(e.target.style.background==="white"){

        setColour8('red')

      }
      if(e.target.style.background==="red"){

        setColour8('blue')

      }
      if(e.target.style.background==="blue"){

        setColour8('green')

      }
      if(e.target.style.background==="green"){

        setColour8('white')

      }

    }
    // if button 1 pressed
    if(e.target.id==='9'){
      if(e.target.style.background==="white"){

        setColour9('red')

      }
      if(e.target.style.background==="red"){

        setColour9('blue')

      }
      if(e.target.style.background==="blue"){

        setColour9('green')

      }
      if(e.target.style.background==="green"){

        setColour9('white')

      }

    }
    // if button 1 pressed
    if(e.target.id==='1'){
      if(e.target.style.background==="white"){

        setColour10('red')

      }
      if(e.target.style.background==="red"){

        setColour10('blue')

      }
      if(e.target.style.background==="blue"){

        setColour10('green')

      }
      if(e.target.style.background==="green"){

        setColour10('white')

      }

    }
    // if button 1 pressed
    if(e.target.id==='1'){
      if(e.target.style.background==="white"){

        setColour11('red')

      }
      if(e.target.style.background==="red"){

        setColour11('blue')

      }
      if(e.target.style.background==="blue"){

        setColour11('green')

      }
      if(e.target.style.background==="green"){

        setColour11('white')

      }

    }




  }

  function changeBackground(e) {

    // e.target.style.background = 'DarkGray';
    // e.target.style.border = '1px solid white';

  }

  function changeBackgroundBack(e) {
    //
    // e.target.style.background = 'white';
    // e.target.style.border = '1px solid black';

  }

  return(

    <Layout>



      <Container className="buttonContainer" >

        <Row lg={6} className="buttonWrapper justify-content-center">

          <button
            id="1"
            className="button1 buttonRadius"
            onClick={handleClick}
            onMouseOver={changeBackground}
            onMouseLeave={changeBackgroundBack}

            style={{background:colour1}} > 1 </button>

          <button
            id="2"

            className="button2 buttonRadius"
            onClick={handleClick}
            style={{background:colour2}} > 2 </button>
          <button
            id="3"

            className="button3 buttonRadius"
            onClick={handleClick}
            style={{background:colour3}} > 3 </button>

          <button
            id="4"

            className="button4 buttonRadius"
            onClick={handleClick}
            style={{background:colour4}} > 4 </button>

          <button
            id="5"

            className="button5 buttonRadius"
            onClick={handleClick}
            style={{background:colour5}} > 5 </button>

          <button
            id="6"

            className="button6 buttonRadius"
            onClick={handleClick}
            style={{background:colour6}} > 6 </button>

        </Row>

        <Row lg={6} className="justify-content-center">

          <button
            id="7"

            className="button7 buttonRadius"
            onClick={handleClick}
            onMouseOver={changeBackground}
            onMouseLeave={changeBackgroundBack}

            style={{background:colour7}} > 7 </button>

          <button
            id="8"

            className="button8 buttonRadius"
            onClick={handleClick}
            style={{background:colour8}} > 8 </button>
          <button
            id="9"

            className="button9 buttonRadius"
            onClick={handleClick}
            style={{background:colour9}} > 9 </button>

          <button
            id="10"

            className="button10 buttonRadius"
            onClick={handleClick}
            style={{background:colour10}} > 10 </button>

          <button
            id="11"

            className="button11 buttonRadius"
            onClick={handleClick}
            style={{background:colour11}} > 11 </button>


        </Row>

        <Row className="mt-5 justify-content-center">

           <Button variant="warning">Submit</Button>

        </Row>

      </Container>



    </Layout>

  )

}

export default IndexPage
