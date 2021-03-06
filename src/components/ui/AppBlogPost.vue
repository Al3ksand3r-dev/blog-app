<template>
  <div class="blog">
    <header class="blog__header">
      <img
        :src="require('@/assets/' + bannerUrl + '.jpg')"
        alt="banner"
        class="blog__banner"
      />
    </header>
    <main class="blog__article">
      <h1 class="blog__title">{{ title }}</h1>
      <p class="blog__text">
        {{ text }}
      </p>
    </main>
    <footer class="blog__footer">
      <div class="blog__user">
        <img
          :src="require('@/assets/' + thumbUrl + '.jpg')"
          alt="thumbnail"
          class="blog__thumbnail"
        />
        <div class="blog__owner">
          <p class="blog__author">{{ author }}</p>
          <p class="blog__occupation">{{ occupation }}</p>
        </div>
      </div>
      <p class="blog__timestamp">{{ date }}</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "AppBlogPost",
  props: {
    bannerUrl: {
      type: String,
      default: "banners/motivation",
    },
    title: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    thumbUrl: {
      type: String,
      default: "portraits/girl",
    },
    author: {
      type: String,
      default: "",
    },
    occupation: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      default: "",
    },
  },
};
</script>
