import React, { useState } from "react";
import { Table } from "antd";
import "antd/dist/reset.css";

// Sample data for cash Receivable
const data = [
  {
    sl: 1,
    salesRep: "John Doe",
    pendingTransactions: 5,
    totalReceivable: 1200.5,
  },
  {
    sl: 2,
    salesRep: "Jane Smith",
    pendingTransactions: 3,
    totalReceivable: 850.0,
  },
  {
    sl: 3,
    salesRep: "Alice Johnson",
    pendingTransactions: 7,
    totalReceivable: 1500.0,
  },
];

// Table columns
const columns = [
  {
    title: "SL",
    dataIndex: "sl",
    key: "sl",
    align: "center",
    render: (_, __, index) => index + 1,
  },
  {
    title: "Sales Rep",
    dataIndex: "salesRep",
    key: "salesRep",
    align: "center",
  },
  {
    title: "Pending Transactions",
    dataIndex: "pendingTransactions",
    key: "pendingTransactions",
    align: "center",
  },
  {
    title: "Total Receivable",
    dataIndex: "totalReceivable",
    key: "totalReceivable",
    align: "center",
    render: (value) => `$${value.toFixed(2)}`,
  },
];

export default function CashCollections() {
  const [filteredData, setFilteredData] = useState(data);

  return (
    <div style={{ width: "100%"}}>
      <div>
        <h1 className="text-[30px] font-bold mb-2">Cash Collections</h1>
        <Table
          bordered={false}
          size="small"
          rowClassName="custom-row"
          className="custom-table"
          columns={columns}
          dataSource={filteredData.map((row, index) => ({
            ...row,
            key: index,
          }))}
          pagination={{ pageSize: 6 }}
        />
      </div>
    </div>
  );
}
