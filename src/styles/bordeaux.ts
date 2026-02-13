/** Shared dark bordeaux card background gradient. Apply via `style={bordeauxCardStyle}`. */
export const bordeauxCardStyle: React.CSSProperties = {
  background:
    "linear-gradient(135deg, hsl(350 35% 18%) 0%, hsl(350 40% 12%) 100%)",
};

/** Background-image value for the subtle texture overlay used inside bordeaux cards. */
export const bordeauxTextureImage =
  `radial-gradient(circle at 20% 80%, hsl(350 30% 25%) 0%, transparent 50%), ` +
  `radial-gradient(circle at 80% 20%, hsl(25 30% 25%) 0%, transparent 50%), ` +
  `linear-gradient(135deg, transparent 0%, hsl(350 20% 20% / 0.5) 100%)`;
