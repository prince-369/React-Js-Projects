import React, { useState, useCallback , useEffect ,useRef} from "react";

import "./PassGen.css";

const PassGen = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyClip = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  } , [password]);

    useEffect(() => {   
        passwordGenerator();
    }, [length, numberAllowed, charAllowed, passwordGenerator]);

    const passwordRef = useRef(null);
  return (
    <>
      <h1 className="heading">Password Generator --V9</h1>

      <div className="container">
        <div className="items">
          <input
            type="text"
            className="input"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button className="btn-copy" onClick={copyClip}>Copy</button>
        </div>
        <div className="features">
            <input type="range" 
            className="slider"
            min="6"
            max="32"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
        </div>
        <div className="cheaked">
            <input
                type="checkbox"
                defaultChecked={numberAllowed}
                onChange={() => {setNumberAllowed((prev) => !prev)}}
            />
            <label>Numbers</label>
            <input
                type="checkbox"
                defaultChecked={charAllowed}
                onChange={() => {setCharAllowed((prev) => !prev)}}
            />
            <label>Special Characters</label>
        </div>
      </div>
    </>
  );
};

export default PassGen;
