import React from 'react';
import {Rings} from 'react-loader-spinner';
import Spinner from './Spinner';

export const Loading = () => (
  <div className="flex justify-center items-center ">
    <Rings color="#00BFFF" height={80} width={80} />
  </div>
);

export default Spinner;




/*
import React from 'react';
//import Loader from 'react-loader-spinner';
import {Circles} from 'react-loader-spinner';


/*export const Loading = () => (
    <div className="flex justify-center items-center ">
      <Circles color="#00BFFF" height={80} width={80} />
    </div>
  );*/
/*
function Spinner({ message }) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Loader
        type="Circles"
        color="#00BFFF"
        height={50}
        width={200}
        className="m-5"
      />

      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
}

export default Spinner;
*/