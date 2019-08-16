<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">Alert Dialogs</div>
    </v-ons-toolbar>

    <v-ons-list>
      <v-ons-list-header>Notifications</v-ons-list-header>
      <v-ons-list-item
        tappable
        @click="$ons.notification.alert('Hello, world!')"
        >
        <div class="center">
          Alert
        </div>
      </v-ons-list-item>
      <v-ons-list-item
        tappable
        @click="$ons.notification.confirm('Are you ready?')"
        >
        <div class="center">
          Confirmation
        </div>
      </v-ons-list-item>
      <v-ons-list-item
        tappable
        @click="$ons.notification.prompt('What is your name?')"
        >
        <div class="center">
          Prompt
        </div>
      </v-ons-list-item>


    </v-ons-list>

    <v-ons-alert-dialog modifier="rowfooter"
      :visible.sync="alertDialog1Visible"
    >
      <span slot="title">Title slots</span>
      Lorem ipsum
      <template slot="footer">
        <v-ons-alert-dialog-button @click="alertDialog1Visible = false">Cancel</v-ons-alert-dialog-button>
        <v-ons-alert-dialog-button @click="alertDialog1Visible = false">Ok</v-ons-alert-dialog-button>
      </template>
    </v-ons-alert-dialog>

    <v-ons-alert-dialog modifier="rowfooter"
      :title="'Title props'"
      :footer="{
        Cancel: () => alertDialog2Visible = false,
        Ok: () => alertDialog2Visible = false
      }"
      :visible.sync="alertDialog2Visible"
    >
      Lorem ipsum
    </v-ons-alert-dialog>

  </v-ons-page>
</template>


<script>
export default {
  name: 'main',
  data() {
    return {
      alertDialog1Visible: false,
      alertDialog2Visible: false
    };
  }

}

</script>
<style scoped>


</style>