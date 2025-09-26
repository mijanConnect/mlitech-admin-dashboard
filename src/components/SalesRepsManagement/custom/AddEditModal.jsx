import React from "react";
import { Modal, Form, Input, Select, DatePicker } from "antd";
import moment from "moment"; // Import Moment.js for date handling

const AddEditModal = ({
  visible,
  selectedRecord,
  form,
  handleAddMerchant,
  handleUpdateMerchant,
  setIsAddModalVisible,
  setIsEditModalVisible,
}) => {
  const handleCancel = () => {
    setIsAddModalVisible(false);
    setIsEditModalVisible(false);
  };

  return (
    <Modal
      visible={visible}
      title={selectedRecord ? "Edit Merchant" : "Add New Merchant"}
      onCancel={handleCancel}
      onOk={selectedRecord ? handleUpdateMerchant : handleAddMerchant}
      okText={selectedRecord ? "Update Merchant" : "Add Merchant"}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="merchantName"
          label="Merchant Card ID"
          rules={[{ required: true, message: "Please enter Merchant Card ID" }]}
        >
          <Input placeholder="Enter Merchant Card ID" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email Address"
          rules={[{ required: true, message: "Please enter email address" }]}
        >
          <Input placeholder="Enter email address" />
        </Form.Item>
        <Form.Item
          name="subscriptionType"
          label="Subscription Type"
          rules={[
            { required: true, message: "Please select subscription type" },
          ]}
        >
          <Select placeholder="Select subscription type">
            <Select.Option value="basic">Basic</Select.Option>
            <Select.Option value="premium">Premium</Select.Option>
            <Select.Option value="enterprise">Enterprise</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="lastPaymentDate"
          label="Last Payment Date"
          rules={[
            { required: true, message: "Please select last payment date" },
          ]}
        >
          <DatePicker
            placeholder="Select last payment date"
            style={{ width: "100%" }}
            defaultValue={
              selectedRecord && moment(selectedRecord.lastPaymentDate)
            }
          />
        </Form.Item>
        <Form.Item
          name="expiryDate"
          label="Expiry Date"
          rules={[{ required: true, message: "Please select expiry date" }]}
        >
          <DatePicker
            placeholder="Select expiry date"
            style={{ width: "100%" }}
            defaultValue={selectedRecord && moment(selectedRecord.expiryDate)}
          />
        </Form.Item>
        <Form.Item
          name="tier"
          label="Tier"
          rules={[{ required: true, message: "Please select tier" }]}
        >
          <Select placeholder="Select tier">
            <Select.Option value="gold">Gold</Select.Option>
            <Select.Option value="silver">Silver</Select.Option>
            <Select.Option value="bronze">Bronze</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddEditModal;
