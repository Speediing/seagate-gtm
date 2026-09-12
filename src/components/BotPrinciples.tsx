const PRINCIPLES = [
  {
    title: "Message Bots like teammates",
    body: "Give a Bot a task the way you would a teammate, on desktop or iOS. It takes the project from start to end and comes back when your approval is needed.",
  },
  {
    title: "Work with many Bots at once",
    body: "Create a Bot, give it a job, and add another when the work grows. Vic on AWS costs, another on onboarding campaigns. They work in parallel.",
  },
  {
    title: "Grok Bot works where you work",
    body: "Log it in once. It uses your apps and websites on its own computer, just like you would. No IDE in the loop.",
  },
  {
    title: "Show a Bot how it is done",
    body: "Complete a workflow once while the Bot follows along. It saves the routine and runs it on its own next time. That is the guided example Guilherme asked for.",
  },
];

export function BotPrinciples() {
  return (
    <section id="how" className="principles">
      <div className="principles-head">
        <p className="eyebrow">How Grok Bot works</p>
        <h2>AI teammates that finish the work.</h2>
        <p className="section-lede">
          The product, as SpaceXAI describes it. Not an Inter result. The eight
          jobs above map onto these four ideas.
        </p>
      </div>
      <ol className="principles-grid">
        {PRINCIPLES.map((item, index) => (
          <li key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
