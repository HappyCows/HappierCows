import { render, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";
import AdminCreateCommonsPage from "main/pages/AdminCreateCommonsPage";

describe("AdminUsersPage tests",  () => {
    const queryClient = new QueryClient();
    test("renders without crashing", async () => {

        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <AdminCreateCommonsPage />
                </MemoryRouter>
            </QueryClientProvider>
        );

    });

});
