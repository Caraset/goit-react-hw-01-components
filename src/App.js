// task 1
import Profile from "./components/Profile/Profile";
import user from "./user.json";

// task 2
import Statistics from "./components/Statistics/Statistics";
import stats from "./statistical-data.json";

// task 3
import FriendList from "./components/FriendList/FriendList";
import friends from "./friends.json";

// task 4
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./transactions.json";

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Stat" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
