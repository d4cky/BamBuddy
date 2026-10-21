const { getAllDayGoogleCalendarUrl, toAllDayRange } = require("../src/utils/calendarHelper");

describe("toAllDayRange", () => {
  test("ends on the next day because Google treats the end date as exclusive", () => {
    expect(toAllDayRange("2025-08-17")).toBe("20250817/20250818");
  });

  test("rolls over month and year boundaries", () => {
    expect(toAllDayRange("2025-01-31")).toBe("20250131/20250201");
    expect(toAllDayRange("2025-12-31")).toBe("20251231/20260101");
  });

  test("handles leap years", () => {
    expect(toAllDayRange("2028-02-28")).toBe("20280228/20280229");
    expect(toAllDayRange("2027-02-28")).toBe("20270228/20270301");
  });
});

describe("getAllDayGoogleCalendarUrl", () => {
  test("builds a Google Calendar template link with all event fields", () => {
    const url = new URL(
      getAllDayGoogleCalendarUrl({
        title: "Hoi An Lantern Workshop",
        date: "2025-08-17",
        details: "Meet at the old town gate",
        location: "Hoi An, Quang Nam",
      })
    );

    expect(url.origin + url.pathname).toBe("https://calendar.google.com/calendar/render");
    expect(url.searchParams.get("action")).toBe("TEMPLATE");
    expect(url.searchParams.get("text")).toBe("Hoi An Lantern Workshop");
    expect(url.searchParams.get("dates")).toBe("20250817/20250818");
    expect(url.searchParams.get("details")).toBe("Meet at the old town gate");
    expect(url.searchParams.get("location")).toBe("Hoi An, Quang Nam");
  });
});
