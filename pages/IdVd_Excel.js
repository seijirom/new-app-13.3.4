import React, { useState } from "react";
import * as XLSX from "xlsx";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, Row } from 'react-bootstrap';
import ShowIdVd from './ShowIdVd';
import IdVd_Plotly from './IdVd_Plotly';

export default function IdVd_Excel() {
    const [items, setItems] = useState([]);
    const readExcel = (file) => {
	const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);
            fileReader.onload = (e) => {
		const bufferArray = e.target.result;
		const wb = XLSX.read(bufferArray, {
                    type: "buffer"
		});
		const wsname = wb.SheetNames[3];
		const ws = wb.Sheets[wsname];
		const data = XLSX.utils.sheet_to_json(ws);
		console.log(data);
		resolve(data);
            };
            fileReader.onerror = (error) => {
		reject(error);
            };
	});
	promise.then((d) => {
            setItems(d);
	});
    };
    return (
	    <div>
	    <input
        type="file"
        onChange={(e) => {
            const file = e.target.files[0];
            readExcel(file);
        }}
	    />
	    <br></br>
	    <br></br>
	    <br></br>

	    <Row>
            <Col lg={12}>
	    <IdVd_Plotly data={items} />
	    <ShowIdVd data={items} />
        </Col>
      </Row>
    </div>
    );
}
