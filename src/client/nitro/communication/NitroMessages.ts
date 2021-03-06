import { IMessageConfiguration } from '../../core/communication/messages/IMessageConfiguration';
import { RoomSessionDimmerPresetsEvent } from '../session/events/RoomSessionDimmerPresetsEvent';
import { AvailabilityStatusMessageEvent } from './messages/incoming/availability/AvailabilityStatusMessageEvent';
import { ChangeNameUpdateEvent } from './messages/incoming/avatar/ChangeNameUpdateEvent';
import { CatalogClubEvent } from './messages/incoming/catalog/CatalogClubEvent';
import { CatalogModeEvent } from './messages/incoming/catalog/CatalogModeEvent';
import { CatalogPageEvent } from './messages/incoming/catalog/CatalogPageEvent';
import { CatalogPagesEvent } from './messages/incoming/catalog/CatalogPagesEvent';
import { CatalogPurchaseEvent } from './messages/incoming/catalog/CatalogPurchaseEvent';
import { CatalogPurchaseFailedEvent } from './messages/incoming/catalog/CatalogPurchaseFailedEvent';
import { CatalogPurchaseUnavailableEvent } from './messages/incoming/catalog/CatalogPurchaseUnavailableEvent';
import { CatalogSearchEvent } from './messages/incoming/catalog/CatalogSearchEvent';
import { CatalogSoldOutEvent } from './messages/incoming/catalog/CatalogSoldOutEvent';
import { CatalogUpdatedEvent } from './messages/incoming/catalog/CatalogUpdatedEvent';
import { ClientPingEvent } from './messages/incoming/client/ClientPingEvent';
import { DesktopViewEvent } from './messages/incoming/desktop/DesktopViewEvent';
import { AcceptFriendResultEvent } from './messages/incoming/friendlist/AcceptFriendResultEvent';
import { FindFriendsProcessResultEvent } from './messages/incoming/friendlist/FindFriendsProcessResultEvent';
import { FollowFriendFailedEvent } from './messages/incoming/friendlist/FollowFriendFailedEvent';
import { FriendListFragmentEvent } from './messages/incoming/friendlist/FriendListFragmentEvent';
import { FriendListUpdateEvent } from './messages/incoming/friendlist/FriendListUpdateEvent';
import { FriendNotificationEvent } from './messages/incoming/friendlist/FriendNotificationEvent';
import { FriendRequestsEvent } from './messages/incoming/friendlist/FriendRequestsEvent';
import { HabboSearchResultEvent } from './messages/incoming/friendlist/HabboSearchResultEvent';
import { InstantMessageErrorEvent } from './messages/incoming/friendlist/InstantMessageErrorEvent';
import { MessageErrorEvent } from './messages/incoming/friendlist/MessageErrorEvent';
import { MessengerInitEvent } from './messages/incoming/friendlist/MessengerInitEvent';
import { MiniMailNewMessageEvent } from './messages/incoming/friendlist/MiniMailNewMessageEvent';
import { NewConsoleMessageEvent } from './messages/incoming/friendlist/NewConsoleMessageEvent';
import { NewFriendRequestEvent } from './messages/incoming/friendlist/NewFriendRequestEvent';
import { RoomInviteErrorEvent } from './messages/incoming/friendlist/RoomInviteErrorEvent';
import { RoomInviteEvent } from './messages/incoming/friendlist/RoomInviteEvent';
import { LoadGameUrlEvent } from './messages/incoming/game/LoadGameUrlEvent';
import { CallForHelpResultMessageEvent } from './messages/incoming/help/CallForHelpResultMessageEvent';
import { IncomingHeader } from './messages/incoming/IncomingHeader';
import { BotAddedToInventoryEvent } from './messages/incoming/inventory/bots/BotAddedToInventoryEvent';
import { BotInventoryMessageEvent } from './messages/incoming/inventory/bots/BotInventoryMessageEvent';
import { BotRemovedFromInventoryEvent } from './messages/incoming/inventory/bots/BotRemovedFromInventoryEvent';
import { FigureSetIdsMessageEvent } from './messages/incoming/inventory/clothes/FigureSetIdsMessageEvent';
import { FurnitureListAddOrUpdateEvent } from './messages/incoming/inventory/furni/FurnitureListAddOrUpdateEvent';
import { FurnitureListEvent } from './messages/incoming/inventory/furni/FurnitureListEvent';
import { FurnitureListInvalidateEvent } from './messages/incoming/inventory/furni/FurnitureListInvalidateEvent';
import { FurnitureListRemovedEvent } from './messages/incoming/inventory/furni/FurnitureListRemovedEvent';
import { FurniturePostItPlacedEvent } from './messages/incoming/inventory/furni/FurniturePostItPlacedEvent';
import { TradingAcceptEvent } from './messages/incoming/inventory/trading/TradingAcceptEvent';
import { TradingCloseEvent } from './messages/incoming/inventory/trading/TradingCloseEvent';
import { TradingCompletedEvent } from './messages/incoming/inventory/trading/TradingCompletedEvent';
import { TradingConfirmationEvent } from './messages/incoming/inventory/trading/TradingConfirmationEvent';
import { TradingListItemEvent } from './messages/incoming/inventory/trading/TradingListItemEvent';
import { TradingNotOpenEvent } from './messages/incoming/inventory/trading/TradingNotOpenEvent';
import { TradingOpenEvent } from './messages/incoming/inventory/trading/TradingOpenEvent';
import { TradingOpenFailedEvent } from './messages/incoming/inventory/trading/TradingOpenFailedEvent';
import { TradingOtherNotAllowedEvent } from './messages/incoming/inventory/trading/TradingOtherNotAllowedEvent';
import { TradingYouAreNotAllowedEvent } from './messages/incoming/inventory/trading/TradingYouAreNotAllowedEvent';
import { ModeratorMessageEvent } from './messages/incoming/moderation/ModeratorMessageEvent';
import { NavigatorCategoriesEvent } from './messages/incoming/navigator/NavigatorCategoriesEvent';
import { NavigatorCollapsedEvent } from './messages/incoming/navigator/NavigatorCollapsedEvent';
import { NavigatorEventCategoriesEvent } from './messages/incoming/navigator/NavigatorEventCategoriesEvent';
import { NavigatorHomeRoomEvent } from './messages/incoming/navigator/NavigatorHomeRoomEvent';
import { NavigatorLiftedEvent } from './messages/incoming/navigator/NavigatorLiftedEvent';
import { NavigatorMetadataEvent } from './messages/incoming/navigator/NavigatorMetadataEvent';
import { NavigatorOpenRoomCreatorEvent } from './messages/incoming/navigator/NavigatorOpenRoomCreatorEvent';
import { NavigatorSearchesEvent } from './messages/incoming/navigator/NavigatorSearchesEvent';
import { NavigatorSearchEvent } from './messages/incoming/navigator/NavigatorSearchEvent';
import { NavigatorSettingsEvent } from './messages/incoming/navigator/NavigatorSettingsEvent';
import { HabboBroadcastMessageEvent } from './messages/incoming/notifications/HabboBroadcastMessageEvent';
import { MOTDNotificationEvent } from './messages/incoming/notifications/MOTDNotificationEvent';
import { NotificationDialogMessageEvent } from './messages/incoming/notifications/NotificationDialogMessageEvent';
import { RespectReceivedEvent } from './messages/incoming/notifications/RespectReceivedEvent';
import { UnseenItemsEvent } from './messages/incoming/notifications/UnseenItemsEvent';
import { RoomDoorbellAcceptedEvent } from './messages/incoming/room/access/doorbell/RoomDoorbellAcceptedEvent';
import { RoomDoorbellEvent } from './messages/incoming/room/access/doorbell/RoomDoorbellEvent';
import { RoomDoorbellRejectedEvent } from './messages/incoming/room/access/doorbell/RoomDoorbellRejectedEvent';
import { RoomRightsClearEvent } from './messages/incoming/room/access/rights/RoomRightsClearEvent';
import { RoomRightsEvent } from './messages/incoming/room/access/rights/RoomRightsEvent';
import { RoomRightsOwnerEvent } from './messages/incoming/room/access/rights/RoomRightsOwnerEvent';
import { RoomEnterErrorEvent } from './messages/incoming/room/access/RoomEnterErrorEvent';
import { RoomEnterEvent } from './messages/incoming/room/access/RoomEnterEvent';
import { RoomForwardEvent } from './messages/incoming/room/access/RoomForwardEvent';
import { RoomChatSettingsEvent } from './messages/incoming/room/data/RoomChatSettingsEvent';
import { RoomInfoEvent } from './messages/incoming/room/data/RoomInfoEvent';
import { RoomInfoOwnerEvent } from './messages/incoming/room/data/RoomInfoOwnerEvent';
import { RoomScoreEvent } from './messages/incoming/room/data/RoomScoreEvent';
import { RoomSettingsErrorEvent } from './messages/incoming/room/data/RoomSettingsErrorEvent';
import { RoomSettingsEvent } from './messages/incoming/room/data/RoomSettingsEvent';
import { RoomSettingsSavedEvent } from './messages/incoming/room/data/RoomSettingsSavedEvent';
import { RoomSettingsUpdatedEvent } from './messages/incoming/room/data/RoomSettingsUpdatedEvent';
import { ObjectsRollingEvent } from './messages/incoming/room/engine/ObjectsRollingEvent';
import { RoomCreatedEvent } from './messages/incoming/room/engine/RoomCreatedEvent';
import { FurnitureFloorAddEvent } from './messages/incoming/room/furniture/floor/FurnitureFloorAddEvent';
import { FurnitureFloorEvent } from './messages/incoming/room/furniture/floor/FurnitureFloorEvent';
import { FurnitureFloorRemoveEvent } from './messages/incoming/room/furniture/floor/FurnitureFloorRemoveEvent';
import { FurnitureFloorUpdateEvent } from './messages/incoming/room/furniture/floor/FurnitureFloorUpdateEvent';
import { FurnitureAliasesEvent } from './messages/incoming/room/furniture/FurnitureAliasesEvent';
import { FurnitureDataEvent } from './messages/incoming/room/furniture/FurnitureDataEvent';
import { FurnitureItemDataEvent } from './messages/incoming/room/furniture/FurnitureItemDataEvent';
import { FurnitureStackHeightEvent } from './messages/incoming/room/furniture/FurnitureStackHeightEvent';
import { FurnitureState2Event } from './messages/incoming/room/furniture/FurnitureState2Event';
import { FurnitureStateEvent } from './messages/incoming/room/furniture/FurnitureStateEvent';
import { FurnitureWallAddEvent } from './messages/incoming/room/furniture/wall/FurnitureWallAddEvent';
import { FurnitureWallEvent } from './messages/incoming/room/furniture/wall/FurnitureWallEvent';
import { FurnitureWallRemoveEvent } from './messages/incoming/room/furniture/wall/FurnitureWallRemoveEvent';
import { FurnitureWallUpdateEvent } from './messages/incoming/room/furniture/wall/FurnitureWallUpdateEvent';
import { RoomDoorEvent } from './messages/incoming/room/mapping/RoomDoorEvent';
import { RoomHeightMapEvent } from './messages/incoming/room/mapping/RoomHeightMapEvent';
import { RoomHeightMapUpdateEvent } from './messages/incoming/room/mapping/RoomHeightMapUpdateEvent';
import { RoomModelEvent } from './messages/incoming/room/mapping/RoomModelEvent';
import { RoomModelNameEvent } from './messages/incoming/room/mapping/RoomModelNameEvent';
import { RoomPaintEvent } from './messages/incoming/room/mapping/RoomPaintEvent';
import { RoomThicknessEvent } from './messages/incoming/room/mapping/RoomThicknessEvent';
import { PetFigureUpdateEvent } from './messages/incoming/room/pet/PetFigureUpdateEvent';
import { YouArePlayingGameEvent } from './messages/incoming/room/session/YouArePlayingGameEvent';
import { RoomUnitChatEvent } from './messages/incoming/room/unit/chat/RoomUnitChatEvent';
import { RoomUnitChatShoutEvent } from './messages/incoming/room/unit/chat/RoomUnitChatShoutEvent';
import { RoomUnitChatWhisperEvent } from './messages/incoming/room/unit/chat/RoomUnitChatWhisperEvent';
import { RoomUnitTypingEvent } from './messages/incoming/room/unit/chat/RoomUnitTypingEvent';
import { RoomUnitDanceEvent } from './messages/incoming/room/unit/RoomUnitDanceEvent';
import { RoomUnitEffectEvent } from './messages/incoming/room/unit/RoomUnitEffectEvent';
import { RoomUnitEvent } from './messages/incoming/room/unit/RoomUnitEvent';
import { RoomUnitExpressionEvent } from './messages/incoming/room/unit/RoomUnitExpressionEvent';
import { RoomUnitHandItemEvent } from './messages/incoming/room/unit/RoomUnitHandItemEvent';
import { RoomUnitIdleEvent } from './messages/incoming/room/unit/RoomUnitIdleEvent';
import { RoomUnitInfoEvent } from './messages/incoming/room/unit/RoomUnitInfoEvent';
import { RoomUnitNumberEvent } from './messages/incoming/room/unit/RoomUnitNumberEvent';
import { RoomUnitRemoveEvent } from './messages/incoming/room/unit/RoomUnitRemoveEvent';
import { RoomUnitStatusEvent } from './messages/incoming/room/unit/RoomUnitStatusEvent';
import { WiredFurniActionEvent } from './messages/incoming/roomevents/WiredFurniActionEvent';
import { WiredFurniConditionEvent } from './messages/incoming/roomevents/WiredFurniConditionEvent';
import { WiredFurniTriggerEvent } from './messages/incoming/roomevents/WiredFurniTriggerEvent';
import { WiredOpenEvent } from './messages/incoming/roomevents/WiredOpenEvent';
import { WiredRewardResultMessageEvent } from './messages/incoming/roomevents/WiredRewardResultMessageEvent';
import { WiredSaveSuccessEvent } from './messages/incoming/roomevents/WiredSaveSuccessEvent';
import { WiredValidationErrorEvent } from './messages/incoming/roomevents/WiredValidationErrorEvent';
import { AuthenticatedEvent } from './messages/incoming/security/AuthenticatedEvent';
import { UserPerksEvent } from './messages/incoming/user/access/UserPerksEvent';
import { UserPermissionsEvent } from './messages/incoming/user/access/UserPermissionsEvent';
import { UserCurrentBadgesEvent } from './messages/incoming/user/data/UserCurrentBadgesEvent';
import { UserFigureEvent } from './messages/incoming/user/data/UserFigureEvent';
import { UserInfoEvent } from './messages/incoming/user/data/UserInfoEvent';
import { UserNameChangeMessageEvent } from './messages/incoming/user/data/UserNameChangeMessageEvent';
import { UserSettingsEvent } from './messages/incoming/user/data/UserSettingsEvent';
import { UserCreditsEvent } from './messages/incoming/user/inventory/currency/UserCreditsEvent';
import { UserCurrencyEvent } from './messages/incoming/user/inventory/currency/UserCurrencyEvent';
import { UserCurrencyUpdateEvent } from './messages/incoming/user/inventory/currency/UserCurrencyUpdateEvent';
import { UserSubscriptionEvent } from './messages/incoming/user/inventory/subscription/UserSubscriptionEvent';
import { CatalogModeComposer } from './messages/outgoing/catalog/CatalogModeComposer';
import { CatalogPageComposer } from './messages/outgoing/catalog/CatalogPageComposer';
import { CatalogPurchaseComposer } from './messages/outgoing/catalog/CatalogPurchaseComposer';
import { CatalogSearchComposer } from './messages/outgoing/catalog/CatalogSearchComposer';
import { ClientPongComposer } from './messages/outgoing/client/ClientPongComposer';
import { ClientReleaseVersionComposer } from './messages/outgoing/client/ClientReleaseVersionComposer';
import { DesktopViewComposer } from './messages/outgoing/desktop/DesktopViewComposer';
import { AcceptFriendComposer } from './messages/outgoing/friendlist/AcceptFriendComposer';
import { DeclineFriendComposer } from './messages/outgoing/friendlist/DeclineFriendComposer';
import { FindNewFriendsComposer } from './messages/outgoing/friendlist/FindNewFriendsComposer';
import { FollowFriendComposer } from './messages/outgoing/friendlist/FollowFriendComposer';
import { FriendListUpdateComposer } from './messages/outgoing/friendlist/FriendListUpdateComposer';
import { GetFriendRequestsComposer } from './messages/outgoing/friendlist/GetFriendRequestsComposer';
import { HabboSearchComposer } from './messages/outgoing/friendlist/HabboSearchComposer';
import { MessengerInitComposer } from './messages/outgoing/friendlist/MessengerInitComposer';
import { RemoveFriendComposer } from './messages/outgoing/friendlist/RemoveFriendComposer';
import { RequestFriendComposer } from './messages/outgoing/friendlist/RequestFriendComposer';
import { SendMessageComposer } from './messages/outgoing/friendlist/SendMessageComposer';
import { SendRoomInviteComposer } from './messages/outgoing/friendlist/SendRoomInviteComposer';
import { SetRelationshipStatusComposer } from './messages/outgoing/friendlist/SetRelationshipStatusComposer';
import { VisitUserComposer } from './messages/outgoing/friendlist/VisitUserComposer';
import { GetBotInventoryComposer } from './messages/outgoing/inventory/bots/GetBotInventoryComposer';
import { FurnitureList2Composer } from './messages/outgoing/inventory/furni/FurnitureList2Composer';
import { FurnitureListComposer } from './messages/outgoing/inventory/furni/FurnitureListComposer';
import { TradingAcceptComposer } from './messages/outgoing/inventory/trading/TradingAcceptComposer';
import { TradingCancelComposer } from './messages/outgoing/inventory/trading/TradingCancelComposer';
import { TradingCloseComposer } from './messages/outgoing/inventory/trading/TradingCloseComposer';
import { TradingConfirmationComposer } from './messages/outgoing/inventory/trading/TradingConfirmationComposer';
import { TradingListAddItemComposer } from './messages/outgoing/inventory/trading/TradingListAddItemComposer';
import { TradingListAddItemsComposer } from './messages/outgoing/inventory/trading/TradingListAddItemsComposer';
import { TradingListItemRemoveComposer } from './messages/outgoing/inventory/trading/TradingListRemoveItemComposer';
import { TradingOpenComposer } from './messages/outgoing/inventory/trading/TradingOpenComposer';
import { TradingUnacceptComposer } from './messages/outgoing/inventory/trading/TradingUnacceptComposer';
import { NavigatorCategoriesComposer } from './messages/outgoing/navigator/NavigatorCategoriesComposer';
import { NavigatorCategoryListModeComposer } from './messages/outgoing/navigator/NavigatorCategoryListModeComposer';
import { NavigatorInitComposer } from './messages/outgoing/navigator/NavigatorInitComposer';
import { NavigatorSearchCloseComposer } from './messages/outgoing/navigator/NavigatorSearchCloseComposer';
import { NavigatorSearchComposer } from './messages/outgoing/navigator/NavigatorSearchComposer';
import { NavigatorSearchOpenComposer } from './messages/outgoing/navigator/NavigatorSearchOpenComposer';
import { NavigatorSearchSaveComposer } from './messages/outgoing/navigator/NavigatorSearchSaveComposer';
import { NavigatorSettingsComposer } from './messages/outgoing/navigator/NavigatorSettingsComposer';
import { NavigatorSettingsSaveComposer } from './messages/outgoing/navigator/NavigatorSettingsSaveComposer';
import { OutgoingHeader } from './messages/outgoing/OutgoingHeader';
import { PetRespectComposer } from './messages/outgoing/pet/PetRespectComposer';
import { RoomEnterComposer } from './messages/outgoing/room/access/RoomEnterComposer';
import { RoomAmbassadorAlertComposer } from './messages/outgoing/room/action/RoomAmbassadorAlertComposer';
import { RoomBanUserComposer } from './messages/outgoing/room/action/RoomBanUserComposer';
import { RoomGiveRightsComposer } from './messages/outgoing/room/action/RoomGiveRightsComposer';
import { RoomKickUserComposer } from './messages/outgoing/room/action/RoomKickUserComposer';
import { RoomMuteUserComposer } from './messages/outgoing/room/action/RoomMuteUserComposer';
import { RoomTakeRightsComposer } from './messages/outgoing/room/action/RoomTakeRightsComposer';
import { RoomInfoComposer } from './messages/outgoing/room/data/RoomInfoComposer';
import { GetItemDataComposer } from './messages/outgoing/room/engine/GetItemDataComposer';
import { ModifyWallItemDataComposer } from './messages/outgoing/room/engine/ModifyWallItemDataComposer';
import { RemoveWallItemComposer } from './messages/outgoing/room/engine/RemoveWallItemComposer';
import { PlaceBotComposer } from './messages/outgoing/room/engine/PlaceBotComposer';
import { RemoveBotFromFlatComposer } from './messages/outgoing/room/engine/RemoveBotFromFlatComposer';
import { FurnitureFloorUpdateComposer } from './messages/outgoing/room/furniture/floor/FurnitureFloorUpdateComposer';
import { FurnitureAliasesComposer } from './messages/outgoing/room/furniture/FurnitureAliasesComposer';
import { FurniturePickupComposer } from './messages/outgoing/room/furniture/FurniturePickupComposer';
import { FurniturePlaceComposer } from './messages/outgoing/room/furniture/FurniturePlaceComposer';
import { FurniturePlacePaintComposer } from './messages/outgoing/room/furniture/FurniturePlacePaintComposer';
import { FurniturePostItPlaceComposer } from './messages/outgoing/room/furniture/FurniturePostItPlaceComposer';
import { FurnitureColorWheelComposer } from './messages/outgoing/room/furniture/logic/FurnitureColorWheelComposer';
import { FurnitureDiceActivateComposer } from './messages/outgoing/room/furniture/logic/FurnitureDiceActivateComposer';
import { FurnitureDiceDeactivateComposer } from './messages/outgoing/room/furniture/logic/FurnitureDiceDeactivateComposer';
import { FurnitureMultiStateComposer } from './messages/outgoing/room/furniture/logic/FurnitureMultiStateComposer';
import { FurnitureOneWayDoorComposer } from './messages/outgoing/room/furniture/logic/FurnitureOneWayDoorComposer';
import { FurnitureRandomStateComposer } from './messages/outgoing/room/furniture/logic/FurnitureRandomStateComposer';
import { FurnitureStackHeightComposer } from './messages/outgoing/room/furniture/logic/FurnitureStackHeightComposer';
import { FurnitureWallMultiStateComposer } from './messages/outgoing/room/furniture/logic/FurnitureWallMultiStateComposer';
import { FurnitureWallUpdateComposer } from './messages/outgoing/room/furniture/wall/FurnitureWallUpdateComposer';
import { RoomModelComposer } from './messages/outgoing/room/mapping/RoomModelComposer';
import { RoomCreateComposer } from './messages/outgoing/room/RoomCreateComposer';
import { RoomUnitChatComposer } from './messages/outgoing/room/unit/chat/RoomUnitChatComposer';
import { RoomUnitChatShoutComposer } from './messages/outgoing/room/unit/chat/RoomUnitChatShoutComposer';
import { RoomUnitChatWhisperComposer } from './messages/outgoing/room/unit/chat/RoomUnitChatWhisperComposer';
import { RoomUnitTypingStartComposer } from './messages/outgoing/room/unit/chat/RoomUnitTypingStartComposer';
import { RoomUnitTypingStopComposer } from './messages/outgoing/room/unit/chat/RoomUnitTypingStopComposer';
import { RoomUnitActionComposer } from './messages/outgoing/room/unit/RoomUnitActionComposer';
import { RoomUnitDanceComposer } from './messages/outgoing/room/unit/RoomUnitDanceComposer';
import { RoomUnitDropHandItemComposer } from './messages/outgoing/room/unit/RoomUnitDropHandItemComposer';
import { RoomUnitGiveHandItemComposer } from './messages/outgoing/room/unit/RoomUnitGiveHandItemComposer';
import { RoomUnitLookComposer } from './messages/outgoing/room/unit/RoomUnitLookComposer';
import { RoomUnitPostureComposer } from './messages/outgoing/room/unit/RoomUnitPostureComposer';
import { RoomUnitSignComposer } from './messages/outgoing/room/unit/RoomUnitSignComposer';
import { RoomUnitWalkComposer } from './messages/outgoing/room/unit/RoomUnitWalkComposer';
import { ApplySnapshotMessageComposer } from './messages/outgoing/roomevents/ApplySnapshotMessageComposer';
import { OpenMessageComposer } from './messages/outgoing/roomevents/OpenMessageComposer';
import { UpdateActionMessageComposer } from './messages/outgoing/roomevents/UpdateActionMessageComposer';
import { UpdateConditionMessageComposer } from './messages/outgoing/roomevents/UpdateConditionMessageComposer';
import { UpdateTriggerMessageComposer } from './messages/outgoing/roomevents/UpdateTriggerMessageComposer';
import { SecurityTicketComposer } from './messages/outgoing/security/SecurityTicketComposer';
import { UserCurrentBadgesComposer } from './messages/outgoing/user/data/UserCurrentBadgesComposer';
import { UserFigureComposer } from './messages/outgoing/user/data/UserFigureComposer';
import { UserHomeRoomComposer } from './messages/outgoing/user/data/UserHomeRoomComposer';
import { UserInfoComposer } from './messages/outgoing/user/data/UserInfoComposer';
import { UserMottoComposer } from './messages/outgoing/user/data/UserMottoComposer';
import { UserCurrencyComposer } from './messages/outgoing/user/inventory/currency/UserCurrencyComposer';
import { UserSubscriptionComposer } from './messages/outgoing/user/inventory/subscription/UserSubscriptionComposer';
import { UserRespectComposer } from './messages/outgoing/user/UserRespectComposer';
import { MiniMailUnreadCountParser } from './messages/parser/friendlist/MiniMailUnreadCountParser';

