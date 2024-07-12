import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useRef, Suspense, useState, useEffect } from "react";

const Background = (props) => 
{
    const ref = useRef();
    const [sphere] = useState(() =>
    random.inSphere(new Float32Array(1000), { radius: 1.5 })
    );

    useEffect(() => 
    {
        if (ref.current) 
        {
            ref.current.rotation.set(0, 0, Math.PI / 4);
        }
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#854d0e"
          size={0.0035}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[0]">
    <Canvas className="pointer-events-none" camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <Background />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
