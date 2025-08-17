"use client";

import { useState } from "react";

export default function RsvpForm() {
  // Form state
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    attending: "",
    dietary: "",
    message: "",
  });

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset status
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Submit to API
      const response = await fetch("/api/submit-rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      // Parse response
      const data = await response.json();

      if (response.ok) {
        // Success
        setSubmitStatus("success");
        // Reset form
        setFormState({
          firstName: "",
          lastName: "",
          email: "",
          attending: "",
          dietary: "",
          message: "",
        });
      } else {
        // API error
        setSubmitStatus("error");
        setErrorMessage(
          data.message || "Something went wrong. Please try again.",
        );
      }
    } catch {
      // Network error
      setSubmitStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {submitStatus === "success" ? (
        <div className="rsvp-success">
          <div
            className="card"
            style={{ textAlign: "center", padding: "3rem" }}
          >
            <h3
              style={{ color: "var(--color-primary)", marginBottom: "1.5rem" }}
            >
              Thank You!
            </h3>
            <p style={{ marginBottom: "2rem" }}>
              Your RSVP has been successfully submitted.
            </p>
            <p>We look forward to celebrating with you!</p>
          </div>
        </div>
      ) : (
        <form className="rsvp-form" onSubmit={handleSubmit}>
          {submitStatus === "error" && (
            <div
              className="form-error"
              style={{
                backgroundColor: "#fff0f0",
                color: "#d32f2f",
                padding: "1rem",
                borderRadius: "0.5rem",
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              <p>
                {errorMessage || "Error submitting form. Please try again."}
              </p>
            </div>
          )}

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="firstName">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="form-input"
                value={formState.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="lastName">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="form-input"
                value={formState.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formState.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="attending">
                Will you attend? *
              </label>
              <select
                id="attending"
                name="attending"
                className="form-select"
                value={formState.attending}
                onChange={handleChange}
                required
              >
                <option value="">Please select</option>
                <option value="yes">Yes, I&apos;ll be there!</option>
                <option value="no">Sorry, can&apos;t make it</option>
              </select>
            </div>
            <div className="form-group">
              <p style={{
                background: "var(--color-accent)",
                padding: "1rem",
                borderRadius: "0.5rem",
                margin: "1rem 0",
                color: "var(--color-text)",
                fontSize: "0.9rem",
                border: "1px solid var(--color-primary)"
              }}>
                <strong>Note:</strong> Please submit this form once per person on the invitation.
                If you&apos;re bringing a guest or children, this means you will have to submit the form multiple times.
              </p>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="dietary">
              Dietary Restrictions
            </label>
            <input
              type="text"
              id="dietary"
              name="dietary"
              className="form-input"
              placeholder="Any allergies or dietary needs?"
              value={formState.dietary}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">
              Special Message
            </label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              placeholder="Share your excitement or well wishes!"
              value={formState.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ width: "100%" }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send RSVP"}
          </button>
        </form>
      )}
    </>
  );
}
