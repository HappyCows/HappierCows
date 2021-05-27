import { render } from "@testing-library/react";
import CommonsCard from "main/components/Commons/CommonsCard"; 
import commonsFixtures from "fixtures/commonsFixtures"; 

describe("CommonsCard tests", () => {

    test("renders without crashing when button text is set", () => {
        const { getByTestId } = render(
            <CommonsCard commons = {commonsFixtures.threeCommons[0]} buttonText = {"Join"} />
        );
        const button = getByTestId("commonsCard-button");
        expect(button).toBeInTheDocument();
        expect(typeof(button.textContent)).toBe('string');
        expect(button.textContent).toEqual('Join');  
    });

    test("renders no button when button text is null", () => {
        const { getByTestId } = render(
            <CommonsCard commons = {commonsFixtures.threeCommons[0]} buttonText = {null} />
        );
        expect(() => getByTestId("commonsCard-button")).toThrow('Unable to find an element');
    });
});