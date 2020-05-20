use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    guestname: "Nathan Kirley",
    emailaddress: "nathan@travller.com",
    checkinstatus: "Checked in"
  },
  {
    guestname: "Dave Campbell",
    emailaddress: "dave@travller.com",
    checkinstatus: "Not checked in"
  },
  {
    guestname: "Eugene Kim",
    emailaddress: "ek@travller.com",
    checkinstatus: "Checked out"
  }
]);
