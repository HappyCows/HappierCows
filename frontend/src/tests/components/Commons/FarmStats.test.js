import { render } from "@testing-library/react";
import FarmStats from "main/components/Commons/FarmStats"; 
import commonsFixtures from "fixtures/commonsFixtures"; 

describe("FarmStats tests", () => {

    test("renders without crashing", () => {
        render(
            <FarmStats testCommon={commonsFixtures} />
        );
    });
});