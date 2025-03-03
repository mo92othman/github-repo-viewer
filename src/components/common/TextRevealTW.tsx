export const TextRevealTW = ({ text }: { text: string }) => {
  // const text = 'Text Reveal Animation 💫';

  return (
    <>
      <h1 className="overflow-hidden text-2xl font-bold leading-6 ">
        {text.match(/./gu)!.map((char, index) => (
          <span
            className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
            key={`${char}-${index}`}
            style={{ animationDelay: `${index * 0.03}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>
    </>
  );
};
