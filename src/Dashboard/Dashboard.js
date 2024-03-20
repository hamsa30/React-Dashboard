import React from 'react';
import { Button, Input, Container, Stack, Card } from '@mantine/core';
import { FiHome, FiUsers, FiAlertCircle } from 'react-icons/fi';
import { useState } from 'react';
import { Group, Code } from '@mantine/core';
import logOutIcon from '../images/logout.png'
import Navbar from './Navbar';
import stackEmail from '../images/email-icon.png'
import mailIcon from '../images/mail-icon.png'
import smsIcon from '../images/sms.png'
import speakerIcon from '../images/speaker.png'
import dots from '../images/dots-icon.png'

function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <Navbar />

      {/* Main content */}
       <Container my="xl" size="xl" className='wd100'>
        <div className="row rowSignOut">
         <Button variant="filled" className='button'><img src={logOutIcon} className='signP'/> Sign Out</Button>
        </div>
       <h2 className='head-font'>Subscribers</h2>
       <Group position="center" spacing="sm" className='groupInput'>
        <Input 
          placeholder="Type something..." 
        />
        <Button variant="primary" className='inputBtn'>
          New Subscriber
        </Button>
    </Group>

    <Stack
      h={300}
      className='stackMargin'
    >
      <Card variant="default" className='pdStack p-10'>
        <div className='inner-content-col'>
        <img src={stackEmail} className='stackIconWidth'/>
        <span className='twoLines pl-10'>
          <p>Deduce</p>
          <p>12323232</p>
        </span>
        </div>
        <div className='inner-content-col'>
        <img src={mailIcon} className='stackIconWidth'/>
        <span className='twoLines pl-10'>
          <p>24</p>
          <p>Services</p>
        </span>
        <span className='twoLines pl-10'>
          <p>800</p>
          <p>Users</p>
        </span>
        </div>

        
        <div className='inner-content-col'>
        <img src={smsIcon} className='stackIconWidth'/>
        <span className='twoLines pl-10'>
          <p>24</p>
          <p>Services</p>
        </span>
        <span className='twoLines pl-10'>
          <p>800</p>
          <p>Users</p>
        </span>
        </div>

        <div className='inner-content-col'>
        <img src={speakerIcon} className='stackIconWidth'/>
        <span className='twoLines pl-10'>
          <p>24</p>
          <p>Services</p>
        </span>
        <span className='twoLines pl-10'>
          <p>800</p>
          <p>Users</p>
        </span>
        </div>

        <div className='inner-content-col'>
        <img src={dots} className='hAuto'/>

        </div>
      </Card>
      <Card variant="default" className='pdStack p-10'>
        <div className='inner-content-col'>
        <img src={stackEmail} className='stackIconWidth'/>
        <span className='twoLines pl-10'>
          <p>Deduce</p>
          <p>12323232</p>
        </span>
        </div>
        <div className='inner-content-col'>
        <img src={mailIcon} className='stackIconWidth'/>
        <span className='twoLines pl-10'>
          <p>24</p>
          <p>Services</p>
        </span>
        <span className='twoLines pl-10'>
          <p>800</p>
          <p>Users</p>
        </span>
        </div>

        
        <div className='inner-content-col'>
        <img src={smsIcon} className='stackIconWidth'/>
        <span className='twoLines pl-10'>
          <p>24</p>
          <p>Services</p>
        </span>
        <span className='twoLines pl-10'>
          <p>800</p>
          <p>Users</p>
        </span>
        </div>

        <div className='inner-content-col'>
        <img src={speakerIcon} className='stackIconWidth'/>
        <span className='twoLines pl-10'>
          <p>24</p>
          <p>Services</p>
        </span>
        <span className='twoLines pl-10'>
          <p>800</p>
          <p>Users</p>
        </span>
        </div>

        <div className='inner-content-col'>
        <img src={dots} className='hAuto'/>

        </div>
      </Card>
      <Card variant="default" className='pdStack p-10'>
        <div className='inner-content-col'>
        <img src={stackEmail} className='stackIconWidth'/>
        <span className='twoLines pl-10'>
          <p>Deduce</p>
          <p>12323232</p>
        </span>
        </div>
        <div className='inner-content-col'>
        <img src={mailIcon} className='stackIconWidth'/>
        <span className='twoLines pl-10'>
          <p>24</p>
          <p>Services</p>
        </span>
        <span className='twoLines pl-10'>
          <p>800</p>
          <p>Users</p>
        </span>
        </div>

        
        <div className='inner-content-col'>
        <img src={smsIcon} className='stackIconWidth'/>
        <span className='twoLines pl-10'>
          <p>24</p>
          <p>Services</p>
        </span>
        <span className='twoLines pl-10'>
          <p>800</p>
          <p>Users</p>
        </span>
        </div>

        <div className='inner-content-col'>
        <img src={speakerIcon} className='stackIconWidth'/>
        <span className='twoLines pl-10'>
          <p>24</p>
          <p>Services</p>
        </span>
        <span className='twoLines pl-10'>
          <p>800</p>
          <p>Users</p>
        </span>
        </div>

        <div className='inner-content-col'>
        <img src={dots} className='hAuto'/>

        </div>
      </Card>
    </Stack>
      </Container>
    </div>
  );
}


export default Dashboard;
