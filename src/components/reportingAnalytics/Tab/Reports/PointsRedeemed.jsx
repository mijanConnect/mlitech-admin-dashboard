import React, { useState } from "react";
import { Table } from "antd";
import "antd/dist/reset.css";

// Sample data for points redeemed
const data = [
  {
    sl: 1,
    period: "2025-01",
    redemptions: 15,
    totalPointsRedeemed: 3200,
  },
  {
    sl: 2,
    period: "2025-02",
    redemptions: 10,
    totalPointsRedeemed: 2500,
  },
  {
    sl: 3,
    period: "2025-03",
    redemptions: 20,
    totalPointsRedeemed: 4500,
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
  { title: "Period", dataIndex: "period", key: "period", align: "center" },
  {
    title: "Redemptions",
    dataIndex: "redemptions",
    key: "redemptions",
    align: "center",
  },
  {
    title: "Total Points Redeemed",
    dataIndex: "totalPointsRedeemed",
    key: "totalPointsRedeemed",
    align: "center",
    render: (value) => value.toLocaleString(), // Format as a number with commas
  },
];

export default function PointsRedeemed() {
  const [filteredData, setFilteredData] = useState(data);

  return (
    <div style={{ width: "100%"}}>
      <div>
        <h1 className="text-[30px] font-bold mb-2">Points Redeemed</h1>
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
