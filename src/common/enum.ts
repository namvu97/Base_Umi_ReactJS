export enum otpStatus {
  PENDDING = 0,
  ACTIVED = 1,
}

export enum TypeLike {
  LIKE_ME = 1,
  LIKED = 2,
}

export enum TypeBlock {
  BLOCK_ME = 1,
  BLOCKED = 2,
}

export enum ImageType {
  AVATAR = 1,
  SUB_IMAGE = 2,
}

export enum ImageStatus {
  PENDDING = 1,
  CONFIRMED = 2,
  ALL = 3,
}

export enum ConversationBlock {
  BLOCK = 1,
  NOT_BLOCK = 0,
}

export enum ContactType {
  BEFORE_LOGIN = 1,
  AFTER_LOGIN = 2,
}

export enum ContactReasonType {
  AGE_VERIFICATION = 1,
  PAYMENT = 2,
  WITHDRAW = 3,
  OTHER = 4,
}

export enum TaskStatus {
  PENDDING = 0,
  ACTIVE = 1,
  CANCEL = 2,
}

export enum TypePoint {
  BUY = 1,
  PAY = 2,
  BONUS = 3,
}

export enum UserLevel {
  NORMAL = 1,
  PLATIUM = 2,
}

export enum RoleUser {
  ADMIN = 1,
  USER = 2,
}

export enum Sex {
  MAN = 1,
  WOMAN = 2,
  ALL = 3,
}

export enum ConfirmType {
  CONFIRM_AGE = 1,
}

export enum StatusAgeUser {
  CONFIRMED = 1,
  ALL = 3,
}

export enum MessageType {
  TEXT = 1,
  IMAGE = 2,
  VIDEO = 3,
}

export enum SexCampaign {
  ALL = 0,
  MAN = 1,
  WOMAN = 2,
}

export enum ConfirmAgeCampaign {
  ALL = 0,
  PENDDING = 1,
  CONFIRMED = 2,
}

export enum TypeTask {
  BUY_POINT = 1,
  BUY_CLASS = 2,
}

export enum LoginControl {
  ALL = 2,
}

export enum MemberState {
  ALL = 2,
}

export enum PaymentDelay {
  ALL = 2,
}

export enum OtpType {
  LOGIN = 1,
  REGISTER = 2,
  CHANGE_PHONE = 3,
}

export enum NotificationType {
  LIKE = 1,
  MESSAGE = 2,
}

export enum InspectionStatus {
  NOT_INSPECTED = 1,
  INSPECTED = 2,
}

export enum CharaStatus {
  USER = 0,
  CHARA = 1,
}

export enum PaymentType {
  BANK_TRANSFER = 1,
  CREDIT_PAYMENT = 11,
  GOOGLE_PAY = 21,
  ITUNE_STORE = 31,
  CONVENIENCE_STORE = 41,
  BONUS = 91,
}

export enum PointUsageLogType {
  VIEW_PROFILE = 1,
  SEND_CHAT = 2,
  VIEW_CHAT = 3,
  SEND_CHAT_IMAGE = 4,
  VIEW_CHAT_IMAGE = 5,
  UPLOAD_PROFILE_IMAGE = 6,
}
