<template>
  <v-layout row wrap>
   <v-flex xs4>
     <v-card>
       <v-card-title primary-title>
         <div>
           <div class="headline">Batman vs. Superman</div>
           <span class="grey--text">2016 · Science fiction/Action fiction · 3h 3m</span>
         </div>
       </v-card-title>
       <v-card-text>
         It's been nearly two years since Superman's (Henry Cavill) colossal battle with Zod
         (Michael Shannon) devastated the city of Metropolis. The loss of life and collateral damage
         left many feeling angry and helpless, including crime-fighting billionaire
         Bruce Wayne (Ben Affleck).
         Convinced that Superman is now a threat to humanity, Batman embarks on a personal
         vendetta to end his reign on Earth, while the conniving Lex Luthor (Jesse Eisenberg)
         launches his own crusade against the Man of Steel.
      </v-card-text>
       <v-card-actions>
         <v-btn flat color="purple">Rate this movie</v-btn>
         <v-spacer>

         </v-spacer>
       </v-card-actions>
     </v-card>
   </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Hello',
  data() {
    return {
      message: 'Hello there, how are you this morning?',
    };
  },
  methods: {
    reply() {
      this.message = "I'm doint great. Thank You!";
    },
  },
};
</script>

