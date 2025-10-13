import { Modal, Table } from "antd";
import MarchantIcon from "../../../assets/marchant.png"; // Adjust path if needed

const columns2 = [
  {
    title: "SL",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Subscription Type",
    dataIndex: "subscriptionType", // Assuming you have 'subscriptionType' field in your data
    key: "subscriptionType",
  },
  {
    title: "Date",
    dataIndex: "lastPaymentDate", // Ensure your data includes a 'date' field
    key: "lastPaymentDate",
  },
  {
    title: "Expire Date",
    dataIndex: "expiryDate", // Ensure your data includes an 'expiryDate' field
    key: "expiryDate",
  },
  {
    title: "Total Revenue",
    dataIndex: "totalRevenue", // Ensure your data includes a 'totalRevenue' field
    key: "totalRevenue",
  },
  {
    title: "Total Points Earned",
    dataIndex: "totalPointsEarned",
    key: "totalPointsEarned",
  },
  {
    title: "Total Points Redeemed",
    dataIndex: "totalPointsRedeemed",
    key: "totalPointsRedeemed",
  },
  {
    title: "Total Points Pending",
    dataIndex: "totalPointsPending",
    key: "totalPointsPending",
  },
  {
    title: "Total Visits",
    dataIndex: "totalVisits",
    key: "totalVisits",
  },
];

const ViewModal = ({ visible, record, onCancel }) => {
  return (
    <Modal visible={visible} onCancel={onCancel} width={1000} footer={[]}>
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between gap-3 mt-8 mb-8">
          <img
            src={MarchantIcon} // Use the image URL from the selectedRecord
            alt={record.name}
            className="w-214 h-214 rounded-full" // Fixed width and height for the image
          />
          <div className="flex flex-col gap-2 w-full border border-primary rounded-md p-4">
            <p className="text-[22px] font-bold text-primary">
              Marchant Profile
            </p>
            <p>
              <strong>Name:</strong> {record.name}
            </p>
            <p>
              <strong>Business Name:</strong> {record.businessName}
            </p>
            <p>
              <strong>Email:</strong> {record.email}
            </p>
            <p>
              <strong>Phone:</strong> {record.phone}
            </p>
            <p>
              <strong>Location:</strong> {record.location}
            </p>
            <p>
              <strong>Total Sales:</strong> {record.sales}
            </p>
            <p>
              <strong>Status:</strong> {record.status}
            </p>
            {/* <p>
              <strong>Total Points Earned:</strong> {record.totalPointsEarned}
            </p>
            <p>
              <strong>Total Points Redeemed:</strong>{" "}
              {record.totalPointsRedeemed}
            </p>
            <p>
              <strong>Total Points Pending:</strong> {record.totalPointsPending}
            </p>
            <p>
              <strong>Total Visits:</strong> {record.totalVisits}
            </p> */}
            <p>
              <strong>Website:</strong>{" "}
              <a
                href={record.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {record.website}
              </a>
            </p>
            <p>
              <strong>Address:</strong> {record.address}
            </p>
            <p>
              <strong>Services Offered:</strong> {record.servicesOffered}
            </p>
            <p>
              <strong>Tier:</strong> {record.tier}
            </p>
            <p>
              <strong>Subscription Type:</strong> {record.subscriptionType}
            </p>
            <p>
              <strong>Last Payment Date:</strong> {record.lastPaymentDate}
            </p>
            <p>
              <strong>Expiry Date:</strong> {record.expiryDate}
            </p>
            <p>
              <strong>Total Revenue:</strong> {record.totalRevenue}
            </p>
          </div>
        </div>
        <Table
          columns={columns2}
          dataSource={[record]} // Pass the current record data to the table
          pagination={false}
          rowKey="id"
          className="mt-6"
        />
      </div>
    </Modal>
  );
};

export default ViewModal;
