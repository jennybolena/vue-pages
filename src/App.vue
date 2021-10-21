<template>
  <div id="app">
    <div id="nav" class="nav_bar">
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/education">Education</router-link>
      <a href="javascript:void(0);" class="nav_icon" v-on:click="displayNav">
        <i class="fas fa-bars"></i>
      </a>
    </div>
    <router-view/>
    <footer id="contact">
        <h2>Contact for more</h2>
        <div id="contacts_el">
          <div class="mail_icon">
            <a href="mailto://bolenajenny@gmail.com" target="_blank" class="ref_icon">
              <i class="fas fa-envelope"></i><p class="toolpit">bolenajenny@gmail.com</p>
            </a>
          </div>
          <div class="linkedIn_icon">
            <a href="https://www.linkedin.com/in/jenny-bolena/" target="_blank" class="ref_icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <h5>© 2021 Jenny Bolena</h5>
      </footer>

  </div>
</template>





<style>
  *, html{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #nav .nav_icon{
    display: none;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background-color: black;
}

#nav {
  z-index: 1;
  position: sticky;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: center;
  background-color: black;
  background-color: #000000;
}

#nav a {
  display: inline-block;
  font-weight: bold;
  color: #ffffff;
  padding: 20px;
  font-size: 24px;
  text-decoration: none;
}
  #nav a:hover{
    display: inline-block;
    color: darkgrey;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .nav a.nav_icon{
    display: block;
    float: right;
    color: white;
  }



  @media screen and (max-width: 600px) {
    #nav{
      display: block;
    }
    #nav a{
      text-align: left;
      font-size: 20px;
    }

    #nav a:not(:first-child) {
      display: none;
    }

    #nav.nav_bar.responsive a{
      display: block;
      text-align: left;
    }

    #nav a.nav_icon{
      display: inline-block;
      top:5px;
      right: 5px;
      position: absolute;
      color: #42b983;
    }

  }

  /*contact*/
  #contact{
    padding: 10px;
    color: white;
    background-color: black;
  }


  #contact h2{
    padding: 5px 5px;
    color: #42b983;
  }

  #contact h5{
    text-align: center;
    padding: 5px 10px;
  }
  #contacts_el{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }


  .mail_icon, .linkedIn_icon{
    font-size: 50px;
    padding: 15px;
  }


  .ref_icon{
    text-decoration: none;
    color: inherit;
    position: relative;
  }

  .ref_icon:hover{
    color: #42b983;
  }

  .ref_icon .toolpit{
    visibility: hidden;
    background-color: black;
    color: white;
    text-align: center;
    border-radius: 6px;
    padding: 1px 3px;

    font-size: 15px;
    position: absolute;
    z-index: 1;
    bottom: 100%;

  }

  .ref_icon:hover .toolpit{
    visibility: visible;
  }


</style>

<script>

  export default {
    name: 'App',
    methods:{
      displayNav: function(){
        let el = document.getElementById('nav');
        if (el.className === "nav_bar") {
          el.className += " responsive";
        } else {
          el.className = "nav_bar";
        }
      }

  }

  }
</script>
