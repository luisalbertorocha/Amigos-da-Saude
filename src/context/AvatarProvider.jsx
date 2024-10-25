import { createContext, useEffect, useState } from "react";

export const AvatarContext = createContext({});

// eslint-disable-next-line react/prop-types
export const AvatarProvider = ({ children }) => {
  

  const avatarInfo = {
    pele: [
      "/src/assets/avatar/pele/homem-1.svg",
      "/src/assets/avatar/pele/homem-2.svg",
      "/src/assets/avatar/pele/homem-3.svg",
      "/src/assets/avatar/pele/mulher-1.svg",
      "/src/assets/avatar/pele/mulher-2.svg",
      "/src/assets/avatar/pele/mulher-3.svg",
    ],
    camisa: [
      "",
      "/src/assets/avatar/camisa/camisa-1.svg",
      "/src/assets/avatar/camisa/camisa-2.svg",
    ],
    calca: [
      "",
      "/src/assets/avatar/calca/calca-1.svg",
      "/src/assets/avatar/calca/calca-2.svg",
    ],
    tenis: [
      "",
      "/src/assets/avatar/tenis/tenis-1.svg",
      "/src/assets/avatar/tenis/tenis-2.svg"
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
