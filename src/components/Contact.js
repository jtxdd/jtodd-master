import React, { Component } from "react";

const formURL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdU7vm3y1UuDMIGP509QC2NYC7qpkQISalcI2r75aOkmEULPQ/formResponse";

const inputs = [
  [
    {
      ipLabel: "Name",
      ipType: "text",
      ipPlaceholder: "John Doe",
      ipName: "name",
      entry: "entry.2005620554",
    },
    {
      ipLabel: "Email",
      ipType: "email",
      ipPlaceholder: "email@address.com",
      ipName: "email",
      entry: "entry.1045781291",
    },
  ],
  [
    {
      ipLabel: "Subject",
      ipType: "text",
      ipPlaceholder: "What's the message about?",
      ipName: "subject",
      entry: "entry.1065046570",
    },
  ],
  [
    {
      ipLabel: "Message",
      ipType: "",
      ipPlaceholder: "",
      ipName: "message",
      entry: "entry.839337160",
    },
  ],
];

function InputGroup(props) {
  const { ipLabel, ipType, ipPlaceholder, entry } = props;
  return (
    <div className="col-lg mr-3 mb-2">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">{ipLabel}</span>
        </div>
        {ipType ? (
          <input
            type={ipType}
            className="form-control"
            placeholder={ipPlaceholder}
            name={entry}
            required
          />
        ) : (
          <textarea className="form-control" name={entry} required />
        )}
      </div>
    </div>
  );
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { emailSent: false };

    this.formRef = React.createRef();
  }

  submitForm = (e) => {
    setTimeout(() => {
      this.formRef.current.reset();

      this.setState((prev) => ({ emailSent: !prev.emailSent }));
    }, 500);
  };

  render() {
    const { emailSent } = this.state;
    return (
      <section id="Contact" className="module" ref={this.props.contact}>
        <h3>Contact</h3>

        <div className="module-content">
          <iframe name="hidden_iframe" id="hidden_iframe" title="hidden_iframe" />

          <form
            className="contact-form"
            action={formURL}
            method="post"
            target="hidden_iframe"
            onSubmit={this.submitForm}
            ref={this.formRef}
          >
            {emailSent ? (
              <div className="thank-you-message">
                <div>Thanks for the message, I'll get back to you shortly!</div>
              </div>
            ) : (
              <div>
                {inputs.map((ipRow, idx) => (
                  <div key={"row" + idx} className="row no-gutters">
                    {ipRow.map((data) => (
                      <InputGroup key={data.ipLabel} {...data} />
                    ))}
                  </div>
                ))}
                <button id="contact-btn" className="btn btn-success">
                  Send
                </button>
              </div>
            )}
          </form>
        </div>
        <div id="vert-spacer" />
      </section>
    );
  }
}

export default Contact;
