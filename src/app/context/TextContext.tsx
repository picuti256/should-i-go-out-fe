import { createContext, ReactNode, useContext, useState } from "react";

interface ITextContext {
  text: string;
  setInfoToText: (text: string) => void;
}

const TextContext = createContext<ITextContext | undefined>(undefined);

interface IProps {
  children: ReactNode;
}

export const TextProvider = ({ children }: IProps) => {
  const [text, setText] = useState("");

  const setInfoToText = (newText: string) => {
    setText(newText);
  };

  return (
    <TextContext.Provider value={{ text, setInfoToText }}>
      {children}
    </TextContext.Provider>
  );
};

export const useTextState = () => {
  const context = useContext(TextContext);
  if (context === undefined) {
    throw new Error("useTextState must be used within a TextProvider");
  }
  return context;
};
