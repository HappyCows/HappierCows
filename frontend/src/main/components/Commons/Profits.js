import React from "react";
import { Card } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";

const columns = [
    {
        dataField: "profit",
        text: "Profit",
        sort: true,
    },
    {
        dataField: "date",
        text: "Date",
        sort: true,
    }
];

const dummyData = [
    { id: 1, profit: 10, date: "2021-03-05" },
    { id: 2, profit: 11, date: "2021-03-06" },
    { id: 3, profit: 10, date: "2021-03-07" },
    { id: 4, profit: 8, date: "2021-03-08" }
];


// add parameters 
const Profits = () => {
    return (
        <Card>
            <Card.Header as="h5">Profits</Card.Header>
            <Card.Body>
                {/* change 4am to admin-appointed time? And consider adding milk bottle as decoration */}
                <Card.Title>You will earn profits from milking your cows everyday at 4am.</Card.Title>
                <BootstrapTable
                    bootstrap4={true}
                    keyField="id"
                    data={dummyData}
                    columns={columns} />
            </Card.Body>
        </Card>
    );
};

export default Profits;