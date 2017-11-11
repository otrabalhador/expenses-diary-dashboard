<template>
  <div id='navbar'>
    <div class="-navigation-bar">
      <div class="-brand">
        <router-link class="link" to="/">
          <img class="-brand" src="/static/img/icons/favicon.ico"/>
        </router-link>
      </div>
      <ul class="-left-to-right">
        
        <li v-if="isLoggedIn">Logged as {{username}}</li>

        <router-link v-if="isLoggedIn" class="link" :to="routeDetails.expenses.path">
          <li :class="{ active: isActive(routeDetails.expenses.name)}">Expenses</li>
        </router-link>

      </ul>

      <ul class="-right-to-left">

        <router-link v-if="!isLoggedIn" class="link" :to="routeDetails.login.path">
          <li :class="{ active: isActive(routeDetails.login.name)}">Login</li>
        </router-link>

        <router-link v-else :to="routeDetails.logout.path">
          <li @click="handleLogout()">Logout</li>
        </router-link>

      </ul>
    </div>
 
  </div>
</template>

<script>
import routeDetails from '@/router/route_details'
import { mapGetters } from 'vuex'
export default {
  name: 'navbar',
  data () {
    return {
      routeDetails: routeDetails
    }
  },
  methods: {
    isActive (name) {
      return name === this.$route.name
    },
    handleLogout () {
      console.log('logouting')
      this.$store.commit('logout')
    }
  },
  computed: mapGetters(['username', 'isLoggedIn'])
}
</script>


<style scoped lang="scss">
  @import '../sass/variables';

  .-navigation-bar {
    display: grid;
    grid-template-areas: 'brand left right';
    grid-template-columns: 1fr 3fr 3fr 1fr;

    align-items: center;

    position: relative;
    top: 0;
    left: 0;
    height: 100px;
    width: 100vw;

    @include primary-color;

    .-brand {
      grid-area: brand;
      justify-self: center;
    }

    .-left-to-right {
      grid-area: left;
      display: flex;
      flex-direction: row;
    }

    .-right-to-left {
      grid-area: right;
      display: flex;
      flex-direction: row-reverse;
    }

    ul {

      li {
        padding: 10px 20px 10px 20px;
        list-style: none;
        box-sizing: border-box;
      }

      li:hover {
        font-weight: bold;
      }

      li.active {
        padding-top: 5px;
        font-weight: bold;
        border-bottom: 2px solid $almost-black;
      }

    }
  }

</style>