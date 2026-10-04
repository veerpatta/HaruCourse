// Lesson 1's annotated example screens. They are drawn in HTML rather than as
// images so every word is real text: readable at any zoom, by a screen reader
// and offline. Everything shown is fictional practice material.

function Callout({ n }: { n: number }) {
  return <span className="screen-callout" aria-hidden="true">{n}</span>;
}

export function AnnotatedBookingScreens() {
  return (
    <section className="annotated-screens" aria-label="Two made-up booking screens with notes">
      <p className="supplied-label">Made-up practice screens · not a real app · not research</p>
      <div className="phone-pair">
        <figure className="phone-screen">
          <figcaption>Screen A · Class details</figcaption>
          <div className="phone-body">
            <p className="phone-title">Saturday pottery for beginners <Callout n={1} /></p>
            <p className="phone-meta">Sat 12 Oct · 10:00–12:00 · Studio 2</p>
            <p className="phone-text">Spend a relaxed morning at the wheel. You will centre clay, throw two small bowls and learn how glazing works. Our teachers have run beginner classes for six years. Aprons are provided, but wear clothes you do not mind getting muddy. Parking is available on the street…</p>
            <p className="phone-price">₹800 · materials included <Callout n={2} /></p>
            <span className="phone-button">Reserve</span>
          </div>
        </figure>
        <figure className="phone-screen">
          <figcaption>Screen B · Booking</figcaption>
          <div className="phone-body">
            <p className="phone-title">Choose a date</p>
            <p className="phone-chips"><span className="is-selected">Sat 12 Oct</span><span>Sun 13 Oct</span></p>
            <p className="phone-price">Saturday: ₹800 · materials included <Callout n={3} /></p>
            <span className="phone-button">Continue to pay</span>
            <p className="phone-note">Why do some visitors leave here? <Callout n={4} /></p>
          </div>
        </figure>
      </div>
      <ol className="callout-list">
        <li><strong>Observed:</strong> the date sits right beside the class title on screen A.</li>
        <li><strong>Observed:</strong> the price sits below a long description, so a visitor scrolls before seeing it.</li>
        <li><strong>Observed:</strong> screen B shows the price again only after Saturday is chosen.</li>
        <li><strong>Unknown:</strong> neither screen shows why anyone leaves. Any reason you think of is a guess until you check it.</li>
      </ol>
    </section>
  );
}

// The transfer case uses a different screen with no notes, so the learner
// applies the distinction without the original cues.
export function TransferScreen() {
  return (
    <figure className="phone-screen transfer-screen">
      <figcaption>Made-up screen · a neighbourhood library app (no notes this time)</figcaption>
      <div className="phone-body">
        <p className="phone-title">The Monsoon Garden</p>
        <p className="phone-meta">by A. Rao · Novel · 312 pages</p>
        <p className="phone-text">A family returns to a flooded hill town and finds the garden their grandmother kept for forty years still growing. Told across three summers, the story follows… (summary continues)</p>
        <span className="phone-button">Reserve</span>
        <p className="phone-note">After pressing Reserve: “Pickup at Central branch · expected wait 3 weeks”.</p>
      </div>
    </figure>
  );
}
