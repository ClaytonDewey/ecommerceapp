import React, { useState } from 'react'
import './App.css'
import { Input, Button } from 'antd'

import { API } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'

const initialState = {
  name: '', price: ''
}

const Admin = () => {
  const [itemInfo, updateItemInfo] = useState(initialState);
  const updateForm = (e) => {
    const formData = {
      ...itemInfo,
      [e.target.name]: e.target.value,
    };
    updateItemInfo(formData);
  };

  const addItem = async () => {
    try {
      const data = {
        body: { ...itemInfo, price: parseInt(itemInfo.price) },
      };
      updateItemInfo(initialState);
      await API.post('ecommerceapi', '/products', data);
    } catch (err) {
      console.error('error adding item...');
    }
  };
  return (
    <Authenticator>
      <div style={containerStyle}>
        <Input
          name='name'
          onChange={updateForm}
          value={itemInfo.name}
          placeholder='Item name'
          style={inputStyle}
        />
        <Input
          name='price'
          onChange={updateForm}
          value={itemInfo.price}
          style={inputStyle}
          placeholder='item price'
        />
        <Button style={buttonStyle} onClick={addItem}>
          Add Product
        </Button>
      </div>
    </Authenticator>
  );
};

const containerStyle = { width: 400, margin: '20px auto' };
const inputStyle = { marginTop: 10 };
const buttonStyle = { marginTop: 10 };

export default Admin;