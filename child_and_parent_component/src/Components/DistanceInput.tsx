import React from "react";

type Props = {
  value: number;
  distance: "miles" | "kilometers";
  convertMilestoKilometers: Function;
};

const DistanceInput = ({ value, distance, convertMilestoKilometers }: Props) => {
  return (
    <>
      <input
        value={value}
        onChange={(e) =>
          convertMilestoKilometers({ value: e.target.value, distance: distance })
        }
      ></input>
    </>
  );
};
export default DistanceInput;
