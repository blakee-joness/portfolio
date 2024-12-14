import { useEffect, useState } from "react";

interface TimeSinceProps {
  date: Date;
  precision?: "years" | "months" | "days" | "hours" | "minutes" | "seconds";
}

/**
 * A React component that displays the time elapsed since a given date.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Date} props.date - The date from which to calculate the elapsed time.
 * @returns {string} The time elapsed since the given date.
 *
 * @example
 * <TimeSince date={new Date('2022-01-01T00:00:00Z')} />
 *
 * @remarks
 * This component uses the `useState` hook to manage the state of the elapsed time string
 * and the `useEffect` hook to calculate the elapsed time at regular intervals.
 * The elapsed time is calculated in terms of years, months, days, hours, minutes, and seconds.
 * The calculation is updated every second using `setInterval`.
 *
 */
export default function TimeSince({ date }: TimeSinceProps): string {
  const [timeSince, setTimeSince] = useState<string>("");

  useEffect(() => {
    const calculateTimeSince = () => {
      const now = new Date();
      let seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

      let interval = Math.floor(seconds / 31536000); // Number of seconds in a year
      let timeString = "";
      if (interval >= 1) {
        timeString += `${interval} year${interval > 1 ? "s" : ""} `;
        seconds -= interval * 31536000;
      }
      interval = Math.floor(seconds / 2592000); // Number of seconds in a month
      if (interval >= 1) {
        timeString += `and ${interval} month${interval > 1 ? "s" : ""} `;
        seconds -= interval * 2592000;
      }
      setTimeSince(timeString.trim());
    };

    calculateTimeSince();
    const intervalId = setInterval(calculateTimeSince, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [date]);

  return `${timeSince}`;
}
