import SDK from 'gcp-miniappkit-jssdk'

SDK.init("mock")

SDK.getUserInfo().then((user) => {
  console.log(user)
})
