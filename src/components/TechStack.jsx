import { technicalStack } from '../data/portfolio'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function TechStack() {
  return (
    <section id="stack" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          index="05"
          label="Technical stack"
          title="Depth across every layer."
          copy="The concepts and tools I use from the interface down to the database."
        />

        <Reveal className="card overflow-hidden">
          <ol>
            {technicalStack.map((layer, i) => (
              <li
                key={layer.layer}
                className={`group grid gap-4 p-6 transition-colors hover:bg-surface-2/40 sm:p-7 md:grid-cols-[14rem_1fr] md:gap-8 ${
                  i > 0 ? 'border-t border-line' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 font-mono text-xs text-subtle transition-colors group-hover:text-accent">
                    L{i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold tracking-tight">{layer.layer}</h3>
                    <p className="mt-0.5 text-sm text-muted">{layer.description}</p>
                  </div>
                </div>
                <ul className="flex flex-wrap content-start gap-2">
                  {layer.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
