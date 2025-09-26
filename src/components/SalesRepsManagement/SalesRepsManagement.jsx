import React, { useState } from "react";
import {
  Table,
  Button,
  Input,
  Tooltip,
  Switch,
  Rate,
  message,
  Form,
} from "antd";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import moment from "moment"; // Import Moment.js for date handling
import AddEditModal from "./custom/AddEditModal"; // Import the AddEditModal component
import ViewModal from "./custom/ViewModal";

const SalesRepsManagementTable = () => {
  const [data, setData] = useState([
    {
      id: 1,
      MarchantID: 55,
      name: "Alice Johnson",
      image: "https://i.ibb.co/8gh3mqPR/Ellipse-48-1.jpg",
      email: "example@email.com",
      phone: "+1234567890",
      businessName: "Alice's Store",
      website: "https://www.alicesstore.com",
      address: "123 Main St, New York, NY",
      servicesOffered: "Retail, E-commerce",
      tier: "Gold",
      subscriptionType: "Premium",
      lastPaymentDate: "2025-09-01",
      expiryDate: "2026-09-01",
      totalRevenue: "$10,000",
      retailer: 5,
      sales: "$300",
      status: "Active",
      location: "New York",
      feedback: 4,
    },
    {
      id: 2,
      MarchantID: 59,
      name: "John Doe",
      image: "https://i.ibb.co/8gh3mqPR/Ellipse-48-1.jpg",
      email: "john@email.com",
      phone: "+9876543210",
      businessName: "John's Shop",
      website: "https://www.johnsshop.com",
      address: "456 Oak St, California, CA",
      servicesOffered: "Fashion, Retail",
      tier: "Silver",
      subscriptionType: "Basic",
      lastPaymentDate: "2025-07-15",
      expiryDate: "2026-07-15",
      totalRevenue: "$5,000",
      retailer: 3,
      sales: "$500",
      status: "Inactive",
      location: "California",
      feedback: 3,
    },
    {
      id: 3,
      MarchantID: 85,
      name: "Jane Smith",
      image: "https://i.ibb.co/8gh3mqPR/Ellipse-48-1.jpg",
      email: "jane@email.com",
      phone: "+1112223333",
      businessName: "Jane's Boutique",
      website: "https://www.janesboutique.com",
      address: "789 Pine St, Texas, TX",
      servicesOffered: "Clothing, Accessories",
      tier: "Platinum",
      subscriptionType: "Premium",
      lastPaymentDate: "2025-08-10",
      expiryDate: "2026-08-10",
      totalRevenue: "$15,000",
      retailer: 4,
      sales: "$700",
      status: "Active",
      location: "Texas",
      feedback: 5,
    },
  ]);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false); // Separate state for Edit modal
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState("");

  // Define components inside the SalesRepsManagementTable component
  const components = {
    header: {
      row: (props) => (
        <tr
          {...props}
          style={{
            backgroundColor: "#f0f5f9",
            height: "50px",
            color: "secondary",
            fontSize: "18px",
            textAlign: "center",
            padding: "12px",
          }}
        />
      ),
      cell: (props) => (
        <th
          {...props}
          style={{
            color: "secondary",
            fontWeight: "bold",
            fontSize: "18px",
            textAlign: "center",
            padding: "12px",
          }}
        />
      ),
    },
  };

  // Show View Modal
  const showViewModal = (record) => {
    setSelectedRecord(record);
  };

  // Handle adding new merchant
  const handleAddMerchant = () => {
    form
      .validateFields()
      .then((values) => {
        const newMerchant = {
          id: data.length + 1,
          ...values,
          sales: values.sales || "$0",
          status: values.status || "Inactive",
          image: "https://i.ibb.co/8gh3mqPR/Ellipse-48-1.jpg",
        };
        setData([...data, newMerchant]);
        setIsAddModalVisible(false);
        form.resetFields();
        message.success("New merchant added successfully!");
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  // Handle updating existing merchant
  const handleUpdateMerchant = () => {
    form
      .validateFields()
      .then((values) => {
        const updatedMerchant = {
          ...selectedRecord,
          ...values,
        };
        setData(
          data.map((item) =>
            item.id === selectedRecord.id ? updatedMerchant : item
          )
        );
        setIsEditModalVisible(false); // Close the edit modal after update
        form.resetFields();
        message.success("Merchant updated successfully!");
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  // Show Add or Edit Modal based on the selected record
  const showAddOrEditModal = (record = null) => {
    // setSelectedRecord(record);
    if (record) {
      form.setFieldsValue({
        merchantName: record.id,
        email: record.email,
        subscriptionType: record.subscriptionType,
        lastPaymentDate: moment(record.lastPaymentDate), // Using moment.js to handle date
        expiryDate: moment(record.expiryDate), // Using moment.js to handle date
        tier: record.tier,
      });
      setIsEditModalVisible(true); // Open the Edit Modal when editing
    } else {
      form.resetFields();
      setIsAddModalVisible(true); // Open the Add Modal when adding
    }
  };

  const filteredData = data.filter(
    (item) =>
      item.MarchantID.toString().includes(searchText) ||
      item.businessName.toLowerCase().includes(searchText.toLowerCase()) ||
      item.phone.toLowerCase().includes(searchText.toLowerCase()) ||
      item.email.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    { title: "SL", dataIndex: "id", key: "id", align: "center" },
    {
      title: "Merchant Card ID",
      dataIndex: "MarchantID",
      key: "MarchantID",
      align: "center",
    },
    {
      title: "Business Name",
      dataIndex: "businessName",
      key: "businessName",
      align: "center",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
      align: "center",
    },
    { title: "Email", dataIndex: "email", key: "email", align: "center" },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      align: "center",
    },
    { title: "Sales Rep", dataIndex: "name", key: "salesRep", align: "center" },
    { title: "Total Sales", dataIndex: "sales", key: "sales", align: "center" },
    { title: "Status", dataIndex: "status", key: "status", align: "center" },
    {
      title: "Ratings",
      dataIndex: "feedback",
      key: "feedback",
      align: "center",
      render: (_, record) => (
        <Tooltip title="Customer Ratings">
          <Rate
            disabled
            value={record.feedback}
            style={{ fontSize: 16, color: "#FFD700" }}
          />
        </Tooltip>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <div
          className="flex gap-2 justify-between align-middle py-[7px] px-[15px] border border-primary rounded-md"
          style={{ alignItems: "center" }}
        >
          <Tooltip title="View Details">
            <button
              onClick={() => showViewModal(record)} // View modal
              className="text-primary hover:text-green-700 text-xl"
            >
              <IoEyeSharp />
            </button>
          </Tooltip>

          <Tooltip title="Edit">
            <button
              onClick={() => showAddOrEditModal(record)} // Edit modal
              className="text-primary hover:text-green-700 text-xl"
            >
              <FaEdit />
            </button>
          </Tooltip>

          <Tooltip title="Delete">
            <button
              onClick={() => {
                Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                  if (result.isConfirmed) {
                    setData(data.filter((item) => item.id !== record.id));
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your record has been deleted.",
                      icon: "success",
                    });
                  }
                });
              }}
              className="text-red-500 hover:text-red-700 text-md"
            >
              <FaTrash />
            </button>
          </Tooltip>

          <Switch
            size="small"
            checked={record.status === "Active"}
            style={{
              backgroundColor: record.status === "Active" ? "#3fae6a" : "gray",
            }}
            onChange={(checked) => {
              Swal.fire({
                title: "Are you sure?",
                text: `You are about to change status to ${
                  checked ? "Active" : "Inactive"
                }.`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, change it!",
              }).then((result) => {
                if (result.isConfirmed) {
                  setData((prev) =>
                    prev.map((item) =>
                      item.id === record.id
                        ? { ...item, status: checked ? "Active" : "Inactive" }
                        : item
                    )
                  );
                  Swal.fire({
                    title: "Updated!",
                    text: `Status has been changed to ${
                      checked ? "Active" : "Inactive"
                    }.`,
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false,
                  });
                }
              });
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <div className="flex justify-between md:flex-row flex-col md:items-end items-start gap-4 mb-6">
        <div>
          <h1 className="text-[24px] font-bold">Merchant Management</h1>
          <p className="text-[16px] font-normal mt-2">
            Effortlessly manage your merchants and track performance.
          </p>
        </div>

        <div className="flex md:flex-row flex-col items-start gap-2">
          <Input.Search
            placeholder="Search by ID, Business, Phone, Email"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 300 }}
            allowClear
          />
          <Button
            className="bg-primary text-white hover:!text-black"
            onClick={() => showAddOrEditModal()} // Add New Merchant
          >
            Add New Merchant
          </Button>
          <Button className="bg-primary text-white hover:!text-black">
            Export
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table
          dataSource={filteredData}
          columns={columns}
          pagination={{ pageSize: 10 }}
          bordered={false}
          size="small"
          rowClassName="custom-row"
          components={components}
          className="custom-table"
          scroll={{ x: "max-content" }}
        />
      </div>

      {/* View Modal */}
      {selectedRecord && (
        <ViewModal
          visible={Boolean(selectedRecord)}
          record={selectedRecord}
          onCancel={() => setSelectedRecord(null)}
        />
      )}

      {/* Add or Edit Merchant Modal */}
      <AddEditModal
        visible={isAddModalVisible || isEditModalVisible}
        selectedRecord={selectedRecord}
        form={form}
        handleAddMerchant={handleAddMerchant}
        handleUpdateMerchant={handleUpdateMerchant}
        setIsAddModalVisible={setIsAddModalVisible}
        setIsEditModalVisible={setIsEditModalVisible}
      />
    </div>
  );
};

export default SalesRepsManagementTable;
