import { render } from "@testing-library/react";
import CommonsList from "main/components/Commons/CommonsList"; 
import commonsFixtures from "fixtures/commonsFixtures"; 

describe("CommonsCard tests", () => {

    test("renders without crashing when button text is set", () => {
        const { getAllByTestId } = render(
            <CommonsList commonList = {commonsFixtures.threeCommons} buttonText = {"Join"} />
        );
        const buttons = getAllByTestId("commonsCard-button");
        buttons.map((b) => {
            expect(b).toBeInTheDocument();
            expect(typeof(b.textContent)).toBe('string');
            expect(b.textContent).toEqual('Join');
        });
    });

    test("renders no button when button text is null", () => {
        const { getAllByTestId } = render(
            <CommonsList commonList = {commonsFixtures.threeCommons} buttonText = {null} />
        );
        expect(() => getAllByTestId("commonsCard-button")).toThrow('Unable to find an element');
    });
});