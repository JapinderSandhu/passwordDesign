import React, { useState, useEffect } from 'react';

import { CSVLink, CSVDownload } from "react-csv";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Table from 'react-bootstrap/Table';



const FinalReport = logs => {

  console.log("logsArray",logs.logs)


  var data = logs.logs



  const header = ["#", "date", "userName", "passType", "testNumber", "Action"];

  return (

    <div>

      <Jumbotron className="mt-0 justify-content-center">

        <Row className="mt-0 justify-content-center">

          <h1>Final Report</h1>

        </Row>

     </Jumbotron>

      <Table striped bordered hover>

        <thead>
          <tr>{header.map((h, i) => <th key={i}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {Object.keys(logs.logs).map((k, i) => {
            let data = logs.logs[k];
            console.log(data)
            return (
              <tr key={i}>
                <td>{k}</td>
                <td>{data[0]}</td>
                <td>{data[1]}</td>
                <td>{data[2]}</td>
                <td>{data[3]}</td>
                <td>{data[4]}</td>
              </tr>
            );
          })}
        </tbody>

        {/* <CSVDownload data={csvData} target="_blank" />; */}

      </Table>

      <CSVLink
        data={data}
        filename={"passwordFile.csv"}
        onClick={() => {
          console.log("You click the link"); // 👍🏻 Your click handling logic
        }}
        className="mt-5"
      >
        Download CSV
      </CSVLink>;

    </div>
  );

}

export default FinalReport;
