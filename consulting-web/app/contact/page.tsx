import { Footer, Header } from "../components/SiteChrome";

const serviceOptions = [
  "Corporate Liability Review",
  "Insurance Program Advisory",
  "Claims Prevention Strategy",
  "Contract and Vendor Risk Advisory",
  "Board and Executive Risk Reporting",
  "Regional Risk Advisory",
  "Not Sure Yet",
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero compact-page-hero">
          <span>Contact Us</span>
          <h1>Speak with our Bangkok-based advisory team about insurance strategy, liability reduction, and corporate risk protection.</h1>
        </section>

        <section className="section light-section contact-layout">
          <form className="contact-form">
            <div className="form-grid">
              <label>
                Full Name
                <input name="name" type="text" />
              </label>
              <label>
                Company Name
                <input name="company" type="text" />
              </label>
              <label>
                Job Title
                <input name="title" type="text" />
              </label>
              <label>
                Work Email
                <input name="email" type="email" />
              </label>
              <label>
                Phone Number
                <input name="phone" type="tel" />
              </label>
              <label>
                Country / Region
                <input name="region" type="text" />
              </label>
              <label>
                Company Size
                <input name="size" type="text" />
              </label>
              <label>
                Service Interest
                <select name="service" defaultValue="">
                  <option value="" disabled>
                    Select an advisory area
                  </option>
                  {serviceOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>
            <label>
              Message / Risk Concern
              <textarea
                name="message"
                rows={7}
                placeholder="Tell us briefly about your company, the risk issue you are facing, or the type of advisory support you need."
              />
            </label>
            <fieldset>
              <legend>Preferred Contact Method</legend>
              {["Email", "Phone", "Video Call", "In-Person Meeting"].map(
                (method) => (
                  <label key={method} className="radio-option">
                    <input name="contactMethod" type="radio" value={method} />
                    {method}
                  </label>
                ),
              )}
            </fieldset>
            <button className="button button-primary" type="submit">
              Send Inquiry
            </button>
            <p className="form-note">
              Initial inquiries are reviewed by our advisory coordination team.
              For corporate engagements, Aegis Risk Group may request additional
              context about your insurance program, claims history, operational
              structure, or legal exposure before assigning the appropriate
              advisor.
            </p>
            <p className="confidentiality-note">
              Information submitted through this form is treated as confidential
              business inquiry material. Please do not submit legally privileged
              documents or sensitive claim files until a formal advisory
              engagement has been established.
            </p>
          </form>

          <aside className="office-card">
            <h2>Bangkok Office</h2>
            <p>
              <strong>Aegis Risk Group</strong>
              <br />
              Level 22, Empire Tower
              <br />
              195 South Sathorn Road
              <br />
              Yan Nawa, Sathon
              <br />
              Bangkok 10120
              <br />
              Thailand
            </p>
            <dl>
              <div>
                <dt>Email</dt>
                <dd>contact@aegisriskgroup.com</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>+66 2 000 0000</dd>
              </div>
              <div>
                <dt>Business Hours</dt>
                <dd>Monday to Friday, 9:00 AM to 6:00 PM</dd>
              </div>
              <div>
                <dt>Region Served</dt>
                <dd>Thailand and Southeast Asia</dd>
              </div>
            </dl>
            <div className="map-panel" aria-label="Map placeholder for Bangkok office">
              <span>Empire Tower</span>
              <strong>Bangkok Office</strong>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
