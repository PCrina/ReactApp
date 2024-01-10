import Friend from "./Friend";

export default function ListFriends({
  friendsList,
  onSelectedFriend,
  selectedFriend,
}) {
  return (
    <div>
      <ul>
        {friendsList.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            onSelectedFriend={onSelectedFriend}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
    </div>
  );
}
