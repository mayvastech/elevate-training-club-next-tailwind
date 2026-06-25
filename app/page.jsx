import ButtonLink from "@/components/ButtonLink";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import {
  benefits,
  classes,
  coachingOptions,
  memberships,
  testimonials,
} from "@/data/site";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section
          id="home"
          className="relative overflow-hidden px-5 py-20 sm:py-24 lg:py-28"
        >
          <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-lime-300/10 blur-3xl" />
          <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="inline-flex rounded-full border border-lime-300/30 bg-lime-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-lime-200">
                Premium fitness in Shoreditch
              </p>

              <h1 className="mt-7 max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                Personal training and small group fitness built around real
                progress.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                <span className="block">
                  Premium personal training and small group fitness in
                  Shoreditch.
                </span>
                <span className="mt-2 block">
                  Build strength, confidence and consistency with expert
                  coaching, structured programmes and a supportive training
                  environment.
                </span>
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <ButtonLink href="#trial">Book a free trial</ButtonLink>
                <ButtonLink href="#memberships" variant="secondary">
                  View memberships
                </ButtonLink>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-8">
                <div>
                  <p className="text-3xl font-black text-white">8</p>
                  <p className="mt-1 text-sm text-white/50">Max per class</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">6am</p>
                  <p className="mt-1 text-sm text-white/50">Early sessions</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">1:1</p>
                  <p className="mt-1 text-sm text-white/50">PT available</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-lime-300/10">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950">
                <div className="bg-gradient-to-br from-zinc-900 via-black to-lime-950 p-8 sm:p-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">
                        Today
                      </p>
                      <p className="mt-2 text-2xl font-black text-white">
                        Strength Foundations
                      </p>
                    </div>
                    <div className="rounded-full bg-lime-300 px-4 py-2 text-sm font-black text-black">
                      07:00
                    </div>
                  </div>

                  <div className="mt-16 grid gap-4">
                    {[
                      "Coach-led warm up",
                      "Progressive strength work",
                      "Technique feedback",
                      "Simple progress tracking",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl bg-white/10 p-4"
                      >
                        <span className="h-3 w-3 rounded-full bg-lime-300" />
                        <span className="font-bold text-white/85">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-px bg-white/10 text-center">
                  <div className="bg-black p-5">
                    <p className="text-sm text-white/50">Next intake</p>
                    <p className="mt-1 font-black text-white">This week</p>
                  </div>
                  <div className="bg-black p-5">
                    <p className="text-sm text-white/50">Trial session</p>
                    <p className="mt-1 font-black text-white">Free</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03] px-5 py-16">
          <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-[2rem] border border-white/10 bg-black/40 p-6"
              >
                <h3 className="text-xl font-black text-white">
                  {benefit.title}
                </h3>
                <p className="mt-3 leading-7 text-white/60">{benefit.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="coaching" className="scroll-mt-24 px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Coaching"
              title="Training options for different goals and routines."
            >
              From private coaching to structured small group sessions, every
              option is designed to feel clear, supportive and focused on
              progress.
            </SectionHeading>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {coachingOptions.map((option) => (
                <article
                  key={option.title}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-lime-300/40 hover:bg-white/[0.06]"
                >
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-lime-300">
                    {option.meta}
                  </p>
                  <h3 className="mt-4 text-2xl font-black text-white">
                    {option.title}
                  </h3>
                  <p className="mt-4 leading-8 text-white/65">{option.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="classes"
          className="scroll-mt-24 bg-[#f3efe7] px-5 py-20 text-black sm:py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-700">
                Weekly rhythm
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                A focused timetable that helps members stay consistent.
              </h2>
              <p className="mt-5 text-lg leading-8 text-black/65">
                The schedule highlights early morning and evening sessions for
                busy professionals, with a weekend full-body session for members
                who prefer slower starts.
              </p>
            </div>

            <div className="rounded-[2rem] border border-black/10 bg-white p-4 shadow-2xl shadow-black/10">
              {classes.map((item) => (
                <div
                  key={`${item.day}-${item.time}`}
                  className="grid grid-cols-[4rem_5rem_1fr] items-center gap-4 border-b border-black/10 px-4 py-5 last:border-b-0"
                >
                  <p className="text-lg font-black">{item.day}</p>
                  <p className="rounded-full bg-black px-3 py-2 text-center text-sm font-black text-white">
                    {item.time}
                  </p>
                  <p className="font-black text-black/80">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Member stories"
              title="Real coaching, steady progress and a club people return to."
              align="center"
            >
              Hear from members who found more structure, confidence and
              consistency through coaching at Elevate.
            </SectionHeading>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.name}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7"
                >
                  <blockquote className="text-lg leading-8 text-white/80">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-8">
                    <p className="font-black text-white">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-white/45">
                      {testimonial.detail}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          id="memberships"
          className="scroll-mt-24 bg-white px-5 py-20 text-black sm:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-700">
                  Memberships
                </p>
                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                  Simple plans for training with more structure.
                </h2>
                <p className="mt-5 text-lg leading-8 text-black/65">
                  Clear pricing gives visitors a quick way to compare options
                  and decide the best next step before enquiring.
                </p>
              </div>
              <ButtonLink href="#trial" variant="dark">
                Book a free trial
              </ButtonLink>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {memberships.map((plan) => (
                <article
                  key={plan.name}
                  className={`rounded-[2rem] border p-7 ${
                    plan.featured
                      ? "border-lime-300 bg-black text-white shadow-2xl shadow-black/20"
                      : "border-black/10 bg-[#f3efe7] text-black"
                  }`}
                >
                  {plan.featured && (
                    <p className="mb-5 inline-flex rounded-full bg-lime-300 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-black">
                      Most popular
                    </p>
                  )}
                  <h3 className="text-2xl font-black">{plan.name}</h3>
                  <div className="mt-5 flex items-end gap-2">
                    <p className="text-5xl font-black">{plan.price}</p>
                    <p
                      className={
                        plan.featured ? "text-white/50" : "text-black/50"
                      }
                    >
                      {plan.cadence}
                    </p>
                  </div>
                  <ul className="mt-7 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-lime-300" />
                        <span
                          className={
                            plan.featured ? "text-white/70" : "text-black/65"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="visit" className="scroll-mt-24 px-5 py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Visit"
                title="A premium training space in Shoreditch."
              >
              </SectionHeading>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-lime-300">
                    Location
                  </p>
                  <p className="mt-3 text-lg font-black">
                    Shoreditch, East London
                  </p>
                  <p className="mt-2 text-white/55">
                    A short walk from Shoreditch High Street.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-lime-300">
                    Hours
                  </p>
                  <p className="mt-3 text-lg font-black">Mon–Fri: 6am–9pm</p>
                  <p className="mt-2 text-white/55">Sat–Sun: 8am–4pm</p>
                </div>
              </div>
            </div>

            <div
              id="trial"
              className="scroll-mt-24 rounded-[2.5rem] border border-lime-300/20 bg-lime-300 p-8 text-black shadow-2xl shadow-lime-300/20 sm:p-10"
            >
              <p className="text-sm font-black uppercase tracking-[0.25em] text-black/60">
                Start here
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Book a free trial session.
              </h2>
              <p className="mt-5 text-lg leading-8 text-black/70">
                Tell us your goal, current training experience and preferred
                session time. A coach will help you choose the best first step.
              </p>

              <form className="mt-8 grid gap-4">
                <input
                  aria-label="Name"
                  className="rounded-2xl border border-black/10 bg-white px-5 py-4 font-bold outline-none placeholder:text-black/40"
                  placeholder="Your name"
                />
                <input
                  aria-label="Email"
                  className="rounded-2xl border border-black/10 bg-white px-5 py-4 font-bold outline-none placeholder:text-black/40"
                  placeholder="Email address"
                />
                <select
                  aria-label="Training goal"
                  className="rounded-2xl border border-black/10 bg-white px-5 py-4 font-bold outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    What are you interested in?
                  </option>
                  <option>Personal training</option>
                  <option>Small group training</option>
                  <option>Memberships</option>
                  <option>Not sure yet</option>
                </select>
                <button
                  type="button"
                  className="rounded-full bg-black px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-zinc-800"
                >
                  Request trial
                </button>
              </form>

              <p className="mt-5 text-sm font-bold text-black/55">
                We usually respond within one working day.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
