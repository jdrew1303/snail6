import Appearance from "../components/Appearance";
import Blood from "../components/Blood";
import isBoneless from "../components/isBoneless";
import Brain from "../components/Brain";
import CanAbsorb from "../components/CanAbsorb";
import Health from "../components/Health";
import Position from "../components/Position";
import { colors } from "../lib/graphics";
import Layer400 from "../components/Layer400";
import IsBlocking from "../components/IsBlocking";
import Name from "../components/Name";

export default {
  name: "GelatinousCubePrefab",

  components: [
    {
      type: Appearance,
      properties: {
        color: "",
        char: "",
        background: colors.gelatinousCube,
      },
    },
    { type: Blood, properties: { color: colors.gelatinousCube } },
    { type: Brain, properties: { ai: "gelatinousCube" } },
    { type: CanAbsorb },
    { type: Health, properties: { current: 100, max: 100 } },
    { type: IsBlocking },
    { type: isBoneless },
    { type: Layer400 },
    { type: Name, properties: { nomen: "gelatinousCube" } },
    { type: Position },
  ],
};
