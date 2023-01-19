import React, { useState } from "react";
import DistanceInput from "./DistanceInput";

interface DistanceType {
  value: number;
  distance: string;
}

const DistanceConverter = () => {
  const [dis, setDistance] = useState<DistanceType>({
    value: 1,
    distance: "miles",
  });
  const distance = dis.distance;
  const value = dis.value;
  const kilometers = distance === "miles" ? value * 1.6 : value;
  const miles = distance === "kilometers" ? value / 1.6 : value;
  console.log(kilometers, miles);
  return (
    <>
      <div>DistanceConverter</div>
      <div>
        <DistanceInput
          value={miles}
          distance="miles"
          convertMilestoKilometers={setDistance}
        />{" "}
        Miles
      </div>
      <div>
        <DistanceInput
          value={kilometers}
          distance="kilometers"
          convertMilestoKilometers={setDistance}
        />{" "}
        KM
      </div>
    </>
  );
};
export default DistanceConverter;
