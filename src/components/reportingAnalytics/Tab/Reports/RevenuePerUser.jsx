import React, { useState } from "react";
import { Table } from "antd";
import "antd/dist/reset.css";

// Sample data for revenue per user
const data = [
  {
    sl: 1,
    customers: "Alice",
    transactions: 120,
    totalRevenue: 3000.5,
  },
  {
    sl: 2,
    customers: "Jhon",
    transactions: 95,
    totalRevenue: 2200.0,
  },
  {
    sl: 3,
    customers: "Doe",
    transactions: 150,
    totalRevenue: 5000.0,
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
    title: "Customers",
    dataIndex: "customers",
    key: "customers",
    align: "center",
  },
  {
    title: "Transactions",
    dataIndex: "transactions",
    key: "transactions",
    align: "center",
  },
  {
    title: "Total Revenue",
    dataIndex: "totalRevenue",
    key: "totalRevenue",
    align: "center",
    render: (value) => `$${value.toFixed(2)}`,
  },
];

export default function RevenuePerUser() {
  const [filteredData, setFilteredData] = useState(data);

  return (
    <div style={{ width: "100%" }}>
      <div>
        <h1 className="text-[30px] font-bold mb-2">Revenue Per User</h1>
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
