import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import Heading from './components/Heading/Heading';
import userData from './data/userData.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import './App.css';

function App() {
    return (
        <>
            <Heading title="Profile" bottom />
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats}
            />
            <Heading title="Friends" bottom />
            <FriendList friends={friends} />
            <Heading title="Transaction" bottom />
            <TransactionHistory items={transactions} />
        </>
    );
}

export default App;
