import React from "react";
import { Modal, Form, Input, Select, DatePicker } from "antd";

const AddEditModal = ({
  visible, // parent passes a boolean
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
      open={visible} // AntD v5
      title={selectedRecord ? "Edit Merchant" : "Add New Merchant"}
      onCancel={handleCancel}
      onOk={selectedRecord ? handleUpdateMerchant : handleAddMerchant}
      okText={selectedRecord ? "Update Merchant" : "Add Merchant"}
      destroyOnClose
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="merchantName"
          label="Merchant Card ID"
          rules={[{ required: true, message: "Please enter Merchant Card ID" }]}
        >
          <Input
            placeholder="Enter Merchant Card ID"
            className="mli-tall-input"
          />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email Address"
          rules={[{ required: true, message: "Please enter email address" }]}
        >
          <Input placeholder="Enter email address" className="mli-tall-input" />
        </Form.Item>

        <Form.Item
          name="subscriptionType"
          label="Subscription Type"
          rules={[
            { required: true, message: "Please select subscription type" },
          ]}
        >
          <Select
            placeholder="Select subscription type"
            className="mli-tall-select"
          >
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
            className="mli-tall-picker"
            format="YYYY-MM-DD"
            // no defaultValue — Form controls it (set via form.setFieldsValue in parent)
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
            className="mli-tall-picker"
            format="YYYY-MM-DD"
          />
        </Form.Item>

        <Form.Item
          name="tier"
          label="Tier"
          rules={[{ required: true, message: "Please select tier" }]}
        >
          <Select placeholder="Select tier" className="mli-tall-select">
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
