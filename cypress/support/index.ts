export type {};

type LoginCommandArgs = {
    username?: string;
    password?: string;
};

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            /**
             * Gets element by data-testid key
             * @returns void
             */
            getDataTestId: (selector: string) => Chainable<void>;

            /**
             * Logs in E2E user
             * @returns void
             */
            login: (args?: LoginCommandArgs) => Chainable<JQuery<HTMLElement>>;
        }
    }
}