export class NitroMessages implements IMessageConfiguration
{
    private _events: Map<number, Function>;
    private _composers: Map<number, Function>;

    constructor()
    {
        this._events    = new Map();
        this._composers = new Map();

        this.registerEvents();
        this.registerComposers();
    }
    
    private registerEvents(): void
    {
        // AVAILABILITY
        this._events.set(IncomingHeader.AVAILABILITY_STATUS, AvailabilityStatusMessageEvent);

        // AVATAR
        this._events.set(IncomingHeader.USER_CHANGE_NAME, ChangeNameUpdateEvent);

        // CATALOG
        this._events.set(IncomingHeader.CATALOG_CLUB, CatalogClubEvent);
        this._events.set(IncomingHeader.CATALOG_MODE, CatalogModeEvent);
        this._events.set(IncomingHeader.CATALOG_PAGE, CatalogPageEvent);
        this._events.set(IncomingHeader.CATALOG_PAGES, CatalogPagesEvent);
        this._events.set(IncomingHeader.CATALOG_PURCHASE, CatalogPurchaseEvent);
        this._events.set(IncomingHeader.CATALOG_PURCHASE_FAILED, CatalogPurchaseFailedEvent);
        this._events.set(IncomingHeader.CATALOG_PURCHASE_UNAVAILABLE, CatalogPurchaseUnavailableEvent);
        this._events.set(IncomingHeader.CATALOG_SEARCH, CatalogSearchEvent);
        this._events.set(IncomingHeader.CATALOG_SOLD_OUT, CatalogSoldOutEvent);
        this._events.set(IncomingHeader.CATALOG_UPDATED, CatalogUpdatedEvent);

        // CLIENT
        this._events.set(IncomingHeader.CLIENT_PING, ClientPingEvent);

        // DESKTOP
        this._events.set(IncomingHeader.DESKTOP_VIEW, DesktopViewEvent);

        // FRIENDLIST
        this._events.set(IncomingHeader.MESSENGER_ACCEPT_FRIENDS, AcceptFriendResultEvent);
        this._events.set(IncomingHeader.MESSENGER_FIND_FRIENDS, FindFriendsProcessResultEvent);
        this._events.set(IncomingHeader.MESSENGER_FOLLOW_FAILED, FollowFriendFailedEvent);
        this._events.set(IncomingHeader.MESSENGER_FRIENDS, FriendListFragmentEvent);
        this._events.set(IncomingHeader.MESSENGER_UPDATE, FriendListUpdateEvent);
        this._events.set(IncomingHeader.MESSENGER_FRIEND_NOTIFICATION, FriendNotificationEvent);
        this._events.set(IncomingHeader.MESSENGER_REQUESTS, FriendRequestsEvent);
        this._events.set(IncomingHeader.MESSENGER_SEARCH, HabboSearchResultEvent);
        this._events.set(IncomingHeader.MESSENGER_INSTANCE_MESSAGE_ERROR, InstantMessageErrorEvent);
        this._events.set(IncomingHeader.MESSENGER_MESSAGE_ERROR, MessageErrorEvent);
        this._events.set(IncomingHeader.MESSENGER_INIT, MessengerInitEvent);
        this._events.set(IncomingHeader.MESSENGER_MINIMAIL_NEW, MiniMailNewMessageEvent);
        this._events.set(IncomingHeader.MESSENGER_MINIMAIL_COUNT, MiniMailUnreadCountParser);
        this._events.set(IncomingHeader.MESSENGER_CHAT, NewConsoleMessageEvent);
        this._events.set(IncomingHeader.MESSENGER_REQUEST, NewFriendRequestEvent);
        this._events.set(IncomingHeader.MESSENGER_INVITE_ERROR, RoomInviteErrorEvent);
        this._events.set(IncomingHeader.MESSENGER_INVITE, RoomInviteEvent);


        // HELP
        this._events.set(IncomingHeader.CFH_RESULT_MESSAGE, CallForHelpResultMessageEvent);

        // INVENTORY

        // CLOTHES
        this._events.set(IncomingHeader.USER_CLOTHING, FigureSetIdsMessageEvent);

        // FURNITURE
        this._events.set(IncomingHeader.USER_FURNITURE_ADD, FurnitureListAddOrUpdateEvent);
        this._events.set(IncomingHeader.USER_FURNITURE, FurnitureListEvent);
        this._events.set(IncomingHeader.USER_FURNITURE_REFRESH, FurnitureListInvalidateEvent);
        this._events.set(IncomingHeader.USER_FURNITURE_REMOVE, FurnitureListRemovedEvent);
        this._events.set(IncomingHeader.USER_FURNITURE_POSTIT_PLACED, FurniturePostItPlacedEvent);

        // TRADING
        this._events.set(IncomingHeader.TRADE_ACCEPTED, TradingAcceptEvent);
        this._events.set(IncomingHeader.TRADE_CLOSED, TradingCloseEvent);
        this._events.set(IncomingHeader.TRADE_COMPLETED, TradingCompletedEvent);
        this._events.set(IncomingHeader.TRADE_CONFIRMATION, TradingConfirmationEvent);
        this._events.set(IncomingHeader.TRADE_LIST_ITEM, TradingListItemEvent);
        this._events.set(IncomingHeader.TRADE_NOT_OPEN, TradingNotOpenEvent);
        this._events.set(IncomingHeader.TRADE_OPEN_FAILED, TradingOpenFailedEvent);
        this._events.set(IncomingHeader.TRADE_OPEN, TradingOpenEvent);
        this._events.set(IncomingHeader.TRADE_OTHER_NOT_ALLOWED, TradingOtherNotAllowedEvent);
        this._events.set(IncomingHeader.TRADE_YOU_NOT_ALLOWED, TradingYouAreNotAllowedEvent);

        // MODERATION
        this._events.set(IncomingHeader.GENERIC_ALERT_LINK, ModeratorMessageEvent);

        // NAVIGATOR
        this._events.set(IncomingHeader.NAVIGATOR_CATEGORIES, NavigatorCategoriesEvent);
        this._events.set(IncomingHeader.NAVIGATOR_COLLAPSED, NavigatorCollapsedEvent);
        this._events.set(IncomingHeader.NAVIGATOR_EVENT_CATEGORIES, NavigatorEventCategoriesEvent);
        this._events.set(IncomingHeader.USER_HOME_ROOM, NavigatorHomeRoomEvent);
        this._events.set(IncomingHeader.NAVIGATOR_LIFTED, NavigatorLiftedEvent);
        this._events.set(IncomingHeader.NAVIGATOR_METADATA, NavigatorMetadataEvent);
        this._events.set(IncomingHeader.NAVIGATOR_OPEN_ROOM_CREATOR, NavigatorOpenRoomCreatorEvent);
        this._events.set(IncomingHeader.NAVIGATOR_SEARCHES, NavigatorSearchesEvent);
        this._events.set(IncomingHeader.NAVIGATOR_SEARCH, NavigatorSearchEvent);
        this._events.set(IncomingHeader.NAVIGATOR_SETTINGS, NavigatorSettingsEvent);

        // NOTIFICATIONS
        this._events.set(IncomingHeader.GENERIC_ALERT, HabboBroadcastMessageEvent);
        this._events.set(IncomingHeader.MOTD_MESSAGES, MOTDNotificationEvent);
        this._events.set(IncomingHeader.NOTIFICATION_LIST, NotificationDialogMessageEvent);
        this._events.set(IncomingHeader.USER_RESPECT, RespectReceivedEvent);
        this._events.set(IncomingHeader.UNSEEN_ITEMS, UnseenItemsEvent);

        // ROOM

        // ACCESS
        this._events.set(IncomingHeader.ROOM_ENTER_ERROR, RoomEnterErrorEvent);
        this._events.set(IncomingHeader.ROOM_ENTER, RoomEnterEvent);
        this._events.set(IncomingHeader.ROOM_FORWARD, RoomForwardEvent);

        // DOORBELL
        this._events.set(IncomingHeader.ROOM_DOORBELL, RoomDoorbellEvent);
        this._events.set(IncomingHeader.ROOM_DOORBELL_ACCEPTED, RoomDoorbellAcceptedEvent);
        this._events.set(IncomingHeader.ROOM_DOORBELL_REJECTED, RoomDoorbellRejectedEvent);

        // RIGHTS
        this._events.set(IncomingHeader.ROOM_RIGHTS_CLEAR, RoomRightsClearEvent);
        this._events.set(IncomingHeader.ROOM_RIGHTS_OWNER, RoomRightsOwnerEvent);
        this._events.set(IncomingHeader.ROOM_RIGHTS, RoomRightsEvent);

        // DATA
        this._events.set(IncomingHeader.ROOM_SETTINGS_CHAT, RoomChatSettingsEvent);
        this._events.set(IncomingHeader.ROOM_INFO, RoomInfoEvent);
        this._events.set(IncomingHeader.ROOM_INFO_OWNER, RoomInfoOwnerEvent);
        this._events.set(IncomingHeader.ROOM_SCORE, RoomScoreEvent);
        this._events.set(IncomingHeader.ROOM_SETTINGS_SAVE_ERROR, RoomSettingsErrorEvent);
        this._events.set(IncomingHeader.ROOM_SETTINGS, RoomSettingsEvent);
        this._events.set(IncomingHeader.ROOM_SETTINGS_SAVE, RoomSettingsSavedEvent);
        this._events.set(IncomingHeader.ROOM_SETTINGS_UPDATED, RoomSettingsUpdatedEvent);

        // ENGINE
        this._events.set(IncomingHeader.ROOM_ROLLING, ObjectsRollingEvent);
        this._events.set(IncomingHeader.ROOM_CREATED, RoomCreatedEvent);

        // FURNITURE
        this._events.set(IncomingHeader.FURNITURE_ALIASES, FurnitureAliasesEvent);
        this._events.set(IncomingHeader.FURNITURE_DATA, FurnitureDataEvent);
        this._events.set(IncomingHeader.FURNITURE_ITEMDATA, FurnitureItemDataEvent);
        this._events.set(IncomingHeader.ITEM_STACK_HELPER, FurnitureStackHeightEvent);
        this._events.set(IncomingHeader.FURNITURE_STATE, FurnitureStateEvent);
        this._events.set(IncomingHeader.ITEM_DIMMER_SETTINGS, RoomSessionDimmerPresetsEvent);
        this._events.set(IncomingHeader.FURNITURE_STATE_2, FurnitureState2Event);

        // FLOOR
        this._events.set(IncomingHeader.FURNITURE_FLOOR_ADD, FurnitureFloorAddEvent);
        this._events.set(IncomingHeader.FURNITURE_FLOOR, FurnitureFloorEvent);
        this._events.set(IncomingHeader.FURNITURE_FLOOR_REMOVE, FurnitureFloorRemoveEvent);
        this._events.set(IncomingHeader.FURNITURE_FLOOR_UPDATE, FurnitureFloorUpdateEvent);

        // WALL
        this._events.set(IncomingHeader.ITEM_WALL_ADD, FurnitureWallAddEvent);
        this._events.set(IncomingHeader.ITEM_WALL, FurnitureWallEvent);
        this._events.set(IncomingHeader.ITEM_WALL_REMOVE, FurnitureWallRemoveEvent);
        this._events.set(IncomingHeader.ITEM_WALL_UPDATE, FurnitureWallUpdateEvent);

        // MAPPING
        this._events.set(IncomingHeader.ROOM_MODEL_DOOR, RoomDoorEvent);
        this._events.set(IncomingHeader.ROOM_HEIGHT_MAP, RoomHeightMapEvent);
        this._events.set(IncomingHeader.ROOM_HEIGHT_MAP_UPDATE, RoomHeightMapUpdateEvent);
        this._events.set(IncomingHeader.ROOM_MODEL, RoomModelEvent);
        this._events.set(IncomingHeader.ROOM_MODEL_NAME, RoomModelNameEvent);
        this._events.set(IncomingHeader.ROOM_PAINT, RoomPaintEvent);
        this._events.set(IncomingHeader.ROOM_THICKNESS, RoomThicknessEvent);

        // PET
        this._events.set(IncomingHeader.PET_FIGURE_UPDATE, PetFigureUpdateEvent);

        // SESSION
        this._events.set(IncomingHeader.PLAYING_GAME, YouArePlayingGameEvent);

        // UNIT
        this._events.set(IncomingHeader.UNIT_DANCE, RoomUnitDanceEvent);
        this._events.set(IncomingHeader.UNIT_EFFECT, RoomUnitEffectEvent);
        this._events.set(IncomingHeader.UNIT, RoomUnitEvent);
        this._events.set(IncomingHeader.UNIT_EXPRESSION, RoomUnitExpressionEvent);
        this._events.set(IncomingHeader.UNIT_HAND_ITEM, RoomUnitHandItemEvent);
        this._events.set(IncomingHeader.UNIT_IDLE, RoomUnitIdleEvent);
        this._events.set(IncomingHeader.UNIT_INFO, RoomUnitInfoEvent);
        this._events.set(IncomingHeader.UNIT_NUMBER, RoomUnitNumberEvent);
        this._events.set(IncomingHeader.UNIT_REMOVE, RoomUnitRemoveEvent);
        this._events.set(IncomingHeader.UNIT_STATUS, RoomUnitStatusEvent);

        // CHAT
        this._events.set(IncomingHeader.UNIT_CHAT, RoomUnitChatEvent);
        this._events.set(IncomingHeader.UNIT_CHAT_SHOUT, RoomUnitChatShoutEvent);
        this._events.set(IncomingHeader.UNIT_CHAT_WHISPER, RoomUnitChatWhisperEvent);
        this._events.set(IncomingHeader.UNIT_TYPING, RoomUnitTypingEvent);

        // ROOM EVENTS
        this._events.set(IncomingHeader.WIRED_ACTION, WiredFurniActionEvent);
        this._events.set(IncomingHeader.WIRED_CONDITION, WiredFurniConditionEvent);
        this._events.set(IncomingHeader.WIRED_TRIGGER, WiredFurniTriggerEvent);
        this._events.set(IncomingHeader.WIRED_OPEN, WiredOpenEvent);
        this._events.set(IncomingHeader.WIRED_REWARD, WiredRewardResultMessageEvent);
        this._events.set(IncomingHeader.WIRED_SAVE, WiredSaveSuccessEvent);
        this._events.set(IncomingHeader.WIRED_ERROR, WiredValidationErrorEvent);

        // SECURITY
        this._events.set(IncomingHeader.AUTHENTICATED, AuthenticatedEvent);

        // USER

        // ACCESS
        this._events.set(IncomingHeader.USER_PERKS, UserPerksEvent);
        this._events.set(IncomingHeader.USER_PERMISSIONS, UserPermissionsEvent);

        // DATA
        this._events.set(IncomingHeader.USER_BADGES_CURRENT, UserCurrentBadgesEvent);
        this._events.set(IncomingHeader.USER_FIGURE, UserFigureEvent);
        this._events.set(IncomingHeader.USER_INFO, UserInfoEvent);
        this._events.set(IncomingHeader.UNIT_CHANGE_NAME, UserNameChangeMessageEvent);
        this._events.set(IncomingHeader.USER_SETTINGS, UserSettingsEvent);

        // INVENTORY

        // BOTS
        this._events.set(IncomingHeader.USER_BOTS, BotInventoryMessageEvent);
        this._events.set(IncomingHeader.REMOVE_BOT_FROM_INVENTORY, BotRemovedFromInventoryEvent);
        this._events.set(IncomingHeader.ADD_BOT_TO_INVENTORY, BotAddedToInventoryEvent);

        // CURRENCY
        this._events.set(IncomingHeader.USER_CREDITS, UserCreditsEvent);
        this._events.set(IncomingHeader.USER_CURRENCY, UserCurrencyEvent);
        this._events.set(IncomingHeader.USER_CURRENCY_UPDATE, UserCurrencyUpdateEvent);

        // SUBSCRIPTION
        this._events.set(IncomingHeader.USER_SUBSCRIPTION, UserSubscriptionEvent);

        // GAMES
        this._events.set(IncomingHeader.LOAD_GAME_URL, LoadGameUrlEvent);
    }

