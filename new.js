import React from 'react';
import Hoc from './Hoc';
import Auth from './Auth';

function New() {
  return (
    <Auth>
      <Hoc>
        <div>
          <p>Hello</p>
          <p>Authorization successful</p>
        </div>
      </Hoc>
    </Auth>
  );
}

export default New;
