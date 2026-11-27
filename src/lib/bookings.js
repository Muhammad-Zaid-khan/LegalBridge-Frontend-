const KEY = "lbr_demo_bookings";

export function readBookings() {
  try {
    const data = JSON.parse(localStorage.getItem(KEY) ?? "[]");
    return Array.isArray(data) ? data : [];
  } catch {
    return []; // corrupted or blocked storage
  }
}

export function writeBookings(bookings) {
  localStorage.setItem(KEY, JSON.stringify(bookings));
}