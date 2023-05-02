import React from 'react';
import { Table } from 'rsuite';


const RegisteredPeopleTable = ({ registeredPeople }) => {
  return (
    <Table data={registeredPeople} style={{ marginTop: '1rem' }}>
      <Table.Column width={200} align="center" fixed>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.Cell dataKey="firstName" />
      </Table.Column>
      <Table.Column width={200} align="center" fixed>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.Cell dataKey="lastName" />
      </Table.Column>
      <Table.Column width={200} align="center" fixed>
        <Table.HeaderCell>Phone Number</Table.HeaderCell>
        <Table.Cell dataKey="phoneNumber" />
      </Table.Column>
    </Table>
  );
};

export default RegisteredPeopleTable;
