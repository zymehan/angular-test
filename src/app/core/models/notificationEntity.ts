import { Entity } from './base';
import { User } from './user';

export interface NotificationEntity extends Entity {
  sender: User;
  receiver: User;
  pattern: string;
  content: string;
  seen: number;
}

export interface AddNotification {
  receiver_id: string;
  pattern: string;
  content: string;
}

export interface NotificationId {
  id: string;
}

export interface InboxPayload {
  senderId: string;
  receiverId: string;
  pattern: string;
  content: string;
}

export enum NotificationType {
  Visit = 'visit',
  Like = 'like',
  Favorite = 'favorite',
  Message = 'message',
  Gift = 'gift',
  Gif = 'gif',
  Kiss = 'kiss',
  Block = 'block',
  Any = 'any',
}

export enum NotificationDescription {
  Visit = 'visited your profile.',
  Like = 'liked your profile.',
  Favorite = 'Sent a favorite signal to you',
  Message = 'sent a message to you',
  Gift = 'sent a gift to you',
  Gif = 'sent a gif to you',
  Kiss = 'sent a Kiss to you',
  Block = 'make you as a blocked Customer',
}
