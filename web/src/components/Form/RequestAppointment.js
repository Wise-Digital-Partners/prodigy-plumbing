import React, { Component } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import ButtonSolid from "../Button/ButtonSolid";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const StyledForm = styled.div`
  [multiple],
  [type="date"],
  [type="datetime-local"],
  [type="email"],
  [type="month"],
  [type="number"],
  [type="password"],
  [type="search"],
  [type="tel"],
  [type="text"],
  [type="time"],
  [type="url"],
  [type="week"],
  select,
  textarea {
    ${tw`text-sm w-full bg-transparent px-4 py-2.5 border border-solid border-gray-300 rounded-sm focus:border-transparent focus:outline-none focus:ring-3 focus:ring-primary-500 focus:ring-opacity-30 transition-colors duration-300 ease-linear`}
  }
`;

const invisible = "hidden";
const visible = "block";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidated: false,
      startDate: new Date(),
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDateChange = (date) => {
    this.setState({ startDate: date });
  };

  handleDateTimeRangePickerChange = (_value) => {
    this.handleChange({ target: { name: "select-a-day", value: _value } });
  };

  step1Next = () => {
    this.props.setStep1State(invisible);
    this.props.setStep2State(visible);
    this.props.setBackButton1State(invisible);
    this.props.setBackButton2State(visible);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(
        () =>
          (document.getElementById("appointment-form-ajax-response").innerHTML =
            "Thank you for requesting an appointment! We will get in touch with you shortly."),
        form.remove(),
        (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({
          event: "appointmentFormSubmission",
        })
      )
      .catch((error) => alert(error));
  };

  render() {
    return (
      <StyledForm>
        <div id="appointment-form-ajax-response"></div>
        <form
          name="Request Appointment"
          method="post"
          action=""
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="Request Appointment" />
          <div hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>

          <div className={`${this.props.setStep1}`}>
            <div className="hidden">
              <label
                className="font-heading text-sm font-semibold text-secondary-800 block mb-1"
                htmlFor="service"
              >
                Service
              </label>
              <input
                type="text"
                name="service"
                value={this.props.selectedService}
                onChange={this.handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 w-full">
              <div className="mb-5">
                <label
                  className="font-heading text-sm font-semibold text-secondary-800 block mb-1"
                  htmlFor="select-a-day"
                >
                  Select A Day
                </label>

                <DatePicker
                  selected={this.state.startDate}
                  onChange={(date) => {
                    this.handleDateChange(date);
                    this.handleDateTimeRangePickerChange();
                  }}
                  name="select-a-day"
                  required={true}
                />
              </div>

              <div className="mb-5">
                <label
                  className="font-heading text-sm font-semibold text-secondary-800 block mb-1"
                  htmlFor="select-a-time"
                >
                  Select A Time
                </label>
                <select
                  name="select-a-time"
                  onChange={this.handleChange}
                  required={true}
                >
                  <option value="">Select one...</option>
                  <option value="8:00 AM">8:00 AM</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                </select>
              </div>
            </div>

            <div className="mb-5">
              <label
                className="font-heading text-sm font-semibold text-secondary-800 block mb-1"
                htmlFor="location"
              >
                Location
              </label>
              <input
                type="text"
                name="location"
                placeholder="Enter your address, city or zip code"
                onChange={this.handleChange}
                required={true}
              />
            </div>

            <ButtonSolid
              onClick={() => {
                this.step1Next();
              }}
              type="button"
              text="Next"
            />
          </div>

          <div className={`${this.props.setStep2}`}>
            <div className="mb-5">
              <label
                className="font-heading text-sm font-semibold text-secondary-800 block mb-1"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
                required={true}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 w-full">
              <div className="mb-5">
                <label
                  className="font-heading text-sm font-semibold text-secondary-800 block mb-1"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  onChange={this.handleChange}
                  required={true}
                />
              </div>
              <div className="mb-5">
                <label
                  className="font-heading text-sm font-semibold text-secondary-800 block mb-1"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                  required={true}
                />
              </div>
            </div>

            <div className="mb-5">
              <label
                className="font-heading text-sm font-semibold text-secondary-800 block mb-1"
                htmlFor="message"
              >
                Message (optional)
              </label>
              <textarea
                className="textarea"
                name="message"
                onChange={this.handleChange}
                rows="4"
                required={false}
              />
            </div>

            <ButtonSolid type="submit" text="Request Appointment" />
          </div>
        </form>
      </StyledForm>
    );
  }
}
