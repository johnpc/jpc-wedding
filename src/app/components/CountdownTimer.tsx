"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const weddingDate = new Date("2026-07-11T16:00:00"); // 4:00 PM on July 11, 2026
      const now = new Date();
      const isPast = now.getTime() >= weddingDate.getTime();

      // Always measure from the earlier date to the later date so the same
      // month/day/hour math works whether we're counting down or up.
      const from = isPast ? weddingDate : now;
      const to = isPast ? now : weddingDate;

      // Count full months between `from` and `to`, without overshooting `to`.
      const currentDate = new Date(from);
      let months = 0;

      while (true) {
        const nextMonth = new Date(currentDate);
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        if (nextMonth.getTime() <= to.getTime()) {
          months++;
          currentDate.setMonth(currentDate.getMonth() + 1);
        } else {
          break;
        }
      }

      // Calculate remaining time after months
      const remainingTime = to.getTime() - currentDate.getTime();

      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor(
        (remainingTime % (1000 * 60 * 60)) / (1000 * 60),
      );
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      return { months, days, hours, minutes, seconds, isPast };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Calculate initial time
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="countdown-timer">
        <div className="countdown-grid">
          <div className="countdown-item">
            <div className="countdown-number">--</div>
            <div className="countdown-label">Months</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-number">--</div>
            <div className="countdown-label">Days</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-number">--</div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-number">--</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-number">--</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div>
      </div>
    );
  }

  const isWeddingDay =
    timeLeft.months === 0 &&
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  if (isWeddingDay) {
    return (
      <div className="countdown-timer">
        <div className="countdown-celebration">
          <h3>🎉 It&apos;s Our Wedding Day! 🎉</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="countdown-timer">
      {timeLeft.isPast && (
        <div className="countdown-since-label">
          🎉 Married! It&apos;s been
        </div>
      )}
      <div className="countdown-grid">
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.months}</div>
          <div className="countdown-label">
            Month{timeLeft.months !== 1 ? "s" : ""}
          </div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.days}</div>
          <div className="countdown-label">
            Day{timeLeft.days !== 1 ? "s" : ""}
          </div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.hours}</div>
          <div className="countdown-label">
            Hour{timeLeft.hours !== 1 ? "s" : ""}
          </div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.minutes}</div>
          <div className="countdown-label">
            Minute{timeLeft.minutes !== 1 ? "s" : ""}
          </div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.seconds}</div>
          <div className="countdown-label">
            Second{timeLeft.seconds !== 1 ? "s" : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
