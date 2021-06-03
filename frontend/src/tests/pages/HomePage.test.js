import { render } from "@testing-library/react";
import HomePage from "main/pages/HomePage";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";
import { apiCurrentUserFixtures } from "fixtures/currentUserFixtures";
import commonsFixtures from "fixtures/commonsFixtures"; 

describe("HomePage tests", () => {
    const queryClient = new QueryClient();
    test("renders without crashing", () => {
        var axiosMock = new AxiosMockAdapter(axios);
        axiosMock.onGet("/api/currentUser").reply(200, apiCurrentUserFixtures.userOnly);
        axiosMock.onGet("/api/commons").reply(200, commonsFixtures.threeCommons);
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <HomePage />
                </MemoryRouter>
            </QueryClientProvider>
        );
    });

});
