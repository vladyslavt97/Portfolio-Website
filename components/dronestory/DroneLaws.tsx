import Link from "next/link";
import React from "react";

type Props = {};

export default function DroneLaws({}: Props) {
  return (
    <div className=" md:px-52 pb-52">
      <h1 className="text-center font-bold text-2xl my-5">Drone Laws</h1>

      <h2 className="py-5 text-lg font-bold">
        The laws have changed a lot in the past years:
      </h2>
      <ul className=" list-decimal flex flex-col gap-5">
        <li>Insurance - 10 cents/day or 39,96 per year</li>
        <li>
          You need an{" "}
          <Link
            href="https://www.dronelicense.eu/products/eu-drone-license-start"
            className="text-blue-500 font-bold italic"
          >
            EU Drone Certificate
          </Link>{" "}
          before flying a drone. The EU Drone Licence has two certificates: the
          basic certificate and the supplementary certificate. A1-A3 is the
          basic certificate. If you want to fly a drone in Germany, you need to
          obtain this certificate from
          <b className="px-2 text-lg">250 grams</b>.
        </li>
        <li>
          Drones may not fly above 100 meters (328 feet) without a permit. In
          controlled airspace, the maximum altitude allowed is 50 meters (164
          feet). Drone pilots must maintain a direct line of sight with their
          drones at all times.
        </li>
        <li>
          All drones weighing 250 grams (.55 pounds) or more must be labeled
          with a fireproof badge containing the name and address of the drone
          owner/operator.
        </li>
        <li>
          Drones may not be flown within 1.5 kilometers (.93 miles) or closer to
          an airport. Can not be flown over crowds, industrial areas, disaster
          areas, prisons, residential areas, certain traffic routes, and several
          other areas designated as sensitive. Not allowed above and at a
          lateral distance of 100 meters from federal highways, federal
          waterways, and railway facilities.
        </li>
      </ul>
    </div>
  );
}
