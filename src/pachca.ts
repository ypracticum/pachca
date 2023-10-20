/* c8 ignore start */
import { ApiClient, type ApiClientOptions } from "@/api-client";
import {
  CustomPropertiesEndpoint,
  GroupTagsEndpoint,
  UploadsEndpoint,
  UsersEndpoint,
  ChatsEndpoint,
} from "@/endpoints";

export class Pachca {
  public client: ApiClient;
  public customProperties: CustomPropertiesEndpoint;
  public uploads: UploadsEndpoint;
  public users: UsersEndpoint;
  public groupTags: GroupTagsEndpoint;
  public chats: ChatsEndpoint;

  constructor(options: ApiClientOptions) {
    this.client = new ApiClient(options);
    this.customProperties = new CustomPropertiesEndpoint(this.client);
    this.uploads = new UploadsEndpoint(this.client);
    this.users = new UsersEndpoint(this.client);
    this.groupTags = new GroupTagsEndpoint(this.client);
    this.chats = new ChatsEndpoint(this.client);
  }
}
/* c8 ignore stop */
