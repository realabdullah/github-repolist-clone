export default async ({ store }) => {
  await store.dispatch("getUserDetails")
  await store.dispatch("getRepoDetails")
}