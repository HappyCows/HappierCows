import { QueryClient, QueryClientProvider } from "react-query";
import { useCommons } from "main/utils/commons";
import { renderHook } from '@testing-library/react-hooks'
import mockConsole from "jest-mock-console";
import commonsFixtures from "fixtures/commonsFixtures";

import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

jest.mock('react-router-dom');

describe("utils/commons tests", () => {
    describe("useCommons tests", () => {
        test("test useCommons initially retrieves initial data on timeout", async () => {

            const queryClient = new QueryClient();
            const wrapper = ({ children }) => (
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            );

            var axiosMock = new AxiosMockAdapter(axios);
            axiosMock.onGet("/api/commons").timeout();

            const restoreConsole = mockConsole();

            const { result, waitFor } = renderHook(() => useCommons(), { wrapper });

            await waitFor(() => result.current.isSuccess);
            expect(result.current.data).toEqual([]);

            const queryState = queryClient.getQueryState("getCommons");
            expect(queryState).toBeDefined();

            await waitFor(() => expect(console.error).toHaveBeenCalled());
            const errorMessage = console.error.mock.calls[0][0];
            expect(errorMessage).toMatch("Error getting data from /api/commons:");
            restoreConsole();

        });
    });

    describe("useCommons tests", () => {
        test("test useCommons hits error logic on 404", async () => {

            const queryClient = new QueryClient();
            const wrapper = ({ children }) => (
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            );

            var axiosMock = new AxiosMockAdapter(axios);
            axiosMock.onGet("/api/commons").reply(404);

            const restoreConsole = mockConsole();

            const { result, waitFor } = renderHook(() => useCommons(), { wrapper });
            await waitFor(() => result.current.isFetched);
            expect(console.error).toHaveBeenCalled();
            const errorMessage = console.error.mock.calls[0][0];
            expect(errorMessage).toMatch("Error getting data from /api/commons:");
            restoreConsole();

            expect(result.current.data).toEqual([]);

        });
    });

    describe("useCommons tests", () => {
        test("test useCommons returns correct data when api is mocked", async () => {

            const queryClient = new QueryClient();
            const wrapper = ({ children }) => (
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            );
            var axiosMock = new AxiosMockAdapter(axios);
            axiosMock.onGet("/api/commons").reply(200, commonsFixtures.threeCommons);

            const { result, waitFor } = renderHook(() => useCommons(), { wrapper });
            await waitFor(() => result.current.isFetched);
            expect(result.current.data).toEqual(commonsFixtures.threeCommons);

        });
    });    
});