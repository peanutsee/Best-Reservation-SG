/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProportions } from '../Redux/actions';
import ProportionTable from './ProportionTable';

function Proportions() {
  const dispatch = useDispatch();
  const getProps = useSelector((state) => state.getProportionsReducer);
  const { loading, error, proportions } = getProps;
  const params = useParams();

  useEffect(() => {
    if (!proportions) {
      dispatch(getProportions(params.id));
    }
  }, [proportions]);

  return (
    <>
      <h1 className="text-left">
        <strong>Proportions</strong>
      </h1>
      <p className="text-left">
        Please view the submitted proportions.
        <br />
        If everything seems fine, accept the proportion to split the bill!
      </p>
      {loading ? (
        <h1>Loading Proportions...</h1>
      ) : error ? (
        <h1>Error Loading Proportions...</h1>
      ) : proportions && proportions.length !== 0 ? (
        <>
          {proportions.map((proportion) => (
            <ProportionTable proportion={proportion} />
          ))}
        </>
      ) : null}
    </>
  );
}

export default Proportions;
