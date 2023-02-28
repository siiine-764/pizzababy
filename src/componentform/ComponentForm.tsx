import { useState, useEffect } from 'react';
import React from "react";

class ComponentForm extends React.Component {
    render() {
      return (
        <div>
          <h1>Parent Component</h1>
          <ChildComponent />
        </div>
      );
    }
  }
  
  class ChildComponent extends React.Component {
    render() {
      return (
        <div>
          <h2>Child Component</h2>
          <p>This is the child component.</p>
        </div>
      );
    }
  }

export default ComponentForm;