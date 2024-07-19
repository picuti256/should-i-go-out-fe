"use client";

import { useState } from "react";
import { PlaceholdersAndVanishInput } from "../Ui/Input/index";
import { useTextState } from "@/app/context/TextContext";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = ["Name of the city."];
  let [city, setCity] = useState("");
  const { setInfoToText } = useTextState();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
    console.log(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = city;
    console.log(message);

    console.log("submitted", message);

    const response = await fetch("/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (response.ok) {
      const data = await response.json();
      setInfoToText(data);

      console.log("Data submitted successfully");
    } else {
      console.log("Failed to submit data");
    }
  };

  return (
    <div className="h-36 flex flex-col justify-center items-center px-4 mt-5">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
