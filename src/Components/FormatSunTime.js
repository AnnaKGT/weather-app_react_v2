import React from "react";

export default function FormatSunTime(props) {
  /* To format the sunset/sunrise timestamp as a 12-hour clock, this component
  1) takes the UTC timestamp from the API,
  2) uses the function new Date to store the date.
    a) Unfortunately the minute and hour values are relative to the device's local timezone, not to the local timezone of the city searched for, which introduces a pesky UI/UX.
  3) Therefore, once the date is retrieved, its hours and minutes get converted back to UTC hours and minutes.
  4) To convert the hour to the local timezone of the city searched for, the UTC timezone offset in hours (a value between -12 and 12 inclusive) is added to the UTC hour.
  5) The conditional statements take care of the conversion from a 24-hour clock with a UTC offset of plus or minus 12 hours to a bug-free 12-hour clock.
    a) One block of conditional statements in particular accounts for funky time zones with non-integer UTC offsets. */
  let sunSetDate = new Date(props.sunsetTime * 1000);
  let sunRiseDate = new Date(props.sunriseTime * 1000);
  let timeZoneInHours = props.timezone / 3600;

  let sunRiseUTCHour = sunRiseDate.getUTCHours();
  let sunSetUTCHour = sunSetDate.getUTCHours();

  let sunSetHour = sunSetUTCHour + timeZoneInHours;
  let sunRiseHour = sunRiseUTCHour + timeZoneInHours;

  let sunSetMinutes = sunSetDate.getUTCMinutes();
  let sunRiseMinutes = sunRiseDate.getUTCMinutes();
  // console.log(`SunSet ${sunSetUTCHour} ${sunSetHour}:${sunSetMinutes}`);
  // console.log(`SunRise ${sunRiseUTCHour} ${sunRiseHour}:${sunRiseMinutes}`);
  // console.log(`${timeZoneInHours}`);

  // This code accounts for timezones with half-hour values (for example, a search for Kabul, which has a UTC offset of 4.5 hours).
  if (
    Number.isInteger(sunSetHour) === false &&
    sunSetMinutes >= 0 &&
    sunSetMinutes < 30
  ) {
    // Accounts for the half-hour by adding 30 minutes to the display without incrementing the hour, instead rounding the hour down. Example: a nonsensical display value of 4.5:10 a.m. would become 4:40 a.m.
    sunSetMinutes = sunSetMinutes + 30;
    sunSetHour = Math.floor(sunSetHour);

    sunRiseMinutes = sunRiseMinutes + 30;
    sunRiseHour = Math.floor(sunRiseHour);
  } else if (
    Number.isInteger(sunSetHour) === false &&
    sunSetMinutes >= 30 &&
    sunSetMinutes < 60
  ) {
    // Accounts for the half-hour by subtracting 30 minutes from the display, rounding the hour down, then incrementing the hour. Example: a display value of 4:70 a.m. would be nonsensical; instead, 4.5:40 a.m. is reformatted to 5:10 a.m.
    sunSetMinutes = sunSetMinutes - 30;
    sunSetHour = Math.floor(sunSetHour) + 1;

    sunRiseMinutes = sunRiseMinutes - 30;
    sunRiseHour = Math.floor(sunRiseHour) + 1;
  }

  // Formats the minutes and the hours
  if (sunRiseHour <= 36 && sunRiseHour > 24) {
    sunRiseHour = sunRiseHour - 24;
  } else if (sunRiseHour <= 0 && sunRiseHour >= -12) {
    sunRiseHour = sunRiseHour + 24;
  }

  if (sunSetHour <= 36 && sunSetHour > 24) {
    sunSetHour = sunSetHour - 24;
  } else if (sunSetHour <= 0 && sunSetHour >= -12) {
    sunSetHour = sunSetHour + 24;
  }

  if (sunSetMinutes < 10) {
    sunSetMinutes = "0" + sunSetMinutes;
  }

  if (sunRiseMinutes < 10) {
    sunRiseMinutes = "0" + sunRiseMinutes;
  }

  if (sunSetHour < 10) {
    sunSetHour = "0" + sunSetHour;
  }

  if (sunRiseHour < 10) {
    sunRiseHour = "0" + sunRiseHour;
  }

  if (props.type === "sunrise") {
    return (
      <span>
        {" "}
        {sunRiseHour}:{sunRiseMinutes}
      </span>
    );
  } else {
    return (
      <span>
        {" "}
        {sunSetHour}:{sunSetMinutes}
      </span>
    );
  }
}
