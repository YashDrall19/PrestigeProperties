export default function Contact(){
  return (
    <section className="page contact">
      <h1>Contact</h1>
      <div className="section two-cols">
        <form className="contact-form">
          <label>Name<input /></label>
          <label>Email<input type="email"/></label>
          <label>Message<textarea /></label>
          <button className="btn primary">Send</button>
        </form>
        <div>
          <h3>Office</h3>
          <p className="muted">123 Realty Lane, City</p>
          <div className="img-placeholder medium" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  )
}
