
export default async function CreateUserAsync(user,token) {

    const response = await fetch('/api/AnimalShelter/newUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(user)
    });

    if (!response.ok) {
        throw new Error("Unable to create user")
    }
    return response;
}