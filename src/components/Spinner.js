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
              position: 'absolute',
              transform: 'translate(450%, -70%)',
              width: '100px',
            }}
          />
        </td>
      </tr>
    </Fragment>
  );
};

export default Spinner;
