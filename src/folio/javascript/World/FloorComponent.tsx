import { Plane } from "@react-three/drei";
import { useControls } from "leva";

export default function FloorComponent() {
  const { topLeftColor, topRightColor, bottomLeftColor, bottomRightColor } =
    useControls(
      "Floor",
      {
        topLeftColor: "#D0CECE",
        topRightColor: "#D0CECE",
        bottomLeftColor: "white",
        bottomRightColor: "#D0CECE"    
      },
      { collapsed: true, color: "#D0CECE" }
    );

  return (
    <Plane args={[2, 2]} frustumCulled={false} matrixAutoUpdate={false}>
      <floorMaterial
        topLeftColor={topLeftColor}
        topRightColor={topRightColor}
        bottomRightColor={bottomRightColor}
        bottomLeftColor={bottomLeftColor}
      />
    </Plane>
  );
}
