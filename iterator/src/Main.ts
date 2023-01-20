import { NotificationList } from "./NotificationList";

console.log("Used to create a collection of elements/ objects which later can be iterated in any manner");

const notificationList = new NotificationList();
notificationList.addNotification("Notification 1");
notificationList.addNotification("Notification 2");
notificationList.addNotification("Notification 3");

const notificationIterator = notificationList.iterator();

while(notificationIterator.hasNext()){
    console.log(notificationIterator.current());
    notificationIterator.next();
}
