<template>
  <section class="profile__details">
    <div class="__profile">
      <div class="user__profile">
        <div class="__avatar">
          <img
            :src="userData.avatarUrl"
            alt="avatar"
          />
        </div>
        <div class="user__details">
          <p class="user__name">{{ userData.name }}</p>
          <p class="__username">{{ userData.login }}</p>
        </div>
      </div>
      <button class="follow__btn btn" aria-label="Follow Button">Follow</button>
      <p class="about__info">{{ userData.bio }}</p>
      <div class="__others">
        <div class="url__link">
          <UrlIcon />
          <a :href="userData.websiteUrl">{{ userData.websiteUrl }}</a>
        </div>
        <div class="__follow">
          <a class="profile__link" href="#">
            <FollowIcon />
            <span class="follow__count">{{ userData.followers.totalCount }}</span>
            followers
          </a>
          <a class="profile__link" href="#">
            .
            <span class="follow__count">{{ userData.following.totalCount }}</span>
            following
          </a>
        </div>
      </div>
      <button class="m__btn btn" aria-label="Follow Button">Follow</button>
      <a class="profile__link" href="#">Block or Report</a>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProfileDetails',
  computed: {
    ...mapState(['userData'])
  }
}
</script>