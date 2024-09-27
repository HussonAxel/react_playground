export default function UnknownHTMLTags() {
  return (
    <div className="px-4 py-2 h-screen flex justify-center items-center flex-col gap-8 bg-slate-600 transition">
      <h2> HTML TAGS - DETAILS</h2>
      <details>
        <summary>Open me </summary>
        Now you can see me !
      </details>
      <details open className="open:bg-black open:text-white open:px-4">
        <summary>Close me </summary>
        Hide !
      </details>

      <h2>HTML - TAGS - POPUP</h2>
      <div id="pop" popover="manual">
        HELLO WORLD
      </div>
      <button popovertarget="pop" popovertargetaction="show">
        SHOW CONTENT
      </button>
      <button popovertarget="pop" popovertargetaction="hide">
        HIDE CONTENT
      </button>

      <h2> HTML TAGS - DATALIST </h2>
      <label htmlFor="fruit"> Quel est ton fruit préféré </label>
      <input type="text" id="fruit" name="fruit" list="listFruit" />
      <datalist id="listFruit">
        <option value="Pomme"></option>
        <option value="Banane"></option>
        <option value="Poire"></option>
        <option value="Fraise"></option>
      </datalist>

      <h2> HTML TAGS - OPTGROUP</h2>
      <label htmlFor="country"> Choose a country </label>
      <select id="country" name="country">
        <option value="" disabled selected>
          Select your option
        </option>
        <optgroup label="Europe">
          <option value="France">France</option>
          <option value="Germany">Germany</option>
        </optgroup>
        <optgroup label="Asia">
          <option value="China">China</option>
          <option value="Japan">Japan</option>
        </optgroup>
      </select>
    </div>
  );
}
