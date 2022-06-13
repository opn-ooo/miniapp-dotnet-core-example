export default SDK;
export type AccessToken = {
    /**
     * Access token
     */
    token: string;
    /**
     * Is it mock
     */
    isMock?: boolean;
};
export type PaymentStatus = "error" | "success" | "canceled";
export type PaymentResult = {
    /**
     * Transaction id
     */
    txId?: string;
    /**
     * Status of operation
     */
    status: PaymentStatus;
    /**
     * Is it mock
     */
    isMock?: boolean;
};
export type UserInfo = {
    /**
     * Email address
     */
    email: string;
    /**
     * First name
     */
    firstName?: string;
    /**
     * Last name
     */
    lastName?: string;
    /**
     * Is it mock
     */
    isMock?: boolean;
};
export type Error = {
    /**
     * error code
     */
    code: number;
    /**
     * error message
     */
    message: string;
};
export type Platform = "android" | "ios" | "web";
/**
 * Used from MiniApps for communicate with Native side
 */
declare class SDK {
    /**
     * @returns {SDK} Instance
     */
    static load(): SDK;
    /**
     * Init SDK
     *
     * @description Should be called first. If bundleID is `mock` or empty all other methods will return mocked data
     *
     * @param {string} [bundleID=mock] - ID of MiniApp
     * @returns {Promise<void>} Status of initialization
     */
    init(bundleID?: string): Promise<void>;
    /**
     * Returns readonly current platform
     *
     * @returns {Platform} Current platform
     */
    get platform(): "android" | "ios" | "web";
    /**
     * Returns readonly messenger instance
     *
     * @returns {object} messenger
     */
    get messenger(): any;
    /**
     * Create base of MessageToNative
     *
     * @param {string} topic to Native topic
     * @returns {object} message object
     */
    createMessageToNativeBase(topic: string): object;
    /**
     * Returns access token to miniApp
     *
     * @returns {Promise<AccessToken>} Object with token e.g. `{ token: 'ttt' }`
     * @throws {Error} Object with {code, message}
     */
    getAccessToken(): Promise<AccessToken>;
    /**
     * Send payment info to Native side
     *
     * @param {object} paymentInfo Object with parameters
     * @param {string} [paymentInfo.deepLink] deepLink
     * @param {string} [paymentInfo.qr] qr code
     * @returns {Promise<PaymentResult>} Result of payment
     * @throws {Error} Object with {code, message}
     */
    processPayment({ deepLink, qr }: {
        deepLink: string;
        qr: string;
    }): Promise<PaymentResult>;
    /**
     * Returns info for current user
     *
     *
     * @returns {Promise<UserInfo>} Object with info
     */
    getUserInfo(): Promise<UserInfo>;
    #private;
}
