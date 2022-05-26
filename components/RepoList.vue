<template>
  <div class="__repo">
    <div class="repo__detail">
      <div class="repo__name">
        <a :href="repo.node.url" class="repo__title">{{ repo.node.name }}</a>
        <span class="__visibility">{{ repo.node.visibility }}</span>
      </div>
      <div class="repo__info">
        <div
          class="__technology"
          v-for="(value, key) in repo.node.primaryLanguage"
          :key="key"
        >
          <div
            class="tech__color"
            v-if="key === 'color'"
            :style="{ background: value }"
            style="margin-right: -30px"
          ></div>
          <p class="__lang" v-if="key === 'name'">{{ value }}</p>
        </div>
        <p class="repo__timeline">
          Updated on {{ $moment(repo.node.updatedAt).format("LL") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['repo']
}
</script>