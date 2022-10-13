import React, { useState } from "react";
import { IAutocomplete } from "./types";
import "./styles.css";
import { Highlighted } from "../Highlighted";

export const Autocomplete = ({ suggestions }: IAutocomplete) => {
  const [active, setActive] = useState<number>(0);
  const [filtered, setFiltered] = useState<string[]>([]);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.currentTarget.value;
    const newFilteredSuggestions = suggestions.filter(
      (suggestion) => suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
    );
    setActive(0);
    setFiltered(newFilteredSuggestions);
    setIsShow(true);
    setInput(input);
  };

  const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setInput(e.currentTarget.innerText);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setActive(0);
      setIsShow(false);
      setInput(filtered[active]);
    } else if (e.key === "ArrowUp") {
      return active === 0 ? null : setActive(active - 1);
    } else if (e.key === "ArrowDown") {
      return active - 1 === filtered.length ? null : setActive(active + 1);
    }
  };

  const renderAutocomplete = () => {
    if (isShow && input) {
      if (filtered.length) {
        return (
          <ul className="autocomplete">
            {filtered.map((suggestion, index) => {
              let className;
              if (index === active) {
                className = "active";
              }
              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  <Highlighted text={suggestion} highlight={input} />
                </li>
              );
            })}
          </ul>
        );
      } else {
        return (
          <div className="no-autocomplete">
            <em>Not found</em>
          </div>
        );
      }
    }
    return null;
  };

  return (
    <>
      <input
        type="text"
        aria-label="country-input"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      {renderAutocomplete()}
    </>
  );
};
