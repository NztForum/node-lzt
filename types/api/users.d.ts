export class LZTApiUsersGroup extends LZTApiGroup {
    static name: string;
    getUsers({ page, limit }?: { page: any; limit: any }): Promise<any>;
    create({
        userEmail,
        username,
        password,
        passwordAlgo,
        userDobDay,
        userDobMonth,
        userDobYear,
        fields,
        clientId,
        extraData,
        extraTimestamp,
    }?: {
        userEmail: string;
        username: string;
        password: string;
        passwordAlgo: any;
        userDobDay: any;
        userDobMonth: any;
        userDobYear: any;
        fields: any;
        clientId: any;
        extraData: any;
        extraTimestamp: any;
    }): Promise<any>;
    getFields(): Promise<any>;
    getUser({ userId }?: { userId?: string }): Promise<any>;
    edit({
        userId,
        fields,
        password,
        passwordOld,
        passwordAlgo,
        userEmail,
        username,
        userTitle,
        primaryGroupId,
        secondaryGroupIds,
        userDobDay,
        userDobMonth,
        userDobYear,
    }?: {
        userId?: string;
        fields: any;
        password: string;
        passwordOld: any;
        passwordAlgo: any;
        userEmail: string;
        username: string;
        userTitle: string;
        primaryGroupId: any;
        secondaryGroupIds: any;
        userDobDay: any;
        userDobMonth: any;
        userDobYear: any;
    }): Promise<any>;
    setAvatar({
        userId,
        avatar,
    }?: {
        userId?: string;
        avatar: any;
    }): Promise<any>;
    deleteAvatar({ userId }?: { userId?: string }): Promise<any>;
    getFollowers({
        userId,
        order,
        page,
        limit,
    }?: {
        userId?: string;
        order: any;
        page: any;
        limit: any;
    }): Promise<any>;
    follow({ userId }?: { userId?: string }): Promise<any>;
    unfollow({ userId }?: { userId?: string }): Promise<any>;
    getFollowings({
        userId,
        order,
        page,
        limit,
    }?: {
        userId?: string;
        order: any;
        page: any;
        limit: any;
    }): Promise<any>;
    getIgnored(): Promise<any>;
    ignore({ userId }?: { userId?: string }): Promise<any>;
    uningore({ userId }?: { userId?: string }): Promise<any>;
    getGroups(): Promise<any>;
    getUserGroups({ userId }?: { userId?: string }): Promise<any>;
}
import { LZTApiGroup } from "../apiGroup.js";
