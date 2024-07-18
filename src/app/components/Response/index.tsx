import React from "react";
import { TextGenerateEffect } from "../Ui/TextGenerate";
import { useTextState } from "@/app/context/TextContext";

export function TextGenerateEffectDemo() {
  const { text } = useTextState();
  return <TextGenerateEffect words={text} className="h-36" />;
}
