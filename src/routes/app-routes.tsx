import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatBody from "../container/chat-body";
import { SocketProvider } from "../compoents/socket-engine/SocketContext";
import Onboarding from "../container/onboarding";
import Header from "../compoents/header";
import Footer from "../compoents/footer";

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path={"/chat/:id"}
            element={
              <>
                <Header />
                <ChatBody /> <Footer />
              </>
            }
          />
          <Route
            path={"/onboarding"}
            element={
              <>
                <Header />
                <Onboarding />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
