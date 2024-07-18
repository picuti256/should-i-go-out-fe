"use client";

import React, { useState } from "react";
import { PlaceholdersAndVanishInputDemo } from "./components/Input";
import { GlobeDemo } from "./components/Globe";
import { TextGenerateEffectDemo } from "./components/Response";
import { TextProvider } from "./context/TextContext";


const Chat: React.FC = () => {
  return (
    <TextProvider>
      <div className="bg-blue-600 bg-gradient-to-b from-blue-700 to-blue-300 items-center flex flex-col">
        <div>
          <GlobeDemo />
        </div>
        <PlaceholdersAndVanishInputDemo />
        <div className="w-1/2 text-center">
          {<TextGenerateEffectDemo />}
        </div>
      </div>
    </TextProvider>
  );
};

export default Chat;
