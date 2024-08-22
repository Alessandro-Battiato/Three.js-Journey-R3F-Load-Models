import React from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { DRACOLoader } from "three/examples/jsm/Addons.js";
import { useLoader } from "@react-three/fiber";

const Model = () => {
    const model = useLoader(
        GLTFLoader,
        // files in the public folder are available at the first level like this
        "./FlightHelmet/glTF/FlightHelmet.gltf", // in order to test the lazy loading model, we need to use the helmet instead of the burger because the burger loads way too fast, thanks also to the draco loader
        (loader) => {
            const dracoLoader = new DRACOLoader();
            dracoLoader.setDecoderPath("./draco/"); // only provide the folder
            loader.setDRACOLoader(dracoLoader);
        }
    );

    {
        /*To load models, you need to use the primitive tag*/
    }

    return <primitive object={model.scene} scale={5} position-y={-1} />;
};

export default Model;