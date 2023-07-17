import React from "react";
import { render } from '@testing-library/react';
import GitHubCard from "./GitHubCard";

test("renders Github Card component", () => {
    const { asFragment } = render(<GitHubCard />);
    expect(asFragment()).toMatchSnapshot();
});