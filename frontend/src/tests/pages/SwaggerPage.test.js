import { render, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";
import SwaggerPage from "main/pages/SwaggerPage";

describe("SwaggerPage tests", () => {
    const queryClient = new QueryClient();
    test("renders without crashing", () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <SwaggerPage />
                </MemoryRouter>
            </QueryClientProvider>
        );
    });

   
});


