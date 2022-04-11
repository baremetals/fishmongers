/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {
  MainContainer,
  MainWrapper,
  OpeningHoursList,
} from './styles';

const Contact = ({ id, ...props }: any) => {
  return (
    <MainContainer id={id} {...props}>
      <MainWrapper>
        <div>
          <h3>Home delivery available</h3>
          <p>
            Local home delivery is available. Please use Deliveroo
            or Uber Eats.
          </p>
          <p>Email: info@fishmongersplaice.co.uk</p>
          <p>Telephone: 020 8768 2960</p>
          <div>
            <p>Opening hours</p>
            <OpeningHoursList>
              <li>Monday: closed</li>
              <li>Tuesday: 9am-4pm</li>
              <li>Wednesday: 9am-3pm</li>
              <li>Thursday: 9am-4pm</li>
              <li>Friday: 9am-4pm</li>
              <li>Saturday: 9am-4pm</li>
              <li>Sunday: closed</li>
            </OpeningHoursList>
          </div>
          <div>
            <img
              src='/assets/deliveroo.png'
              style={{ width: '200px' }}
              alt='deliveroo logo'
              // layout='fill'
            />
          </div>
          <div>
            <img
              src='/assets/uber-eats.webp'
              style={{ width: '200px' }}
              alt='Uber Eats logo'
            />
          </div>
        </div>
        <div className='mapouter'>
          <div className='gmap_canvas'>
            <iframe
              width='724'
              height='500'
              id='gmap_canvas'
              src='https://maps.google.com/maps?q=16%20Church%20Road%20Crystal%20Palace%20SE19%202ET&t=&z=13&ie=UTF8&iwloc=&output=embed'
              frameBorder='0'
              scrolling='no'
              marginHeight={0}
              marginWidth={0}
            ></iframe>
            <a href='https://2piratebay.org'></a>
            <br />

            {/* <style>
              .mapouter
              {{
                position: 'relative',
                textAlign: 'right',
                height: '500px',
                width: '724px',
              }}
            </style> */}

            {/* <style>
              .gmap_canvas{' '}
              {{
                overflow: 'hidden',
                background: 'none!important',
                height: '500px',
                width: '724px',
              }}
            </style> */}
          </div>
        </div>
        {/* </MainRow> */}
      </MainWrapper>
    </MainContainer>
  );
};

export default Contact;
