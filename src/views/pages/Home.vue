<template>
  <div class="wrapper wrapper--flex bg-light">
    <div class="content content--grid">
      <h1 class="content__title">Recent Posts</h1>
      <app-blog-post
        bannerUrl="banners/productive"
        title="How To Build Trust At Work"
        text="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
        dignissimos corrupti! Suscipit minima consequatur ab saepe est nihil
        dolore libero laudantium tempore. Autem in nulla maiores unde fugiat
        accusantium, ex id ut voluptatem repellat eum perferendis. Illo odio
        tempore sapiente enim voluptates dolorum, temporibus eos error ut.
        "
        thumbUrl="portraits/girl"
        author="Nina Ford"
        occupation="Manager"
        date="19 Sep"
      />
      <app-blog-post
        bannerUrl="banners/training"
        title="How Do You Get Up And Go Forward"
        text="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
        dignissimos corrupti! Suscipit minima consequatur ab saepe est nihil
        dolore libero laudantium tempore. Autem in nulla maiores unde fugiat
        accusantium, ex id ut voluptatem repellat eum perferendis. Illo odio
        tempore sapiente enim voluptates dolorum, temporibus eos error ut.
        "
        thumbUrl="portraits/girl2"
        author="Sarah Jones"
        occupation="Coach"
        date="8 May"
      />
      <app-blog-post
        bannerUrl="banners/motivation"
        title="Accomplish Great Things In Your Life"
        text="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
        dignissimos corrupti! Suscipit minima consequatur ab saepe est nihil
        dolore libero laudantium tempore. Autem in nulla maiores unde fugiat
        accusantium, ex id ut voluptatem repellat eum perferendis. Illo odio
        tempore sapiente enim voluptates dolorum, temporibus eos error ut.
        "
        thumbUrl="portraits/girl3"
        author="Matilda Fletcher"
        occupation="Motivational Speaker"
        date="11 Nov"
      />
    </div>
  </div>
</template>

<script>
import AppBlogPost from "../../components/ui/AppBlogPost.vue";
export default {
  components: { AppBlogPost },
  name: "Home",
};
</script>
