/// <reference types="Cypress" />
import { capture } from "../../support/pageObjects/CapturePage";
import { dashboardPage } from "../../support/pageObjects/DashboardPage";
import { utils } from "../../support/Utilities/Utils";
const { TEST_USER_EMAIL: email, TEST_USER_PASSWORD: password } = Cypress.env();


function loadBefore() {

    cy.login(email, password);
    //by default dashboard screen should be visible
    utils.waitTillPageLoad()
    cy.url().should('include', '/dashboard')

}
describe("Visual test for Capture Micro App Page", function () {
    it("Navigating to Capture Micro App", function () {
        loadBefore()
        //getting user name from dashboard page
        dashboardPage.profileName().click();
        //verifying url on my profile page
        utils.waitFor(5000)


        cy.get("a[href='/capture-micro']").then(function (ln) {
            const url = ln.prop('href')
            cy.visit(url + '/')
        })
        cy.percySnapshot("OTT Dashboard responsive test");
    });
    it("Off the tee", function () {
        // capture.go_to_capture_home()
        capture.offthetee().click()
        cy.percySnapshot("Off the tee");
    });
    it("Approach", function () {
        capture.approach().click()
        cy.percySnapshot("Approach");
        utils.waitFor(5000)
        capture.wedgeladder().click()
        cy.percySnapshot("Wedge Ladder 50-90YD");
        utils.waitFor(2000)
        capture.wedgeladder95().click()
        cy.percySnapshot("Wedge Ladder 95-135");
        utils.waitFor(2000)
        capture.pitchingstring().click()
        cy.percySnapshot("Pitching String");
        utils.waitFor(2000)
        capture.wedgendshortironplay().click()
        cy.percySnapshot("Wedge and Short iron play");
        utils.waitFor(2000)
        capture.randomapproach().click()
        cy.percySnapshot("Set test parameters");
        utils.waitFor(2000)
        capture.randomapproachsave().click()
        cy.percySnapshot("Random Approach Ladder");
        capture.approach().click({ force: true })

    });
    it("Around The Green", function () {
        utils.waitFor(2000)
        capture.aroundthegreen().click()
        cy.percySnapshot("Around The Green");

    });
    it("Putting", function () {
        capture.putting().click()
        cy.percySnapshot("Putting");
        utils.waitFor(3000)
        capture.mustmakeputting().click()
        cy.percySnapshot("Must Make Putting");
        utils.waitFor(3000)
        capture.puttingcombine().click()
        cy.percySnapshot("Putting Combine Set Test Prameters");
        capture.puttingcombinesave().click()
        cy.percySnapshot("Putting Combine");
    });

})