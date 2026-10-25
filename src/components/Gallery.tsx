import { motion } from 'framer-motion';
import { gallery } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';

/** BEHIND THE SCENES — a rail of stills. Swipe on touch, grid on desktop. */
export default function Gallery() {
  return (
    <>
      <SectionHeading kicker="Bonus Footage" title="Behind the Scenes" aside={<p className="max-w-xs text-sm text-mist">A few stills from outside the editor.</p>} />
      <div className="rail gutter flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible">
        {gallery.map((g, i) => (
          <motion.figure
            key={g.id}
            className="w-[72vw] shrink-0 snap-start sm:w-[46vw] md:w-auto"
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.9, delay: i * 0.1, ease: EASE }}
          >
            <Tilt max={4} className="rounded-2xl">
              <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-white/10">
                <img
                  src={g.src}
                  srcSet={g.srcSet}
                  sizes="(max-width: 768px) 72vw, 30vw"
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/85 to-transparent" />
                <figcaption className="absolute inset-x-4 bottom-4 flex items-end justify-between">
                  <span className="font-display text-2xl leading-none text-bone">{g.label}</span>
                  <span className="text-[10px] font-bold tracking-[0.3em] text-crimson-2">0{i + 1}</span>
                </figcaption>
              </div>
            </Tilt>
          </motion.figure>
        ))}
      </div>
    </>
  );
}
