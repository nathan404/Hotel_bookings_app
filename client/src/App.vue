<template>
  <div id="app">
    <bookings-form />
    <bookings-grid />
  </div>
</template>

<script>
import BookingsForm from './components/BookingsForm'
import BookingsGrid from './components/BookingsGrid'

export default {
  name: 'app',
  components: {
    "bookings-form": BookingsForm,
    "bookings-grid": BookingsGrid
  }
}
</script>

<style>
p h1 h3{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

</style>
