import React, { useEffect, useState } from 'react';
import {  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, BarChart, Bar,  Area, ComposedChart, Tooltip } from 'recharts';
import { Col, Container, Row } from 'react-bootstrap';
const DashBoard = () => {
  const [info, setInfo] = useState([])
  useEffect(() => {
    fetch('./fakeData/chartsData.json')
      .then(res => res.json())
      .then(data => setInfo(data))
    console.log(info);
  },[])
    
    return (
          <div className='my-5'>
            <Container>
          <Row className='gy-5'>
            {/* link chart */}
                  <Col  className='d-flex justify-content-center' sm={12} lg={6}>
                      <ResponsiveContainer width="90%" height={400}>
                        <LineChart  data={info}>   
                          <Line type="monotone" dataKey="investment" stroke="#8884d8" strokeWidth={2} />
                          <Line type="monotone" dataKey="revenue" stroke="#82ca9d" strokeWidth={2} />
                          <Line type="monotone" dataKey={"sell"} stroke="#ccc" strokeWidth={2} />
                          <CartesianGrid stroke="#ccc" />  
                          <XAxis dataKey="month" />
                          <Tooltip></Tooltip>
                          <YAxis />
                          <Legend />
                        </LineChart>
                      </ResponsiveContainer>
                    </Col >
            {/* bar chart */}
                  <Col className='d-flex justify-content-center' sm={12} lg={6}>
                    <ResponsiveContainer width="90%" height={400}>  
                      <BarChart data={info}>
                      <XAxis dataKey="sell" />
                      <Tooltip></Tooltip>
                        <YAxis />
                        <Legend />
                        <Bar dataKey="revenue" fill="#8884d8" />
                        <Bar dataKey="investment" fill="#82ca9d" />
                      </BarChart>
                    </ResponsiveContainer>
                  </Col>
            {/* composed chart */}
                  <Col className='d-flex justify-content-center' sm={12} lg={6}>
                    <ResponsiveContainer width="90%" height={400}>  
                      <ComposedChart data={info}>
                        <XAxis dataKey="month" />
                        <Tooltip></Tooltip>                
                        <YAxis />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                        <Area type="monotone" dataKey="revenue" fill="#82ca9d" stroke="#82ca9d" />
                        <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
                      </ComposedChart> 
                      </ResponsiveContainer>
                  </Col>
              </Row>
            </Container>    
          </div>
    );
};

export default DashBoard;