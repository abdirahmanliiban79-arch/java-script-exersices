async function fetchData(params) {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)

        if(!response.ok){
            throw new error(`failed to fetch a data status ${response.status}`)
        }

        const data = await response.json();
        console.log(data)
    }catch(err){
        console.log(err)
    }
}
fetchData()


async function postUsers(params) {
    try{

        const users = await fetch(`https://jsonplaceholder.typicode.com/posts`,{
            method : 'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify({
                user : 1,
                email : 'abdirahman2818@gmail.com',
                address :'B3T6',
                name : 'ahmed-muhumed',
                website : 'hildegard.org',
                phone: '122-12222-01',
                
            }),
        });
        if(!users.ok){
            throw new error(`failed to post try again ${users.status}`)
        }

        const data = await users.json();
        console.log("here is your users",data)

    }catch(err){
        console.log(err)
    }
}
postUsers()