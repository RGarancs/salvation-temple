import { bordeauxTextureImage } from "@/styles/bordeaux";

/** Texture overlay for bordeaux cards. Render as a child of a `relative` container. */
export const BordeauxOverlay = () => (
  <div
    className="absolute inset-0 opacity-20 rounded-2xl"
    style={{ backgroundImage: bordeauxTextureImage }}
  />
);
