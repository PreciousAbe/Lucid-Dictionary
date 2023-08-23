import React from 'react';

const MeaningList = ({ mean }) => {
  // Add this line to provide a default empty array for `mean`
  mean = mean || [];

  return (
    <div className="text-cneter font-serif">
      { mean.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map((def) => (
            <div key={ def.definition }>
              <li>{ def.definition }</li>
              <hr />
            </div>
          ))
        )
      ) }
    </div>
  );
};

export default MeaningList;
