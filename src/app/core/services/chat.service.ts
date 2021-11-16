import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Chat, SeenMessageDto, SendMessagePayload } from '../models/chat';
import { SuccessResponse } from '../models/success-response';
import { UserId } from '../models/user';
// import { Paginator } from '../models/paginator';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  currentChatId: string;
  chats: Chat[] = [];
  chats$: BehaviorSubject<Chat[]> = new BehaviorSubject<Chat[]>(this.chats);
  totalUnreadChanged$: Subject<any> = new Subject<any>();

  constructor(
    private http: HttpClient
  ) { }

  messageCount(): Observable<number> {
    const url = `${environment.api}/sdate/chat/messageCount`;
    return this.http.get<number>(url);
  }

  kissCount(): Observable<number> {
    const url = `${environment.api}/sdate/chat/kissCount`;
    return this.http.get<number>(url);
  }

  giftCount(): Observable<number> {
    const url = `${environment.api}/sdate/chat/giftCount`;
    return this.http.get<number>(url);
  }

  sendMessage(payload: SendMessagePayload): Observable<Chat> {
    const url = `${environment.api}/sdate/chat/send-message`;
    return this.http.post<Chat>(url, payload);
  }

  getPartChatList(payload: UserId): Observable<Chat[]> {
    const url = `${environment.api}/sdate/chat/getPartChatList`;
    return this.http.put<Chat[]>(url, payload);
  }

  seenMessage(payload: SeenMessageDto): Observable<Chat> {
    const url = `${environment.api}/sdate/chat/seen-message`;
    return this.http.put<Chat>(url, payload);
  }

  getAllChatList(payload: UserId): Observable<Chat[]> {
    const url = `${environment.api}/sdate/chat/getAllChatList`;
    return this.http.put<Chat[]>(url, payload);
  }

  initProjectConsultationChat(projectId: string): Observable<Chat> {
    const url = `${environment.api}/chat/init/project-consultation/${projectId}`;
    return this.http.post<Chat>(url, null);
  }

  initChat(projectId: string): Observable<Chat> {
    const url = `${environment.api}/chat/init/${projectId}`;
    return this.http.post<Chat>(url, null);
  }

  // getChats(): Observable<Paginator<Chat>> {
  //   const url = `${environment.api}/chat/all`;
  //   return this.http.get<Paginator<Chat>>(url);
  // }

  getChatById(id: string): Observable<Chat> {
    const url = `${environment.api}/chat/${id}`;
    return this.http.get<Chat>(url);
  }

  getMessages(id: string): Observable<Chat[]> {
    const url = `${environment.api}/chat/${id}/messages`;
    return this.http.get<Chat[]>(url);
  }

  readAllMessages(id: string): Observable<SuccessResponse> {
    const until = new Date().getTime();
    const url = `${environment.api}/chat/${id}/read/${until}`;
    return this.http.post<SuccessResponse>(url, null);
  }

  readMessageById(id: string): Observable<SuccessResponse> {
    const url = `${environment.api}/chat/message/${id}/read`;
    return this.http.post<SuccessResponse>(url, null);
  }

  totalUnreadCount(): Observable<number> {
    const url = `${environment.api}/chat/unread`;
    return this.http.get(url).pipe(map((res: any) => res.total));
  }

  setChats(chats?: Chat[]): void {
    this.chats = chats || this.chats;
    this.chats$.next(this.chats);
  }
}
