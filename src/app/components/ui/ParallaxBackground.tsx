interface ParallaxBackgroundProps {
  scrollX: number;
}

export default function ParallaxBackground({
  scrollX,
}: ParallaxBackgroundProps) {
  const secondaryTilesX = Math.round(-scrollX * 0.1);
  const whiteTilesX = Math.round(-scrollX * 0.1135);
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 w-full h-full"
        style={{
          backgroundImage: `url('/secondary-white-tiles.svg')`,
          backgroundRepeat: "repeat-x",
          backgroundPosition: `${secondaryTilesX}px 0`,
          backgroundSize: "auto 100%",
          zIndex: 1,
          imageRendering: "crisp-edges",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 w-full h-full"
        style={{
          backgroundImage: `url('/white-tiles.svg')`,
          backgroundRepeat: "repeat-x",
          backgroundPosition: `${whiteTilesX}px 0`,
          backgroundSize: "auto 100%",
          zIndex: 2,
          imageRendering: "crisp-edges",
        }}
      />
    </>
  );
}
