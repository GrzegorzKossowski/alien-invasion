const users = [
    {name: 'Arnold Schwarcwaldek', premium: true},
    {name: 'John Doe', premium: false},
    {name: 'Mary Lue', premium: false},
    {name: 'Sylvia Stallone', premium: true},
]

export const getPremiumUsers = () => {
    return users.filter((user) => user.premium);
}

export default users;