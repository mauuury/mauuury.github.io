export default function Background() {
  return (
    <div
      aria-hidden
      className="app-bg grain pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -top-64 left-1/2 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-[var(--blob-1)] blur-[150px] animate-aurora" />
      <div className="absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-[var(--blob-2)] blur-[150px] animate-aurora [animation-delay:-7s]" />
      <div className="absolute bottom-0 -left-40 h-[34rem] w-[34rem] rounded-full bg-[var(--blob-3)] blur-[150px] animate-aurora [animation-delay:-14s]" />
      <div className="absolute top-2/3 right-1/4 h-[24rem] w-[24rem] rounded-full bg-[var(--blob-2)] blur-[130px] animate-aurora [animation-delay:-18s]" />
      <div className="app-vignette absolute inset-0" />
    </div>
  );
}
