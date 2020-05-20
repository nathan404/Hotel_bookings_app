<template lang="html">
<div>
    <form id="bookings-form" v-on:submit="handleSubmit">
        <h2>Add a guest booking</h2>
            <div>
                <label for="guestname">Guest name:</label>
                <input type="text" id="guestname" v-model="guestname" />
            </div>
            <div>
                <label for="emailaddress">Guest email address:</label>
                <input type="email" id="emailaddress" v-model="emailaddress" />
            </div>
            <div>
                <label for="checkinstatus">Check in status:</label>
                <select id="checkinstatus" v-model="checkinstatus">
                    <option disabled value="">Select check in status</option>
                    <option>Not checked in</option>
                    <option>Checked in</option>
                    <option>Checked out</option>
                </select>
            </div>

            <input type="submit" value="Save guest" id="save" />
    </form>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
import { BookingService } from '../services/BookingService'

export default {
    name: 'bookings-form',
    data(){
        return {
            guestname: "",
            emailaddress: "",
            checkinstatus: ""
        }
    },
    methods: {
        handleSubmit(event){
            event.preventDefault();

            const payload = {
                guestname: this.guestname,
                emailaddress: this.emailaddress,
                checkinstatus: this.checkinstatus
            };

            BookingService.postBooking(payload)
            .then(booking => {
                eventBus.$emit('booking-added', booking)
            })
        }
    }
}
</script>

<style>

</style>