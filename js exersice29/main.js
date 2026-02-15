async function fetchUserData() {
    console.log("fething user data")
    const user = await fetch(`data.json`)
    let data = await user.json();
    console.log("here is your data",data)
}
fetchUserData()