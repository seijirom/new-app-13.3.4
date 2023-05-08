import Table from 'react-bootstrap/Table';

export default function ShowIdVd(props) {
    const items = props.data;
    return (
	<div>
            <h3>The Data of The Uploaded Excel Sheet</h3>
            <Table striped bordered hover variant="warning">
            <thead>
            <tr>
            <th>voltage</th>
            <th>current</th>
            </tr>
            </thead>
            <tbody>
            {items.map((datas, index) =>
                       <tr key={index}>

                       <td>{datas.voltage}</td>
                       <td>{datas.current}</td>

		       </tr>
              )}
            </tbody>
            </Table>
         </div>
   );
}
