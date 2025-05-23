
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.7.0
 * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
 */
Prisma.prismaVersion = {
  client: "6.7.0",
  engine: "3cff47a7f5d65c3ea74883f1d736e41d68ce91ed"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AchievementsScalarFieldEnum = {
  achievement_id: 'achievement_id',
  user_id: 'user_id',
  event_id: 'event_id',
  achievement_type: 'achievement_type',
  points_awarded: 'points_awarded',
  earned_date: 'earned_date'
};

exports.Prisma.Auction_bidsScalarFieldEnum = {
  bid_id: 'bid_id',
  listing_id: 'listing_id',
  user_id: 'user_id',
  bid_amount: 'bid_amount',
  currency: 'currency',
  bid_date: 'bid_date',
  status: 'status',
  is_accepted: 'is_accepted',
  accepted_date: 'accepted_date'
};

exports.Prisma.Avatar_animationsScalarFieldEnum = {
  animation_id: 'animation_id',
  animation_name: 'animation_name',
  animation_file: 'animation_file',
  cost: 'cost',
  is_premium: 'is_premium',
  date_created: 'date_created',
  is_active: 'is_active'
};

exports.Prisma.Avatar_assetsScalarFieldEnum = {
  asset_id: 'asset_id',
  asset_type: 'asset_type',
  asset_name: 'asset_name',
  color_options: 'color_options',
  cost: 'cost',
  is_premium: 'is_premium',
  date_created: 'date_created',
  is_active: 'is_active'
};

exports.Prisma.Avatar_custScalarFieldEnum = {
  cust_id: 'cust_id',
  user_id: 'user_id',
  skin_tone: 'skin_tone',
  hair_color: 'hair_color',
  hair_type: 'hair_type',
  glasses_id: 'glasses_id',
  hat_id: 'hat_id',
  eye_color: 'eye_color',
  eye_shape_id: 'eye_shape_id',
  shirt_id: 'shirt_id',
  jacket_id: 'jacket_id',
  pants_id: 'pants_id',
  shoes_id: 'shoes_id',
  animation_id: 'animation_id',
  emote_id: 'emote_id',
  spcfx_id: 'spcfx_id',
  last_modified_date: 'last_modified_date'
};

exports.Prisma.Avatar_emotesScalarFieldEnum = {
  emote_id: 'emote_id',
  emote_name: 'emote_name',
  emote_file: 'emote_file',
  cost: 'cost',
  is_premium: 'is_premium',
  date_created: 'date_created',
  is_active: 'is_active'
};

exports.Prisma.Avatar_spcfxScalarFieldEnum = {
  spcfx_id: 'spcfx_id',
  spcfx_name: 'spcfx_name',
  spcfx_type: 'spcfx_type',
  spcfx_file: 'spcfx_file',
  cost: 'cost',
  is_premium: 'is_premium',
  date_created: 'date_created',
  is_active: 'is_active'
};

exports.Prisma.CompetitionsScalarFieldEnum = {
  competition_id: 'competition_id',
  name: 'name',
  description: 'description',
  start_date: 'start_date',
  end_date: 'end_date',
  event_type: 'event_type',
  status: 'status',
  created_by: 'created_by'
};

exports.Prisma.Custom_widgetsScalarFieldEnum = {
  widget_id: 'widget_id',
  widget_name: 'widget_name',
  description: 'description',
  widget_type: 'widget_type',
  widget_file: 'widget_file',
  is_limited_edition: 'is_limited_edition',
  available_from: 'available_from',
  available_to: 'available_to',
  win_conditions: 'win_conditions',
  fiat_price: 'fiat_price',
  site_coin_price: 'site_coin_price',
  points_price: 'points_price',
  is_purchasable: 'is_purchasable',
  date_created: 'date_created'
};

exports.Prisma.LeaderboardsScalarFieldEnum = {
  leaderboard_id: 'leaderboard_id',
  user_id: 'user_id',
  competition_id: 'competition_id',
  score: 'score',
  rank: 'rank',
  overall_score: 'overall_score',
  overall_rank: 'overall_rank'
};

exports.Prisma.Lookup_typeScalarFieldEnum = {
  lookup_type_id: 'lookup_type_id',
  type_name: 'type_name',
  type_code: 'type_code',
  type_description: 'type_description',
  fee_percentage: 'fee_percentage',
  is_visible: 'is_visible',
  created_date: 'created_date',
  modified_date: 'modified_date',
  modified_by: 'modified_by'
};

exports.Prisma.Lookup_valuesScalarFieldEnum = {
  lookup_id: 'lookup_id',
  lookup_type_id: 'lookup_type_id',
  value_code: 'value_code',
  value: 'value',
  sort_order: 'sort_order',
  is_visible: 'is_visible',
  is_editable: 'is_editable',
  is_active: 'is_active',
  created_date: 'created_date',
  modified_date: 'modified_date',
  modified_by: 'modified_by'
};

exports.Prisma.Market_itemsScalarFieldEnum = {
  item_id: 'item_id',
  item_type: 'item_type',
  item_reference_id: 'item_reference_id',
  owner_id: 'owner_id',
  is_listed: 'is_listed',
  is_locked: 'is_locked',
  created_date: 'created_date'
};

exports.Prisma.MarketplaceScalarFieldEnum = {
  listing_id: 'listing_id',
  seller_user_id: 'seller_user_id',
  item_type: 'item_type',
  item_id: 'item_id',
  sale_type: 'sale_type',
  is_trade: 'is_trade',
  trade_preferences: 'trade_preferences',
  start_price: 'start_price',
  reserve_price: 'reserve_price',
  buy_now_price: 'buy_now_price',
  points: 'points',
  start_time: 'start_time',
  end_time: 'end_time',
  final_price: 'final_price',
  buyer_user_id: 'buyer_user_id',
  nft_trade: 'nft_trade',
  nft_token_id: 'nft_token_id',
  listing_status: 'listing_status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Marketplace_transScalarFieldEnum = {
  transaction_id: 'transaction_id',
  listing_id: 'listing_id',
  seller_id: 'seller_id',
  buyer_id: 'buyer_id',
  payment_type: 'payment_type',
  payment_amount: 'payment_amount',
  trade_item_id: 'trade_item_id',
  transaction_status: 'transaction_status',
  created_at: 'created_at'
};

exports.Prisma.Nft_metaScalarFieldEnum = {
  nft_id: 'nft_id',
  user_id: 'user_id',
  token_id: 'token_id',
  metadata_url: 'metadata_url',
  is_tradeable: 'is_tradeable',
  created_date: 'created_date'
};

exports.Prisma.NotificationsScalarFieldEnum = {
  notification_id: 'notification_id',
  user_id: 'user_id',
  message: 'message',
  is_read: 'is_read',
  trans_type: 'trans_type',
  date_created: 'date_created'
};

exports.Prisma.Social_commentsScalarFieldEnum = {
  comment_id: 'comment_id',
  post_id: 'post_id',
  user_id: 'user_id',
  comment_text: 'comment_text',
  image_url: 'image_url',
  created_date: 'created_date'
};

exports.Prisma.Social_likesScalarFieldEnum = {
  post_id: 'post_id',
  user_id: 'user_id',
  liked_at: 'liked_at'
};

exports.Prisma.Social_postsScalarFieldEnum = {
  post_id: 'post_id',
  user_id: 'user_id',
  content: 'content',
  image_url: 'image_url',
  created_date: 'created_date'
};

exports.Prisma.SupportScalarFieldEnum = {
  ticket_id: 'ticket_id',
  user_id: 'user_id',
  category: 'category',
  description: 'description',
  status: 'status',
  status_update: 'status_update',
  created_date: 'created_date',
  closed_date: 'closed_date'
};

exports.Prisma.System_settingsScalarFieldEnum = {
  setting_id: 'setting_id',
  setting_name: 'setting_name',
  setting_code: 'setting_code',
  description: 'description',
  value: 'value',
  data_type: 'data_type',
  is_editable: 'is_editable',
  created_date: 'created_date',
  created_by: 'created_by',
  modified_date: 'modified_date',
  modified_by: 'modified_by'
};

exports.Prisma.Team_membersScalarFieldEnum = {
  team_id: 'team_id',
  user_id: 'user_id',
  team_role_type: 'team_role_type',
  status: 'status',
  last_update: 'last_update'
};

exports.Prisma.TeamsScalarFieldEnum = {
  teams_id: 'teams_id',
  team_name: 'team_name',
  created_by: 'created_by',
  created_date: 'created_date',
  updated_by: 'updated_by',
  is_active: 'is_active',
  team_colors: 'team_colors',
  team_mascot: 'team_mascot'
};

exports.Prisma.TransactionsScalarFieldEnum = {
  transactions_id: 'transactions_id',
  user_id: 'user_id',
  asset_id: 'asset_id',
  competition_id: 'competition_id',
  animation_id: 'animation_id',
  emote_id: 'emote_id',
  spcfx_id: 'spcfx_id',
  widget_id: 'widget_id',
  trans_amt: 'trans_amt',
  trans_type: 'trans_type',
  amt_fiat: 'amt_fiat',
  amt_crypto: 'amt_crypto',
  crypto_type: 'crypto_type',
  fee_applied: 'fee_applied',
  status: 'status',
  trans_date: 'trans_date'
};

exports.Prisma.User_avatar_invScalarFieldEnum = {
  inventory_id: 'inventory_id',
  user_id: 'user_id',
  asset_id: 'asset_id',
  animation_id: 'animation_id',
  emote_id: 'emote_id',
  spcfx_id: 'spcfx_id',
  purchased_date: 'purchased_date'
};

exports.Prisma.User_friendsScalarFieldEnum = {
  friendship_id: 'friendship_id',
  user_id: 'user_id',
  friend_id: 'friend_id',
  status: 'status',
  created_date: 'created_date'
};

exports.Prisma.User_messagesScalarFieldEnum = {
  message_id: 'message_id',
  sender_id: 'sender_id',
  receiver_id: 'receiver_id',
  msg_content: 'msg_content',
  created_date: 'created_date',
  is_read: 'is_read'
};

exports.Prisma.User_rolesScalarFieldEnum = {
  role_id: 'role_id',
  role_name: 'role_name',
  permissions: 'permissions',
  created_date: 'created_date',
  created_by: 'created_by',
  modified_date: 'modified_date',
  modified_by: 'modified_by'
};

exports.Prisma.User_scoresScalarFieldEnum = {
  score_id: 'score_id',
  user_id: 'user_id',
  competition_id: 'competition_id',
  score: 'score',
  created_at: 'created_at'
};

exports.Prisma.User_settingsScalarFieldEnum = {
  setting_id: 'setting_id',
  user_id: 'user_id',
  setting_key: 'setting_key',
  setting_value: 'setting_value',
  theme: 'theme',
  privacy_code: 'privacy_code',
  profile_picture: 'profile_picture'
};

exports.Prisma.User_widgetsScalarFieldEnum = {
  user_widgets_id: 'user_widgets_id',
  user_id: 'user_id',
  widget_id: 'widget_id',
  obtained_method: 'obtained_method',
  obtained_date: 'obtained_date',
  display_position: 'display_position',
  is_active: 'is_active'
};

exports.Prisma.UsersScalarFieldEnum = {
  user_id: 'user_id',
  username: 'username',
  email: 'email',
  password_hash: 'password_hash',
  created_at: 'created_at',
  profile_picture: 'profile_picture',
  bio: 'bio',
  role_id: 'role_id',
  updated_at: 'updated_at',
  is_active: 'is_active'
};

exports.Prisma.Video_commentsScalarFieldEnum = {
  comment_id: 'comment_id',
  video_id: 'video_id',
  user_id: 'user_id',
  comment: 'comment',
  created_date: 'created_date',
  modified_date: 'modified_date'
};

exports.Prisma.VideosScalarFieldEnum = {
  video_id: 'video_id',
  user_id: 'user_id',
  url: 'url'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  achievements: 'achievements',
  auction_bids: 'auction_bids',
  avatar_animations: 'avatar_animations',
  avatar_assets: 'avatar_assets',
  avatar_cust: 'avatar_cust',
  avatar_emotes: 'avatar_emotes',
  avatar_spcfx: 'avatar_spcfx',
  competitions: 'competitions',
  custom_widgets: 'custom_widgets',
  leaderboards: 'leaderboards',
  lookup_type: 'lookup_type',
  lookup_values: 'lookup_values',
  market_items: 'market_items',
  marketplace: 'marketplace',
  marketplace_trans: 'marketplace_trans',
  nft_meta: 'nft_meta',
  notifications: 'notifications',
  social_comments: 'social_comments',
  social_likes: 'social_likes',
  social_posts: 'social_posts',
  support: 'support',
  system_settings: 'system_settings',
  team_members: 'team_members',
  teams: 'teams',
  transactions: 'transactions',
  user_avatar_inv: 'user_avatar_inv',
  user_friends: 'user_friends',
  user_messages: 'user_messages',
  user_roles: 'user_roles',
  user_scores: 'user_scores',
  user_settings: 'user_settings',
  user_widgets: 'user_widgets',
  users: 'users',
  video_comments: 'video_comments',
  videos: 'videos'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
