import { createContext, useEffect, useState } from "react";
import homem1 from "../assets/avatar/pele/homem-1.svg";
import homem2 from "../assets/avatar/pele/homem-2.svg";
import homem3 from "../assets/avatar/pele/homem-3.svg";
import mulher1 from "../assets/avatar/pele/mulher-1.svg";
import mulher2 from "../assets/avatar/pele/mulher-2.svg";
import mulher3 from "../assets/avatar/pele/mulher-3.svg";
import camisa1 from "../assets/avatar/camisa/camisa-1.svg";
import camisa2 from "../assets/avatar/camisa/camisa-2.svg";
import calca1 from "../assets/avatar/calca/calca-1.svg";
import calca2 from "../assets/avatar/calca/calca-2.svg";
import tenis1 from "../assets/avatar/tenis/tenis-1.svg";
import tenis2 from "../assets/avatar/tenis/tenis-2.svg";

export const AvatarContext = createContext({});

// eslint-disable-next-line react/prop-types
export const AvatarProvider = ({ children }) => {
  

  const avatarInfo = {
    pele: [
      homem1,
      homem2,
      homem3,
      mulher1,
      mulher2,
      mulher3,
    ],
    camisa: [
      "",
      camisa1,
      camisa2,
    ],
    calca: [
      "",
      calca1,
      calca2,
    ],
    tenis: [
      "",
      tenis1,
      tenis2,
    ],
  };

  const [avatar, setAvatar] = useState({
    pele: 0,
    camisa: 0,
    calca: 0,
    tenis: 0,
  });

  useEffect(() => {
    const avatarSaved = JSON.parse(localStorage.getItem("avatar"));
    if (avatarSaved) {
      setAvatar(avatarSaved);
    }
  }, [setAvatar]);

  const trocarAnterior = (caracteristica) => {
    setAvatar((prevAvatar) => {
      const newIndex =
        (prevAvatar[caracteristica] - 1 + avatarInfo[caracteristica].length) %
        avatarInfo[caracteristica].length;
      return { ...prevAvatar, [caracteristica]: newIndex };
    });
  };

  const trocarProximo = (caracteristica) => {
    setAvatar((prevAvatar) => {
      const newIndex =
        (prevAvatar[caracteristica] + 1) % avatarInfo[caracteristica].length;
      return { ...prevAvatar, [caracteristica]: newIndex };
    });
  };

  return (
    <AvatarContext.Provider
      value={{ avatar, avatarInfo, setAvatar, trocarAnterior, trocarProximo }}
    >
      {children}
    </AvatarContext.Provider>
  );
};
