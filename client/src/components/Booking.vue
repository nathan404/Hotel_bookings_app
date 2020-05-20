<template lang="html">
<div>
    <h2>{{ booking.guestname }}</h2>
    <p>{{ booking.emailaddress }}</p>
    <h3>{{ booking.checkinstatus }}</h3>
    <button v-on:click="handleCheckIn(booking._id)">Check in guest</button> 
    <button v-on:click="handleCheckOut(booking._id)">Check out guest</button> 
    <button v-on:click="handleDeleteGuest(booking._id)">Delete guest</button> 
</div>
  
</template>

<script>
import BookingService from '../services/BookingService';
import { eventBus } from '../main';

export default {
    name: "booking",
    props: ['booking'],
    methods: {
        handleDeleteGuest(id){
            BookingService.deleteBooking(id)
            .then(response => eventBus.$emit('booking-deleted', id))
        },
     
        handleCheckIn(id){
        const payload = {
            checkinstatus: "Checked in"
        };

        BookingService.updateBooking(id)
    
        .then(response => eventBus.$emit('booking-updated', id))
        }
    }
}
</script>

<style>
p, h1, h2, h3, form{
  font-family: Verdana, sans-serif;
}
h2{
    margin:0.25 0;
}
h3{
    margin:0 0 0.25rem 0;
}
button {
  padding:0.5rem;
  margin: 0.25rem;
}

</style>