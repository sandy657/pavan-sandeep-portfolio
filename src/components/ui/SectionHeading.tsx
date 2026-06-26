import { AnimatedText } from './AnimatedText';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  index: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

/** Numbered section heading with animated title + accent underline. */
export function SectionHeading({
  index,
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  const alignment =
    align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      <Reveal direction="none">
        <span className="font-display text-sm font-medium tracking-[0.3em] text-accent-soft/80 uppercase">
          <span className="text-accent">{index}</span> — {subtitle ?? title}
        </span>
      </Reveal>

      <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
        <AnimatedText text={title} />
      </h2>

      <Reveal direction="left" delay={0.15}>
        <span
          className={`mt-2 block h-[3px] w-20 rounded-full bg-gradient-to-r from-accent to-accent-glow ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        />
      </Reveal>
    </div>
  );
}
