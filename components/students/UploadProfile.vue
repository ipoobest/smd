<template>
  <v-container grid-list-xl>
    <image-input v-model="avatar">
      <div slot="activator">
        <v-avatar
          v-if="!avatar"
          v-ripple
          size="150px"
          class="grey lighten-3 mb-3"
        >
          <span>Click to add avatar</span>
        </v-avatar>
        <v-avatar v-else v-ripple size="150px" class="mb-3">
          <img :src="avatar.imageURL" alt="avatar" />
        </v-avatar>
      </div>
    </image-input>
    <v-slide-x-transition>
      <div v-if="avatar && saved == false">
        <v-btn class="primary" :loading="saving" @click="uploadImage"
          >Save Avatar</v-btn
        >
      </div>
    </v-slide-x-transition>
  </v-container>

  <!-- https://www.freecodecamp.org/news/how-to-build-a-flexible-image-uploader-component-using-vue-js-2-0-5ee7fc77516/ -->
</template>

<script>
export default {
  name: 'UploadProfile'
}
</script>
