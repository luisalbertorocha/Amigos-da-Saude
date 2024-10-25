import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/home.jsx";
import Personagem from "./pages/personagem.jsx";
import Quiz from "./pages/quiz.jsx";
import QuizArduino from "./pages/quizArduino.jsx";
import Videos from "./pages/videos.jsx";
import VideoPage from "./pages/videoPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AvatarProvider } from "./context/AvatarProvider.jsx";
import { ExamesProvider } from "./context/ExamesProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "personagem", element: <Personagem /> },
      { path: "quizArduino", element: <QuizArduino /> },
      { path: "quiz/:id", element: <Quiz /> },
      { path: "videos/", element: <Videos /> },
      { path: "/videos/:id", element: <VideoPage /> },
      // { path: '*',element: <PageNotFound/>},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AvatarProvider>
        <ExamesProvider>
          <RouterProvider router={router} />
        </ExamesProvider>
    </AvatarProvider>
  </StrictMode>,
);
