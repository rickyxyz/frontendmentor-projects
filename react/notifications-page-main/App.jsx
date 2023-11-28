import "./style.css";
import markWebber from "./assets/images/avatar-mark-webber.webp";
import angelaGray from "./assets/images/avatar-angela-gray.webp";
import jacobThompson from "./assets/images/avatar-jacob-thompson.webp";
import rizkyHasanuddin from "./assets/images/avatar-rizky-hasanuddin.webp";
import kimberlySmith from "./assets/images/avatar-kimberly-smith.webp";
import nathanPeterson from "./assets/images/avatar-nathan-peterson.webp";
import annaKim from "./assets/images/avatar-anna-kim.webp";
import imageChess from "./assets/images/image-chess.webp";

const NOTIFICATIONS = [
  {
    type: "react",
    profilePicture: markWebber,
    name: "Mark Webber",
    content: "reacted to your recent post",
    extra: "My first tournament today!",
    isUnread: true,
    time: "1m ago",
    parent: null,
  },
  {
    type: "follow",
    profilePicture: angelaGray,
    name: "Angela Gray",
    content: "followed you",
    extra: null,
    isUnread: true,
    time: "5m ago",
    parent: null,
  },
  {
    type: "join",
    profilePicture: jacobThompson,
    name: "Jacob Thompson",
    content: "has joined your group",
    extra: "Chess Club",
    isUnread: true,
    time: "1 day ago",
    parent: null,
  },
  {
    type: "message",
    profilePicture: rizkyHasanuddin,
    name: "Rizky Hasanuddin",
    content: "sent you a private message",
    extra: null,
    isUnread: false,
    time: "5 days ago",
    parent:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks not and I'm already having lots of fun and improving my game.",
  },
  {
    type: "comment",
    profilePicture: kimberlySmith,
    name: "Kimberly Smith",
    content: "commented on your picture",
    extra: null,
    isUnread: false,
    time: "1 week ago",
    parent: imageChess,
  },
  {
    type: "react",
    profilePicture: nathanPeterson,
    name: "Nathan Peterson",
    content: "reacted to your recent post",
    extra: "5 end-game strategies to increase your win rate",
    isUnread: false,
    time: "2 weeks ago",
    parent: null,
  },
  {
    type: "leave",
    profilePicture: annaKim,
    name: "Anna Kim",
    content: "left the group",
    extra: "Chess Club",
    isUnread: false,
    time: "2 weeks ago",
    parent: null,
  },
];

function Notification({ notification }) {
  const { type, profilePicture, name, content, extra, isUnread, time, parent } =
    notification;

  const notifiationLayoutClass = {
    message: "notifcation-message",
    comment: "notification-picture",
  };

  const notificationExtraClass =
    type == "join" || type == "leave"
      ? "notification__extra_group"
      : "notification__extra_post";

  return (
    <article
      className={`notification ${isUnread ? "notification-unread" : ""} ${
        notifiationLayoutClass[type] || ""
      }`}
    >
      <img
        src={profilePicture}
        alt="profile picture"
        className="notification__profile_picture"
      />
      <main>
        <p>
          <span className="notification__name">{name}</span> {content}{" "}
          {extra && (
            <span className={`notification__extra ${notificationExtraClass}`}>
              {extra}
            </span>
          )}
          {isUnread && <span className="notification__ping" />}
        </p>
        <span className="notification__time">{time}</span>
        {type === "message" && (
          <aside className="notification__message">{parent}</aside>
        )}
      </main>
      {type === "comment" && (
        <aside className="notification__picture">
          <img src={parent} alt="your picture" />
        </aside>
      )}
    </article>
  );
}

function App() {
  return (
    <>
      <header className="header">
        <h1>Notifications</h1>
        <span>3</span>
        <button>Mark all as read</button>
      </header>
      <main className="notification_list">
        {NOTIFICATIONS.map((notification) => (
          <Notification
            key={`n-${notification.name}-${notification.time}}`}
            notification={notification}
          />
        ))}
      </main>
    </>
  );
}

export default App;