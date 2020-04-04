
import React from "react";
import { FormControl, FormGroup, InputGroup, Button } from "react-bootstrap";

const SearchBar = ({ value, onClick, onChange }) => (
  <FormGroup>
    <InputGroup>
      <FormControl
        bsSize="large"
        type="text"
        placeholder="Search github username..."
        onChange={onChange}
        value={value}
      />
      <InputGroup.Button>
        <Button bsSize="large" bsStyle="primary" onClick={onClick}>
          Search
        </Button>
      </InputGroup.Button>
    </InputGroup>
  </FormGroup>
);


export default SearchBar;
