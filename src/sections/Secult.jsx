import Container from '../components/Container.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { budgetBalance } from '../data/mockData.js'

export default function Secult() {
  return (
    <section id="balancete" className="bg-sand-50 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={budgetBalance.eyebrow}
          title={budgetBalance.title}
          subtitle={budgetBalance.subtitle}
        />
        <div className="mt-12">
          <Reveal>
            <div className="overflow-x-auto rounded-3xl bg-white p-6 shadow-soft md:p-8">
              <table className="w-full min-w-[720px] text-left text-sm text-ink-700">
                <thead className="text-xs uppercase tracking-[0.2em] text-ink-400">
                  <tr>
                    <th className="pb-4">Ano</th>
                    <th className="pb-4">SECULT</th>
                    <th className="pb-4">SUCOP</th>
                    <th className="pb-4">SEMOP</th>
                    <th className="pb-4">Total</th>
                    <th className="pb-4">Turistas</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand-100">
                  {budgetBalance.rows.map((row) => (
                    <tr key={row.year}>
                      <td className="py-4 font-semibold text-ink-900">{row.year}</td>
                      <td className="py-4">{row.secult}</td>
                      <td className="py-4">{row.sucop}</td>
                      <td className="py-4">{row.semop}</td>
                      <td className="py-4 font-semibold text-ink-900">{row.total}</td>
                      <td className="py-4">{row.tourists}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-sm text-ink-600">{budgetBalance.note}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
