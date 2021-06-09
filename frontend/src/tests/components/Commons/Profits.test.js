import { render } from "@testing-library/react";
import Profits from "main/components/Commons/Profits"; 

describe("Profits tests", () => {

    test("renders without crashing", () => {
        render(
            <Profits />
        );
    });
});