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

const DefaultScreen = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-[#edf7ff]">
    <p className="text-lg text-gray-600 mt-2">Waiting for content.</p>
  </div>
);

const ViewScreen = () => {
  const [socket, setSocket] = useState(null);
  const [currentPage, setCurrentPage] = useState("/view");

  useEffect(() => {
    const socketInstance = io(
      "https://mobily-backend-production.up.railway.app/"
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
  };

  return <div>{pageComponents[currentPage] || <DefaultScreen />}</div>;
};

export default ViewScreen;
