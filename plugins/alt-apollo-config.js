export default (context) => {
  return {
    httpEndpoint: process.env.nuxtApiUrl,
    getAuth: () => `Bearer ${process.env.accessToken}`,
  }
}