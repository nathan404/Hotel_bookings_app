use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    guestname: "Nathan Kirley",
    emailaddress: "nathan@travller.com",
    checkinstatus: "checked-in"
  },
  {
    guestname: "Dave Campbell",
    emailaddress: "dave@travller.com",
    checkinstatus: "not-checked-in"
  },
  {
    guestname: "Eugene Kim",
    emailaddress: "ek@travller.com",
    checkinstatus: "checked-out"
  }
]);
