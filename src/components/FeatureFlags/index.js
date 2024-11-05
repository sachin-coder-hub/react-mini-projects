import { useContext } from "react";
import Accordian from "../Accordian";
import LightDarkMode from "../DarkLightTheme";
import QRCodeGen from "../QRCode";
import RandomColorGen from "../RandomColorGen";
import ScrollIndicator from "../ScrollIndicator";
import StarRating from "../StarRating";
import { FeatureFlagContext } from "./context";

export default function FeatureFlags() {
  const { enabledFlags } = useContext(FeatureFlagContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showStarRating",
      component: <StarRating noOfStars={10} />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColorGen />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showScrollIndicator",
      component: (
        <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      ),
    },
    {
      key: "showQrCode",
      component: <QRCodeGen />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  return (
    <div>
      <h1>Feature flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
