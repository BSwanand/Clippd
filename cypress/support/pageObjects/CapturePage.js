const capturehome = "(//*[contains(@class,'MuiButtonBase-root Mui')])[1]";
const favourites = "(//*[contains(@class,'MuiButtonBase-root Mui')])[2]";
const offthetee = "(//*[contains(@class,'MuiButtonBase-root Mui')])[3]";

const approach = "(//div[contains(text(),'Approach')])[1]";
const aroundthegreen = "//div[contains(text(),'Around the Green')]";
const putting = "(//div[contains(text(),'Putting')])[1]";
const backtoclippd = "//div[contains(text(),'Back to Clippd')]";
const wedgeladder = "(//div[contains(text(),'Wedge Ladder')])[1]"
const emailadderss = "(//*[contains(@class,'MuiSelect-se')])";
const dateandtime = "(//*[contains(@class,'MuiOutl(//*[containedInput-i')])[2]";
const target1 = "ins(@class,'MuiOutlinedInput-i')])[3]";
const target2 = "(//*[contains(@class,'MuiOutlinedInput-i')])[4]";
const target3 = "(//*[contains(@class,'MuiOutlinedInput-i')])[5]";
const target4 = "(//*[contains(@class,'MuiOutlinedInput-i')])[6]";
const target5 = "(//*[contains(@class,'MuiOutlinedInput-i')])[7]";
const target6 = "(//*[contains(@class,'MuiOutlinedInput-i')])[8]";
const target7 = "(//*[contains(@class,'MuiOutlinedInput-i')])[9]";
const target8 = "(//*[contains(@class,'MuiOutlinedInput-i')])[10]";
const target9 = "(//*[contains(@class,'MuiOutlinedInput-i')])[11]";
const clearbutton = "(//*[contains(@class,'MuiButton-root MuiButton-c')])[1]";
const savebutton = "(//*[contains(@class,'MuiButton-root MuiButton-c')])[2]";
const message = "//*[contains(text(),'Your activity has been updated.')]";
const mustmakeputting = "//a[@href='/capture-micro/must-make-putting']//div[@role='button']"
const puttingcombine = "//div[contains(text(),'Putting Combine')]"
const sixftconversion = "//div[contains(text(),'6ft Conversion Zone')]"
const sixftconversionsave = "(//button[@type='submit'])[2]"
const wedgeladder95 = "(//*[contains(@class,'MuiButt')])[6]"
const pitchingstring = "(//*[contains(@class,'MuiButt')])[7]"
const wedgendshortironplay = "(//*[contains(@class,'MuiButt')])[8]"
const randomapproach = "(//*[contains(@class,'MuiButt')])[9]"
const randomapproachsave = "(//button[@type='button'])[7]"
const puttingcombinesave = "//button[@type='submit']"
const capture_home_url = "https://dev.clippd.com/capture-micro/"


class capturepage {
    capturehome() {
        return cy.xpath(capturehome);
    }
    favourites() {
        return cy.xpath(favourites);
    }
    offthetee() {
        return cy.xpath(offthetee);
    }
    approach() {
        return cy.xpath(approach);
    }
    aroundthegreen() {
        return cy.xpath(aroundthegreen);
    }
    putting() {
        return cy.xpath(putting);
    }
    backtoclippd() {
        return cy.xpath(backtoclippd);
    }
    wedgeladder() {
        return cy.xpath(wedgeladder);
    }
    emailadderss() {
        return cy.xpath(emailadderss);
    }
    dateandtime() {
        return cy.xpath(dateandtime);
    }
    target1() {
        return cy.xpath(target1);
    }
    target2() {
        return cy.xpath(target2);
    }
    target3() {
        return cy.xpath(target3);
    }
    target4() {
        return cy.xpath(target4);
    }
    target5() {
        return cy.xpath(target5);
    }
    target6() {
        return cy.xpath(target6);
    }
    target7() {
        return cy.xpath(target7);
    }
    target8() {
        return cy.xpath(target8);
    }
    target9() {
        return cy.xpath(target9);
    }
    clearbutton() {
        return cy.xpath(clearbutton);
    }
    savebutton() {
        return cy.xpath(savebutton);
    }
    message() {
        return cy.xpath(message);
    }
    mustmakeputting() {
        return cy.xpath(mustmakeputting);
    }
    puttingcombine() {
        return cy.xpath(puttingcombine)
    }
    sixftconversion() {
        return cy.xpath(sixftconversion)
    }
    wedgeladder95() {
        return cy.xpath(wedgeladder95)
    }
    pitchingstring() {
        return cy.xpath(pitchingstring)
    }
    wedgendshortironplay() {
        return cy.xpath(wedgendshortironplay)
    }
    randomapproach() {
        return cy.xpath(randomapproach)
    }
    randomapproachsave() {
        return cy.xpath(randomapproachsave)
    }
    puttingcombinesave() {
        return cy.xpath(puttingcombinesave)
    }
    go_to_capture_home() {
        cy.visit(capture_home_url)
    }
    sixftconversionsave() {
        return cy.xpath(sixftconversionsave)
    }

}
export const capture = new capturepage();