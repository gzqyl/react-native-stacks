import React from "react";
import { View } from "react-native";

import { ZStackProps } from "../../types";
import { ALIGNMENT } from "../../constants";

export default function ZStack({
  style,
  alignment = { vertical: "center", horizontal: "center" },
  children,
}: ZStackProps) {
  return (
    <View
      style={[
        {
          alignSelf: "center",
          alignItems: ALIGNMENT[alignment.horizontal],
          justifyContent: ALIGNMENT[alignment.vertical],
        },
        style,
      ]}
    >
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          ...child.props,
          style: {
            ...child.props.style,
            position: index === 0 ? "relative" : "absolute",
            zIndex: index,
          },
        })
      )}
    </View>
  );
}
