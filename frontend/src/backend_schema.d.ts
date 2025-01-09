/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["app_version"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/recommended": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets recommended meetups */
        get: operations["recommended_meetups_handler"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Searches meetups. Event end date will not be set, only even start date will be taken into account. */
        post: operations["search_handler"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        CovidPrecautions: {
            venueType?: string | null;
        };
        Edge: {
            metadata: components["schemas"]["Metadata"];
            node: components["schemas"]["Node"];
        };
        Edge2: {
            node: components["schemas"]["Node2"];
        };
        Events: {
            edges: components["schemas"]["Edge2"][];
        };
        FeaturedEventPhoto: {
            baseUrl: string;
            highResUrl: string;
            id: string;
        };
        FeeSettings: {
            accepts: string;
            currency: string;
        };
        GQLData: {
            result: components["schemas"]["MeetupResult"];
        };
        GQLResponse: {
            data?: null | components["schemas"]["GQLData"];
            errors?: unknown[] | null;
        };
        Group: {
            id: string;
            isNewGroup: boolean;
            isPrivate: boolean;
            keyGroupPhoto?: null | components["schemas"]["KeyGroupPhoto"];
            membershipMetadata?: null | components["schemas"]["MembershipMetadata"];
            name: string;
            timezone: string;
            urlname: string;
        };
        Group2: {
            urlname: string;
        };
        HomeResponse: {
            version: string;
        };
        KeyGroupPhoto: {
            baseUrl: string;
            highResUrl: string;
            id: string;
        };
        MeetupResult: {
            edges: components["schemas"]["Edge"][];
            pageInfo: components["schemas"]["PageInfo"];
            /** Format: int64 */
            totalCount: number;
        };
        MembershipMetadata: {
            role: string;
        };
        Metadata: {
            recId: string;
            recSource: string;
        };
        Node: {
            covidPrecautions: components["schemas"]["CovidPrecautions"];
            dateTime: string;
            description: string;
            eventType: string;
            eventUrl: string;
            featuredEventPhoto?: null | components["schemas"]["FeaturedEventPhoto"];
            feeSettings?: null | components["schemas"]["FeeSettings"];
            googleMapsUrl?: string | null;
            group: components["schemas"]["Group"];
            id: string;
            isAttending: boolean;
            /** @description A string description of if this event will be attended or not */
            isAttendingStr?: string | null;
            isOnline: boolean;
            isSaved: boolean;
            /** Format: int64 */
            maxTickets: number;
            rsvpState: string;
            rsvps: components["schemas"]["Rsvps"];
            series?: null | components["schemas"]["Series"];
            socialLabels: unknown[];
            title: string;
            venue?: null | components["schemas"]["Venue"];
        };
        Node2: {
            dateTime: string;
            group: components["schemas"]["Group2"];
            id: string;
            isAttending: boolean;
        };
        PageInfo: {
            endCursor?: string | null;
            hasNextPage: boolean;
        };
        Rsvps: {
            /** Format: int64 */
            totalCount: number;
        };
        /** @description Body for `/search` route */
        SearchRequestBody: {
            /**
             * Format: int32
             * @description Events to return per page
             */
            per_page?: number | null;
            /** @description Search query */
            query?: string | null;
            /** @description Start date of event */
            start_date?: string | null;
        };
        Series: {
            events: components["schemas"]["Events"];
        };
        Venue: {
            city: string;
            country: string;
            id: string;
            /** Format: double */
            lat: number;
            /** Format: double */
            lon: number;
            name: string;
            state: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    app_version: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Version of the server */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HomeResponse"];
                };
            };
            /** @description Failed to get the vesion of the server */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
        };
    };
    recommended_meetups_handler: {
        parameters: {
            query: {
                startDate: string;
                endDate: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Found recommended meetups successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GQLResponse"];
                };
            };
            /** @description Failed to fetch meetups */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
        };
    };
    search_handler: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SearchRequestBody"];
            };
        };
        responses: {
            /** @description Successfully returned searched meetups */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GQLResponse"];
                };
            };
            /** @description Failed to search for meetups */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
        };
    };
}
