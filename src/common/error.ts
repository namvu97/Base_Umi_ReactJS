export enum UserError {
  USER_EXISTING = 'すでに使用されている電話番号',
  USER_NOT_FOUND = 'アカウントが存在しません',
  PERMISSION_DENIED = 'Permission Denied',
  CONFIRM_AGE_FORM_ME = '年齢認証が終わっていないのでトーク出来ません',
  CONFIRM_AGE_FORM_TARGET = '相手の年齢のせいで話せない検証されていません',
  AVATAR_EXISTING = 'メイン写真は１枚までしかアップできません。',
  SUBIMAGE_MAX = 'サブ写真は5枚まで追加できます。',
  LEVEL_LOWER = 'プレミアム会員に入会すると、２通目以降もトークを送れます。',
}