    private registerComposers(): void
    {
        // CATALOG
        this._composers.set(OutgoingHeader.CATALOG_MODE, CatalogModeComposer);
        this._composers.set(OutgoingHeader.CATALOG_PAGE, CatalogPageComposer);
        this._composers.set(OutgoingHeader.CATALOG_PURCHASE, CatalogPurchaseComposer);
        this._composers.set(OutgoingHeader.CATALOG_SEARCH, CatalogSearchComposer);

        // CLIENT
        this._composers.set(OutgoingHeader.CLIENT_PONG, ClientPongComposer);
        this._composers.set(OutgoingHeader.RELEASE_VERSION, ClientReleaseVersionComposer);

        // DESKTOP
        this._composers.set(OutgoingHeader.DESKTOP_VIEW, DesktopViewComposer);

        // FRIENDLIST
        this._composers.set(OutgoingHeader.MESSENGER_ACCEPT, AcceptFriendComposer);
        this._composers.set(OutgoingHeader.MESSENGER_DECLINE, DeclineFriendComposer);
        this._composers.set(OutgoingHeader.FIND_FRIENDS, FindNewFriendsComposer);
        this._composers.set(OutgoingHeader.MESSENGER_FOLLOW, FollowFriendComposer);
        this._composers.set(OutgoingHeader.MESSENGER_UPDATES, FriendListUpdateComposer);
        this._composers.set(OutgoingHeader.MESSENGER_REQUESTS, GetFriendRequestsComposer);
        this._composers.set(OutgoingHeader.MESSENGER_SEARCH, HabboSearchComposer);
        this._composers.set(OutgoingHeader.MESSENGER_INIT, MessengerInitComposer);
        this._composers.set(OutgoingHeader.MESSENGER_REMOVE, RemoveFriendComposer);
        this._composers.set(OutgoingHeader.MESSENGER_REQUEST, RequestFriendComposer);
        this._composers.set(OutgoingHeader.MESSENGER_CHAT, SendMessageComposer);
        this._composers.set(OutgoingHeader.MESSENGER_ROOM_INVITE, SendRoomInviteComposer);
        this._composers.set(OutgoingHeader.MESSENGER_RELATIONSHIPS_UPDATE, SetRelationshipStatusComposer);
        this._composers.set(OutgoingHeader.USER_VISIT, VisitUserComposer);

        // NAVIGATOR
        this._composers.set(OutgoingHeader.NAVIGATOR_CATEGORIES, NavigatorCategoriesComposer);
        this._composers.set(OutgoingHeader.NAVIGATOR_INIT, NavigatorInitComposer);
        this._composers.set(OutgoingHeader.NAVIGATOR_SEARCH_CLOSE, NavigatorSearchCloseComposer);
        this._composers.set(OutgoingHeader.NAVIGATOR_SEARCH, NavigatorSearchComposer);
        this._composers.set(OutgoingHeader.NAVIGATOR_SEARCH_OPEN, NavigatorSearchOpenComposer);
        this._composers.set(OutgoingHeader.NAVIGATOR_SEARCH_SAVE, NavigatorSearchSaveComposer);
        this._composers.set(OutgoingHeader.NAVIGATOR_SETTINGS, NavigatorSettingsComposer);
        this._composers.set(OutgoingHeader.NAVIGATOR_SETTINGS_SAVE, NavigatorSettingsSaveComposer);
        this._composers.set(OutgoingHeader.NAVIGATOR_CATEGORY_LIST_MODE, NavigatorCategoryListModeComposer);

        // INVENTORY

        // FURNI
        this._composers.set(OutgoingHeader.USER_FURNITURE, FurnitureListComposer);
        this._composers.set(OutgoingHeader.USER_FURNITURE2, FurnitureList2Composer);

        // TRADING
        this._composers.set(OutgoingHeader.TRADE_ACCEPT, TradingAcceptComposer);
        this._composers.set(OutgoingHeader.TRADE_CANCEL, TradingCancelComposer);
        this._composers.set(OutgoingHeader.TRADE_CLOSE, TradingCloseComposer);
        this._composers.set(OutgoingHeader.TRADE_CONFIRM, TradingConfirmationComposer);
        this._composers.set(OutgoingHeader.TRADE_ITEM, TradingListAddItemComposer);
        this._composers.set(OutgoingHeader.TRADE_ITEMS, TradingListAddItemsComposer);
        this._composers.set(OutgoingHeader.TRADE_ITEM_REMOVE, TradingListItemRemoveComposer);
        this._composers.set(OutgoingHeader.TRADE, TradingOpenComposer);
        this._composers.set(OutgoingHeader.TRADE_UNACCEPT, TradingUnacceptComposer);

        // PET
        this._composers.set(OutgoingHeader.PET_RESPECT, PetRespectComposer);

        // ROOM
        this._composers.set(OutgoingHeader.ROOM_CREATE, RoomCreateComposer);

        // ACCESS
        this._composers.set(OutgoingHeader.ROOM_ENTER, RoomEnterComposer);

        // ACTION
        this._composers.set(OutgoingHeader.ROOM_AMBASSADOR_ALERT, RoomAmbassadorAlertComposer);
        this._composers.set(OutgoingHeader.ROOM_BAN_GIVE, RoomBanUserComposer);
        this._composers.set(OutgoingHeader.ROOM_RIGHTS_GIVE, RoomGiveRightsComposer);
        this._composers.set(OutgoingHeader.ROOM_KICK, RoomKickUserComposer);
        this._composers.set(OutgoingHeader.ROOM_MUTE_USER, RoomMuteUserComposer);
        this._composers.set(OutgoingHeader.ROOM_RIGHTS_REMOVE, RoomTakeRightsComposer);

        // DATA
        this._composers.set(OutgoingHeader.ROOM_INFO, RoomInfoComposer);

        // ENGINE
        this._composers.set(OutgoingHeader.GET_ITEM_DATA, GetItemDataComposer);
        this._composers.set(OutgoingHeader.REMOVE_WALL_ITEM, RemoveWallItemComposer);
        this._composers.set(OutgoingHeader.MODIFY_WALL_ITEM_DATA, ModifyWallItemDataComposer);
        this._composers.set(OutgoingHeader.BOT_PLACE, PlaceBotComposer);
        this._composers.set(OutgoingHeader.BOT_PICKUP, RemoveBotFromFlatComposer);

        // FURNITURE
        this._composers.set(OutgoingHeader.FURNITURE_ALIASES, FurnitureAliasesComposer);
        this._composers.set(OutgoingHeader.FURNITURE_PICKUP, FurniturePickupComposer);
        this._composers.set(OutgoingHeader.FURNITURE_PLACE, FurniturePlaceComposer);
        this._composers.set(OutgoingHeader.ITEM_PAINT, FurniturePlacePaintComposer);
        this._composers.set(OutgoingHeader.FURNITURE_POSTIT_PLACE, FurniturePostItPlaceComposer);

        // FLOOR
        this._composers.set(OutgoingHeader.FURNITURE_FLOOR_UPDATE, FurnitureFloorUpdateComposer);

        // WALL
        this._composers.set(OutgoingHeader.FURNITURE_WALL_UPDATE, FurnitureWallUpdateComposer);

        // LOGIC
        this._composers.set(OutgoingHeader.ITEM_COLOR_WHEEL_CLICK, FurnitureColorWheelComposer);
        this._composers.set(OutgoingHeader.ITEM_DICE_CLICK, FurnitureDiceActivateComposer);
        this._composers.set(OutgoingHeader.ITEM_DICE_CLOSE, FurnitureDiceDeactivateComposer);
        this._composers.set(OutgoingHeader.FURNITURE_MULTISTATE, FurnitureMultiStateComposer);
        this._composers.set(OutgoingHeader.FURNITURE_RANDOMSTATE, FurnitureRandomStateComposer);
        this._composers.set(OutgoingHeader.ITEM_STACK_HELPER, FurnitureStackHeightComposer);
        this._composers.set(OutgoingHeader.FURNITURE_WALL_MULTISTATE, FurnitureWallMultiStateComposer);
        this._composers.set(OutgoingHeader.ONE_WAY_DOOR_CLICK, FurnitureOneWayDoorComposer);

        // MAPPING
        this._composers.set(OutgoingHeader.ROOM_MODEL, RoomModelComposer);

        // UNIT
        this._composers.set(OutgoingHeader.UNIT_ACTION, RoomUnitActionComposer);
        this._composers.set(OutgoingHeader.UNIT_DANCE, RoomUnitDanceComposer);
        this._composers.set(OutgoingHeader.UNIT_DROP_HAND_ITEM, RoomUnitDropHandItemComposer);
        this._composers.set(OutgoingHeader.UNIT_GIVE_HANDITEM, RoomUnitGiveHandItemComposer);
        this._composers.set(OutgoingHeader.UNIT_LOOK, RoomUnitLookComposer);
        this._composers.set(OutgoingHeader.UNIT_SIGN, RoomUnitSignComposer);
        this._composers.set(OutgoingHeader.UNIT_POSTURE, RoomUnitPostureComposer);
        this._composers.set(OutgoingHeader.UNIT_WALK, RoomUnitWalkComposer);

        // CHAT
        this._composers.set(OutgoingHeader.UNIT_CHAT, RoomUnitChatComposer);
        this._composers.set(OutgoingHeader.UNIT_CHAT_SHOUT, RoomUnitChatShoutComposer);
        this._composers.set(OutgoingHeader.UNIT_CHAT_WHISPER, RoomUnitChatWhisperComposer);
        this._composers.set(OutgoingHeader.UNIT_TYPING, RoomUnitTypingStartComposer);
        this._composers.set(OutgoingHeader.UNIT_TYPING_STOP, RoomUnitTypingStopComposer);

        // ROOM EVENTS
        this._composers.set(OutgoingHeader.WIRED_APPLY_SNAPSHOT, ApplySnapshotMessageComposer);
        this._composers.set(OutgoingHeader.WIRED_OPEN, OpenMessageComposer);
        this._composers.set(OutgoingHeader.WIRED_ACTION_SAVE, UpdateActionMessageComposer);
        this._composers.set(OutgoingHeader.WIRED_CONDITION_SAVE, UpdateConditionMessageComposer);
        this._composers.set(OutgoingHeader.WIRED_TRIGGER_SAVE, UpdateTriggerMessageComposer);

                
        // SECURITY
        this._composers.set(OutgoingHeader.SECURITY_TICKET, SecurityTicketComposer);

        // USER
        this._composers.set(OutgoingHeader.USER_RESPECT, UserRespectComposer);

        // DATA
        this._composers.set(OutgoingHeader.USER_BADGES_CURRENT, UserCurrentBadgesComposer);
        this._composers.set(OutgoingHeader.USER_FIGURE, UserFigureComposer);
        this._composers.set(OutgoingHeader.USER_HOME_ROOM, UserHomeRoomComposer);
        this._composers.set(OutgoingHeader.USER_INFO, UserInfoComposer);
        this._composers.set(OutgoingHeader.USER_MOTTO, UserMottoComposer);

        // INVENTORY

        // BOTS
        this._composers.set(OutgoingHeader.USER_BOTS, GetBotInventoryComposer);

        // CURRENCY
        this._composers.set(OutgoingHeader.USER_CURRENCY, UserCurrencyComposer);

        // SUBSCRIPTION
        this._composers.set(OutgoingHeader.USER_SUBSCRIPTION, UserSubscriptionComposer);
    }

    public get events(): Map<number, Function>
    {
        return this._events;
    }

    public get composers(): Map<number, Function>
    {
        return this._composers;
    }
}