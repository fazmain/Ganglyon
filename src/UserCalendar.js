import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { db } from "./firebase-config";
import { doc, getDoc } from "firebase/firestore";
import "./CSS/UserCalendar.css";

const UserCalendar = ({ user }) => {
  const [value, onChange] = useState(new Date());
  const [activeDates, setActiveDates] = useState([]);

  useEffect(() => {
    if (user) {
      const fetchQuizDates = async () => {
        const userRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          const dates = userData.dailyQuizzes
            ? Object.keys(userData.dailyQuizzes)
            : [];
          setActiveDates(dates.map((date) => new Date(date)));
        } else {
          console.log("No such document!");
        }
      };

      fetchQuizDates();
    }
  }, [user]);

  const tileClassName = ({ date, view }) => {
    // Add class to tiles in month view only
    if (view === "month") {
      // Check if a date React-Calendar wants to check is on the list of dates to add class to
      let found = !!activeDates.find((d) => {
        return d.getTime() === date.getTime();
      });
      return found ? "highlight" : null;
    }
  };

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        tileClassName={tileClassName}
      />
      <style jsx="true">{`
        .react-calendar {
          border: 1px solid #a0a0a0;
          max-width: 100%;
          background-color: white;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .react-calendar__tile--highlight {
          background-color: #f8cbad !important; /* Ensure it overrides the default styles */
          color: white; /* Change text color for better readability */
        }

        .react-calendar__tile:hover,
        .react-calendar__tile:active {
          background-color: #ffede0; /* Lighter shade for hover/active states */
        }
      `}</style>
    </div>
  );
};

export default UserCalendar;
