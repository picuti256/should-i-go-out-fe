"use client";

import React, { useState } from "react";
import { PlaceholdersAndVanishInputDemo } from "./components/Input";
import { GlobeDemo } from "./components/Globe";
import { TextGenerateEffectDemo } from "./components/Response";
import { TextProvider } from "./context/TextContext";

const Chat: React.FC = () => {
  return (
    <TextProvider>
      <div className="bg-gradient-to-b from-slate-700 to-slate-900 items-center flex flex-col gap-5">
        <GlobeDemo />
        <PlaceholdersAndVanishInputDemo />
        <div className="w-1/2 text-center">{<TextGenerateEffectDemo />}</div>
      </div>
    </TextProvider>
  );
};

export default Chat;
