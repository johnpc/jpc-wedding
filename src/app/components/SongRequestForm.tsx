"use client";

import { useState } from "react";

export default function SongRequestForm() {
  // Form state
  const [formState, setFormState] = useState({
    name: "",
    songTitle: "",
    artist: "",
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
    >
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
      const response = await fetch("/api/submit-song-request", {
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
          name: "",
          songTitle: "",
          artist: "",
          message: "",
        });
      } else {
        // API error
        setSubmitStatus("error");
        setErrorMessage(
          data.message || "Something went wrong. Please try again."
        );
      }
    } catch {
      // Network error
      setSubmitStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {submitStatus === "success" ? (
        <div className="song-request-success">
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
              Your song request has been successfully submitted.
            </p>
            <p>We&apos;ll do our best to play it at the reception!</p>
          </div>
        </div>
      ) : (
        <form className="song-request-form" onSubmit={handleSubmit}>
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
                {errorMessage || "Error submitting request. Please try again."}
              </p>
            </div>
          )}

          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formState.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="songTitle">
                Song Title *
              </label>
              <input
                type="text"
                id="songTitle"
                name="songTitle"
                className="form-input"
                value={formState.songTitle}
                onChange={handleChange}
                placeholder="Enter the song title"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="artist">
                Artist *
              </label>
              <input
                type="text"
                id="artist"
                name="artist"
                className="form-input"
                value={formState.artist}
                onChange={handleChange}
                placeholder="Enter the artist name"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">
              Why This Song?
            </label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              placeholder="Tell us why this song is special to you or why you'd love to hear it at our wedding!"
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
            {isSubmitting ? "Sending..." : "Submit Song Request"}
          </button>
        </form>
      )}
    </>
  );
}
