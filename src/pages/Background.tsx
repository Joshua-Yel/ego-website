interface BackgroundProps {
  mousePos: { x: number; y: number };
}

export const Background = ({ mousePos }: BackgroundProps) => {
  const parallaxStyle = {
    transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`,
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute w-[600px] h-[600px] bg-[#FCD535] opacity-5 rounded-full blur-[150px] -top-40 -left-40"
        style={parallaxStyle}
      />
      <div
        className="absolute w-[800px] h-[800px] bg-[#FF8C42] opacity-5 rounded-full blur-[200px] top-1/3 -right-60"
        style={{ transform: `translate(${mousePos.x * -0.015}px, ${mousePos.y * -0.015}px)` }}
      />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #FCD535 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
    </div>
  );
};