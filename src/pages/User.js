// components
import AccountCard from '../components/AccountCard';
// custom
import '../custom/pages/user.scss';


export default function User() {
    // mock data
    // TO DO -> call API 
    const DATA = [
        {
            id: 1,
            title: 'Argent Bank Checking (x8349)',
            amount: '$2,082.79',
            description: 'Available Balance',
        },
        {
            id: 2,
            title: 'Argent Bank Savings (x6712)',
            amount: '$10,928.42',
            description: 'Available Balance',
        },
        {
            id: 3,
            title: 'Argent Bank Credit Card (x8349)',
            amount: '$184.30',
            description: 'Current Balance',
        }
    ]

    return (
        <div className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br/>Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            {DATA.map((item) => {
                return (
                    <AccountCard
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        description={item.description}
                    />
                )
            })}
        </div>
    )
}
