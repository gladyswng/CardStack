import { storiesOf } from '@storybook/react';
import * as React from 'react';
import StackCards from "../src/components/StackCards";
storiesOf("Cards", module)
    .add("StackCards", () => (
        <StackCards />
    ));