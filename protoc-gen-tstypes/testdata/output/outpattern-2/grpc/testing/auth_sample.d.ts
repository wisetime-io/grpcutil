// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace grpc.testing {

    export interface Request {
        fillUsername?: boolean;
        fillOauthScope?: boolean;
    }

    export interface Response {
        username?: string;
        oauthScope?: string;
    }

    export interface TestServiceService {
        UnaryCall: (r:Request) => Response;
    }
}

