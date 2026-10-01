import { ArrowDown, ArrowRight, FileCode2, FileText } from 'lucide-react'
import { Fragment } from 'react'

export function FlowDiagram({ steps, compact = false }) {
  if (compact) {
    return (
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-2 font-mono text-[0.7rem] text-muted">
        {steps.map((step, i) => (
          <Fragment key={step}>
            <li className="rounded-md border border-line bg-surface-2/60 px-2 py-1">{step}</li>
            {i < steps.length - 1 ? (
              <li aria-hidden="true" className="text-subtle">
                <ArrowRight className="size-3" />
              </li>
            ) : null}
          </Fragment>
        ))}
      </ol>
    )
  }

  return (
    <ol className="flex flex-col items-stretch gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2">
      {steps.map((step, i) => (
        <Fragment key={step}>
          <li className="flex items-center gap-2.5 rounded-lg border border-line bg-surface-2/60 px-3 py-2 font-mono text-xs">
            <span className="text-subtle">{String(i + 1).padStart(2, '0')}</span>
            <span>{step}</span>
          </li>
          {i < steps.length - 1 ? (
            <li aria-hidden="true" className="flex justify-center text-subtle">
              <ArrowRight className="hidden size-3.5 sm:block" />
              <ArrowDown className="size-3.5 sm:hidden" />
            </li>
          ) : null}
        </Fragment>
      ))}
    </ol>
  )
}

export function FileTree({ modules, outputs, compact = false }) {
  const row = compact ? 'py-0.5' : 'py-1'
  return (
    <div className={`rounded-lg border border-line bg-surface-2/40 font-mono ${compact ? 'p-3 text-[0.7rem]' : 'p-4 text-xs'}`}>
      <p className="mb-1.5 text-subtle">modules/</p>
      <ul className="mb-3 space-y-0.5 border-l border-line pl-3">
        {modules.map((file) => (
          <li key={file} className={`flex items-center gap-2 text-muted ${row}`}>
            <FileCode2 className="size-3.5 shrink-0 text-accent/80" aria-hidden="true" />
            {file}
          </li>
        ))}
      </ul>
      <p className="mb-1.5 text-subtle">output/</p>
      <ul className="space-y-0.5 border-l border-line pl-3">
        {outputs.map((file) => (
          <li key={file} className={`flex items-center gap-2 text-muted ${row}`}>
            <FileText className="size-3.5 shrink-0 text-signal/80" aria-hidden="true" />
            {file}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ProjectVisual({ project, compact = false }) {
  if (project.flow) return <FlowDiagram steps={project.flow} compact={compact} />
  if (project.files) return <FileTree {...project.files} compact={compact} />
  return null
}
