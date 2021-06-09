import { render } from "@testing-library/react";
import ManageCows from "main/components/Commons/ManageCows"; 
import commonsFixtures from "fixtures/commonsFixtures"; 

describe("ManageCows tests", () => {

    test("renders without crashing", () => {
        render(
            <ManageCows testCommon={commonsFixtures} />
        );
    });
});