export default function getUser() {
  const loggedAFPUser = localStorage.getItem('loggedAFPUser')
  if (loggedAFPUser) {
    const user = JSON.parse(loggedAFPUser)
    return user
  }
}
