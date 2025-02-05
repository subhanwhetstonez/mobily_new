"use client";

import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import DataCenter from "./DataCenter";
import Tower from "./tower";
import InternetExchange from "./internetExchnage";
import GlobalPoints from "./globalPoints";
import KSA from "./ksaTerrestrial";
import BorderPage from "./borderInterconnectPoint";
import LandingStation from "./landingStation";
import EcoSystem from "./exchnageEcosystem";
import SubmarineCableSystem from "./SubmarineCableSystem";
import AAE1Cable from "./AAE1Cable";
import Africa1 from "./Africa1";
import TGNAsia from "./TGNAsia";
import SMW from "./SMW";
import TGNCable from "./TGNCable";
import RCN from "./RCN";
import MobileCable from "./MobileCable";
import InternetGateways from "./InternetGateway";

const DefaultScreen = () => {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const socketInstance = io(
      "https://mobily-backend-production.up.railway.app/",
      {
        transports: ["websocket", "polling"],
        withCredentials: true,
      }
    );
    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  const handleMenuClick = (url) => {
    if (socket) {
      console.log("Emitting navigate with link:", url);
      socket.emit("navigate", { link: url });
    } else {
      console.log("Socket not initialized yet");
    }
  };
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
    <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      style={{
        background: 'url("/pages/globe_main.mp4")',
        backgroundPosition:'center center',
        backgroundSize: 'cover',
      }}
    >
  </video>
  </div>
  

  );
};

const ViewScreen = () => {
  const [socket, setSocket] = useState(null);
  const [currentPage, setCurrentPage] = useState("/view");

  useEffect(() => {
    const socketInstance = io(
      "http://localhost:8080/"
    );
    setSocket(socketInstance);

    socketInstance.emit("joinRoom", currentPage);

    socketInstance.on("redirect", (data) => {
      setCurrentPage(data.link);
    });

    return () => {
      socketInstance.disconnect();
    };
  }, [currentPage]);

  const pageComponents = {
    "/terrestrial-ksa": <KSA />,
    "/terrestrial-border": <BorderPage />,
    "/data-centers": <DataCenter />,
    "/landing-stations": <LandingStation />,
    "/towers": <Tower />,
    "/global-points": <GlobalPoints />,
    "/jedddah_exchange-internet": <InternetExchange />,
    "/jedddah_exchange-ecosystem": <EcoSystem />,
    "/submarine-home": <SubmarineCableSystem />,
    "/submarine-aae1": <AAE1Cable />,
    "/submarine-africa1": <Africa1 />,
    "/submarine-eurasia": <TGNAsia />,
    "/submarine-smw": <SMW />,
    "/submarine-tgn": <TGNCable />,
    "/submarine-rcn": <RCN />,
    "/submarine-mobily": <MobileCable />,
    "/internet-gateways": <InternetGateways />,
    "/home": <DefaultScreen />,
  };

  return <div>{pageComponents[currentPage] || <DefaultScreen />}</div>;
};

export default ViewScreen;
