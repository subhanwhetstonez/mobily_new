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

const ViewScreen = () => {
  const [socket, setSocket] = useState(null);
  const [currentPage, setCurrentPage] = useState("/view");

  useEffect(() => {
    const socketInstance = io("http://192.168.0.109:8080");
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
    "/terrestrial-ksa": (
      <div>
        <KSA />
      </div>
    ),
    "/terrestrial-border": (
      <div>
        <BorderPage />
      </div>
    ),
    "/data-centers": (
      <div>
        <DataCenter />
      </div>
    ),
    "/landing-stations": (
      <div>
        <LandingStation />
      </div>
    ),
    "/towers": (
      <div>
        <Tower />
      </div>
    ),
    "/global-points": (
      <div>
        <GlobalPoints />
      </div>
    ),
    "/jedddah_exchange-internet": (
      <div>
        <InternetExchange />
      </div>
    ),
    "/jedddah_exchange-ecosystem": (
      <div>
        <EcoSystem />
      </div>
    ),
    "/towers": (
      <div>
        <Tower />
      </div>
    ),
    "/submarine-home": (
      <div>
        <SubmarineCableSystem />
      </div>
    ),
    "/submarine-aae1": (
      <div>
        <AAE1Cable />
      </div>
    ),
    "/submarine-africa1": (
      <div>
        <Africa1 />
      </div>
    ),
    "/submarine-eurasia": (
      <div>
        <TGNAsia />
      </div>
    ),
    "/submarine-smw": (
      <div>
        <SMW />
      </div>
    ),
    "/submarine-tgn": (
      <div>
        <TGNCable />
      </div>
    ),
    "/submarine-rcn": (
      <div>
        <RCN />
      </div>
    ),
    "/submarine-mobily": (
      <div>
        <MobileCable />
      </div>
    ),
  };

  return <div>{pageComponents[currentPage]}</div>;
};

export default ViewScreen;
