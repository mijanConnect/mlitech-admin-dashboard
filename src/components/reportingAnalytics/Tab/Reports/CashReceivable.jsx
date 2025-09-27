import React, { useState } from "react";
import { Table } from "antd";
import "antd/dist/reset.css";

// Sample data for cash Collection
const data = [
  {
    sl: 1,
    date: "2025-01-01",
    transactions: 5,
    totalCollected: 1200.5,
  },
  {
    sl: 2,
    date: "2025-02-01",
    transactions: 3,
    totalCollected: 850.0,
  },
  {
    sl: 3,
    date: "2025-03-01",
    transactions: 7,
    totalCollected: 1500.0,
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
  { title: "Date", dataIndex: "date", key: "date", align: "center" },
  {
    title: "Transactions",
    dataIndex: "transactions",
    key: "transactions",
    align: "center",
  },
  {
    title: "Total Collected",
    dataIndex: "totalCollected",
    key: "totalCollected",
    align: "center",
    render: (value) => `$${value.toFixed(2)}`,
  },
];

export default function CashReceivable() {
  const [filteredData, setFilteredData] = useState(data);

  return (
    <div style={{ width: "100%"}}>
      <div>
        <h1 className="text-[30px] font-bold mb-2">Cash Receivable</h1>
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
