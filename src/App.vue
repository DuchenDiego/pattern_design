<template>
  <v-app id="inspire">
    <div class="body-background">
      <v-app-bar
        color="primary"
        dark
      >
  <!--      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />-->

        <v-toolbar-title
          style="width: 350px"
        >
          <a href="/" class="white--text" style="text-decoration: none"><v-icon>mdi-flower-tulip</v-icon>&nbsp;Patterns</a>
        </v-toolbar-title>
        <!-- <v-text-field
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Search"
          class="hidden-sm-and-down pl-10 ml-4"
        /> -->
        <v-spacer />
        <v-btn icon>
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
        <v-btn v-on="on" icon>
          <v-badge
            content="2"
            value="2"
            color="green"
            overlap
          >
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
        <v-btn v-on="on" href="/cart" icon>
          <v-badge
            content="2"
            value="2"
            color="green"
            overlap
          >
            <v-icon>mdi-cart</v-icon>
          </v-badge>
        </v-btn>
      </v-app-bar>
      <v-bottom-navigation 
        :value="activeBtn"
        class="nav d-flex justify-space-around  mb-3"
        dark
        horizontal>
        <v-btn value="recent" @click="change_route('/categoria')">
          <span class="title"> Categorias</span>

          <v-icon>mdi-shape</v-icon>
        </v-btn>

        <v-btn value="favorites" @click="change_route('/patron')">
          <span class="title">Patrones</span>

          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn value="nearby">
          <span class="title">Contacto</span>

          <v-icon>mdi-card-account-phone</v-icon>
        </v-btn>
      </v-bottom-navigation>
      <main>
        <v-content>
            <router-view></router-view>
        </v-content>
      </main>
      <v-footer class="black" app>
        <span class="white--text"
          >BD_JM &copy; {{ new Date().getFullYear() }}</span
        >
        <v-spacer />
        <span class="white--text">v{{ version }}</span>
      </v-footer>
    </div>
  </v-app>
</template>
<script src="./App.ts"></script>
<style scoped>
/************ APP ***************/
.body-background {
  /* The image used */
  /*background-image: url("/images/background3.jpg");*/
  background-image: radial-gradient(
    circle at 50% -20.71%,
    #ffff8d 0,
    #ffea82 16.67%,
    #eed077 33.33%,
    #d8b46c 50%,
    #c09a62 66.67%,
    #a98359 83.33%,
    #947051 100%
  );
  /* Full height */
  height: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
/* HEADER */
.header-app {
  height: 0px;
}
.header-session-app {
  height: 0px;
  padding-left: 70px;
}
.v-toolbar-title-app {
  padding-left: 20px;
}
.v-app-bar-app {
  height: "0px";
}
/* FOOTER */
.footer-app {
  height: 0px;
}
.v-toolbar-title-login {
  padding-left: 40px;
  font-size: 1.8em;
}
.menu-position {
  padding-left: 40px;
}
/* APP */
</style>
