<template>
  <div>    
    <div class="pl-4 pr-4 row">
      <div class="col-md-6 col-sm-6 col-xs-12">
        <v-card>
          <v-img
            :src="require('@/assets/img/pattern/mantel.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="400px"
          >
            <h1 class="text-center font-size">Diseño de Manteles</h1>
            <div class="text-center">
              <v-btn href="/shop" class="white--text" @click="selectCategory(1)" outlined>Ver</v-btn>
            </div>

            <!--            <v-expand-transition>-->
            <!--              <div-->
            <!--                v-if="hover"-->
            <!--                class="d-flex transition-fast-in-fast-out orange darken-2 v-card&#45;&#45;reveal display-3 white&#45;&#45;text"-->
            <!--                style="height: 100%;"-->
            <!--              >-->

            <!--                <h3>Top Picks</h3><br/>-->
            <!--                <h3>sdfs</h3>-->
            <!--              </div>-->
            <!--            </v-expand-transition>-->
          </v-img>
        </v-card>
        <!--        </v-hover>-->
      </div>
      <div class="col-md-6 col-sm-6 col-xs-12">
        <v-card>
          <v-img
            :src="require('@/assets/img/pattern/cortina.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="400px"
          >
            <h1 class="text-center font-size">Diseño de Cortinas</h1>
            <div class="text-center">
              <v-btn href="/shop" class="white--text" outlined>Ver</v-btn>
            </div>
          </v-img>
        </v-card>
      </div>
    </div>
    <div class="pl-4 pr-4 row">
      <div class="col-md-4 col-sm-4 col-xs-12">
        <v-card outlined>
          <v-img
            :src="require('@/assets/img/home/deal2.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
          >
            <h1 class="text-center font-size">Lorem & Ipsum</h1>
            <div class="text-center mt-2">
              <v-btn class="white--text caption" href="/shop" text
                >SHOP NOW
                <v-icon class="white--text caption"
                  >mdi-arrow-right</v-icon
                ></v-btn
              >
            </div>
          </v-img>
        </v-card>
      </div>
      <div class="col-md-4 col-sm-4 col-xs-12">
        <v-card outlined>
          <v-img
            :src="require('@/assets/img/home/deal3.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
          >
            <h1 class="text-center font-size">Lorem & Ipsum</h1>
            <div class="text-center mt-2">
              <v-btn class="white--text caption" href="/shop" text
                >SHOP NOW
                <v-icon class="white--text caption"
                  >mdi-arrow-right</v-icon
                ></v-btn
              >
            </div>
          </v-img>
        </v-card>
      </div>
      <div class="col-md-4 col-sm-4 col-xs-12">
        <v-card outlined>
          <v-img
            :src="require('@/assets/img/home/deal4.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
          >
            <h1 class="text-center font-size">Lorem & Ipsum</h1>
            <div class="text-center mt-2">
              <v-btn class="white--text caption" href="/shop" text
                >SHOP NOW
                <v-icon class="white--text caption"
                  >mdi-arrow-right</v-icon
                ></v-btn
              >
            </div>
          </v-img>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
      activeBtn: 1,
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
  methods:{
    selectCategory: function(idCategory){
      this.$store.commit('setCategory', idCategory)
      debugger;
      this.$router.push({ path: '/patron' });
    }
  }
};
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
