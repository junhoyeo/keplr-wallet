import React, { FunctionComponent } from "react";
import { PageWithScrollView } from "../../../components/staging/page";
import { useStyle } from "../../../styles";
import { View } from "react-native";
import { Button } from "../../../components/staging/button";
import { useSmartNavigation } from "../../../navigation";
import { useRegisterConfig } from "@keplr-wallet/hooks";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../stores";

export const RegisterIntroScreen: FunctionComponent = observer(() => {
  const { keyRingStore } = useStore();

  const style = useStyle();

  const smartNavigation = useSmartNavigation();

  const registerConfig = useRegisterConfig(keyRingStore, []);

  return (
    <PageWithScrollView
      contentContainerStyle={style.get("flex-grow-1")}
      style={style.flatten(["padding-x-42"])}
    >
      <View style={style.flatten(["flex-1"])} />
      {/* TODO: Add the logo here */}
      <View style={style.flatten(["flex-1"])} />
      <Button
        containerStyle={style.flatten(["margin-bottom-16"])}
        text="I'm A New User"
        size="large"
        mode="light"
        onPress={() => {
          smartNavigation.navigateSmart("Register.NewUser", {
            registerConfig,
          });
        }}
      />
      <Button
        containerStyle={style.flatten(["margin-bottom-16"])}
        text="I'm Not A New User"
        size="large"
        onPress={() => {
          smartNavigation.navigateSmart("Register.NotNewUser", {
            registerConfig,
          });
        }}
      />
      <Button
        text="Import Ledger"
        size="large"
        mode="text"
        onPress={() => {
          smartNavigation.navigateSmart("Register.NewLedger", {
            registerConfig,
          });
        }}
      />

      <View style={style.flatten(["flex-1"])} />
    </PageWithScrollView>
  );
});