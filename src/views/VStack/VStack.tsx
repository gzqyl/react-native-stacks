import React from "react";
import { View } from "react-native";

import { VStackProps } from "../../types";
import { ALIGNMENT } from "../../constants";

export default function VStack({
  style,
  spacing,
  alignment = "center",
  children,
}: VStackProps) {
  return (
    <View
      style={[
        { flexDirection: "column", alignItems: ALIGNMENT[alignment] },
        style,
      ]}
    >
      {spacing && spacing !== 0
        ? React.Children.map(children, (child, index) => (
            <>
              {child}
              {index !== React.Children.count(children) - 1 && (
                <View style={{ height: spacing }} />
              )}
            </>
          ))
        : children}
    </View>
  );
}
