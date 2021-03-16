import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <tr>
        <td>
          <img
            src={spinner}
            alt='Loading....'
            style={{
              width: '400px',
              margin: 'auto',
              display: 'block',
              textAlign: 'center',
            }}
          />
        </td>
      </tr>
    </Fragment>
  );
};

export default Spinner;
