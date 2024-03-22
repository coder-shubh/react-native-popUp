import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet as RNStyleSheet,
  Text,
  Modal,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/AntDesign";

export function useCommonImports() {
  return {
    React,
    useState: React.useState,
    View,
    TouchableOpacity,
    StyleSheet: RNStyleSheet,
    MaterialIcons,
    Text,
    Modal,
  };
}
