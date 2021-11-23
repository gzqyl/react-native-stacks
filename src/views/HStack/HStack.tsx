import React from "react";
import { View } from "react-native";

import { HStackProps } from "../../types";
import { ALIGNMENT } from "../../constants";

export default function HStack({
  style,
  spacing,
  alignment = "center",
  children,
}: HStackProps) {
  return (
    <View
      style={[
        { flexDirection: "row", alignItems: ALIGNMENT[alignment] },
        style,
      ]}
    >
      {spacing && spacing !== 0
        ? React.Children.map(children, (child, index) => (
            <>
              {child}
              {index !== React.Children.count(children) - 1 && (
                <View style={{ width: spacing }} />
              )}
            </>
          ))
        : children}
    </View>
  );
}
