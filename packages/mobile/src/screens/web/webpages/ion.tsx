import React, { FunctionComponent } from "react";
import { WebpageScreen } from "../components/webpage-screen";

export const IONWebpageScreen: FunctionComponent = () => {
  return (
    <WebpageScreen
      name="ION"
      source={{ uri: "https://ion.wtf" }}
      originWhitelist={["https://ion.wtf"]}
    />
  );
};
