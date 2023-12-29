import React from "react";
import { careerCollage } from "../../assets/data";
import arrows from "../../assets/career-arrows.png";
import { Grid } from "@mui/material";
import Image from "next/image";

const Collage = () => {
  return (
    <>
      {/* Collage for big screens */}
      <div class="career h-[90vh] lg:p-14 md:px-5 md:py-14 relative hidden md:grid">
        {careerCollage.map((col, i) => (
          <div
            className={`career${i + 1} bg-cover bg-no-repeat m-2 rounded-md`}
            key={i}
            style={{ backgroundImage: `url(${col.src})` }}
          />
        ))}
        <div className="absolute top-0 lg:right-12 md:right-5">
          <Image src={arrows} alt="arrows" className="lg:h-56 md:h-28 w-auto" />
        </div>
      </div>
      {/* Collage for mobile screen */}
      <Grid container className="min-h-screen py-14 px-4 md:hidden">
        <Grid item xs={12} className=" flex items-center justify-center">
          <Image
            src={careerCollage[0]}
            alt="collage"
            className="h-full p-2 rounded-md"
          />
        </Grid>
        <Grid item xs={6} className=" flex items-center justify-center">
          <Image
            src={careerCollage[1]}
            alt="collage"
            className="h-full p-2 rounded-md"
          />
        </Grid>
        <Grid item xs={6} className=" flex items-center justify-center">
          <Image
            src={careerCollage[2]}
            alt="collage"
            className="h-full p-2 rounded-md"
          />
        </Grid>
        <Grid item xs={12} className=" flex items-center justify-center">
          <Image
            src={careerCollage[3]}
            alt="collage"
            className="h-full p-2 rounded-md"
          />
        </Grid>
        <Grid item xs={6} className=" flex items-center justify-center">
          <Image
            src={careerCollage[4]}
            alt="collage"
            className="h-full p-2 rounded-md"
          />
        </Grid>
        <Grid item xs={6} className=" flex items-center justify-center">
          <Image
            src={careerCollage[5]}
            alt="collage"
            className="h-full p-2 rounded-md"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Collage;
