import { createContext, useContext, useState, type Dispatch, type SetStateAction, type ReactNode } from "react";
import { type Favorite } from "../types/Favorite";

type AppContextType = {
  favorites: Favorite[];
  setFavorites: Dispatch<SetStateAction<Favorite[]>>;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  modalContent: ReactNode;
  setModalContent: Dispatch<SetStateAction<ReactNode>>;
};

type AppContextProviderProps = {
  children: ReactNode;
};

const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ReactNode>("");

  const contextValue: AppContextType = {
    favorites,
    setFavorites,
    isModalOpen,
    setIsModalOpen,
    modalContent,
    setModalContent,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
