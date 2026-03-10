import { COUNTRIES } from "@/lib/data";
import React from "react";
import NationalMoviesList from "../common/NationalMoviesList";
import Section from "../ui/Section";

const NationalMovies = () => {
  return (
    <Section id="nations" className="p-0! bg-background">
      <div className="flex flex-col w-full ">
        {COUNTRIES.map((country) => (
          <NationalMoviesList
            key={country.code}
            countryCode={country.code}
            countryName={country.name}
            color={country.color}
          />
        ))}
      </div>
    </Section>
  );
};

export default NationalMovies;
