// <reference types="cypress" />
import { dashboardPage } from "../../support/pageObjects/DashBoardPage";
import { utils } from "../../support/Utilities/Utils";
import { activitiesPage } from "../../support/pageObjects/ActivitiesPage";
import { recurse } from "cypress-recurse";
const { } = Cypress;
// Get the credentials
const { DEFAULT_USER_EMAIL: email, DEFAULT_USER_PASSWORD: password } =
    Cypress.env();
function loadBefore() {
    before(() => {
        cy.login("test+decade@clippd.io", password);
    });
}
describe("Verifying if Decade present or not ", () => {
    loadBefore();
    //Verifying if "Data: Decade" is present in any activity
    it("Verifying if dataflow is decade", () => {
        dashboardPage.activityLink().click();
        utils.waitFor(3000);
        //Navigating to further pages until "Data: Decade" is not found
        recurse(
            () => utils.getTextOfAllElements2(activitiesPage.Dataflowxpath),
            (n) => n.includes('Data: Decade') == true,
            {
                limit: 10,
                timeout: 60000,
                delay: 2000,
                log: false,
                post() {
                    //navigating to next page as "Data: Decade" not found yet.
                    utils.clickOn(activitiesPage.next_button);
                },
            }
        );

        utils.getTextOfAllElements2(activitiesPage.Dataflowxpath).should("include", 'Data: Decade')

    });
});