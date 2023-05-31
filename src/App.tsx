import React from "react";
import { Button } from "./components";

function App() {
  return (
    <div className="App light-theme">
      <Button
        label="basic button"
        variant="primary"
        size="large"
        fontWeight="bold"
        rounded="sm"
      >
        <span>abc</span>
      </Button>
    </div>
  );
}

export default App;
