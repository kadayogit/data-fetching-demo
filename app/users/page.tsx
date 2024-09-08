type Users = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string,
}
export default async function Users() {
    //creating loading time delay of 3 seconds, then fetch user data
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch("https://jsonplaceholder.typicode.com/users1");
    const data = await response.json();

    console.log(data);

    //user data binding
    return <div className="w-full">
        {data.map((user: Users) => (
            <table className="separate border border-slate-400">
                <thead>
                    <tr>
                        <th className="border border-slate-300">ID</th>
                        <th className="border border-slate-300">Name</th>
                        <th className="border border-slate-300">Username</th>
                        <th className="border border-slate-300">Email</th>
                        <th className="border border-slate-300">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-300">{user.id}</td>
                        <td className="border border-slate-300">{user.name}</td>
                        <td className="border border-slate-300">{user.username}</td>
                        <td className="border border-slate-300">{user.email}</td>
                        <td className="border border-slate-300">{user.phone}</td>
                    </tr>
                </tbody>
            </table>
        ))}
    </div>
}