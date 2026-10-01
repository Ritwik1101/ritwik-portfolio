import { profile } from '../data/portfolio'

const t = (cls, text) => ({ cls, text })
const kw = (text) => t('tok-kw', text)
const fn = (text) => t('tok-fn', text)
const str = (text) => t('tok-str', text)
const key = (text) => t('tok-key', text)
const plain = (text) => t('', text)

const field = (k, v) => [plain('        '), key(`"${k}"`), plain(': '), ...v, plain(',')]
const list = (items) => [
  plain('['),
  ...items.flatMap((item, i) => [str(`"${item}"`), ...(i < items.length - 1 ? [plain(', ')] : [])]),
  plain(']'),
]

const lines = [
  [kw('from'), plain(' fastapi '), kw('import'), plain(' FastAPI')],
  [],
  [plain('app = '), fn('FastAPI'), plain('()')],
  [],
  [fn('@app.get'), plain('('), str('"/engineer"'), plain(')')],
  [kw('async def'), plain(' '), fn('engineer'), plain('():')],
  [plain('    '), kw('return'), plain(' {')],
  field('name', [str(`"${profile.name}"`)]),
  field('role', [str(`"${profile.role}"`)]),
  field('experience', [str('"1.5+ yrs, production"')]),
  field('backend', list(['Python', 'FastAPI', 'SQL'])),
  field('frontend', list(['React', 'React Native'])),
  field('builds', list(['APIs', 'web apps', 'AI'])),
  field('based_in', [str(`"${profile.shortLocation}"`)]),
  [plain('    }')],
]

export default function CodePanel() {
  return (
    <div className="gradient-border overflow-hidden rounded-2xl bg-surface/80 shadow-2xl shadow-black/10 backdrop-blur-sm dark:shadow-black/40">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
        </div>
        <span className="font-mono text-[0.7rem] text-subtle">api/main.py</span>
        <span className="w-10" aria-hidden="true" />
      </div>

      <pre
        className="overflow-x-auto px-4 py-5 font-mono text-[0.64rem] leading-[1.8] min-[400px]:text-[0.68rem] sm:text-[0.78rem] sm:leading-[1.75]"
        aria-label="A FastAPI endpoint returning a summary of Ritwik's profile"
      >
        <code>
          {lines.map((tokens, i) => (
            <span key={i} className="flex">
              <span className="mr-3 inline-block w-4 shrink-0 text-right text-subtle/50 select-none sm:mr-4">
                {i + 1}
              </span>
              <span className="whitespace-pre">
                {tokens.length
                  ? tokens.map((tok, j) => (
                      <span key={j} className={tok.cls}>
                        {tok.text}
                      </span>
                    ))
                  : ' '}
              </span>
            </span>
          ))}
        </code>
      </pre>

      <div className="flex items-center justify-between gap-3 border-t border-line bg-surface-2/50 px-4 py-2.5 font-mono text-[0.7rem]">
        <span className="truncate text-muted">
          <span className="text-subtle">GET</span> /engineer
        </span>
        <span className="flex items-center gap-1.5 text-signal">
          <span className="size-1.5 rounded-full bg-signal" aria-hidden="true" />
          200 OK
        </span>
      </div>
    </div>
  )
}
