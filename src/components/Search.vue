<style scoped>
  .mother{
    display: flex;
    justify-content: center;
    margin-bottom: 1cm;
  }
  .InputContainer {
    width: 20cm;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    padding-left: 15px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);
  }

  .input {
    width: 750px;
    height: 120%;
    border: none;
    outline: none;
    font-size: 0.9em;
    caret-color: rgb(255, 81, 0);
  }

  .labelforsearch {
    cursor: text;
    padding: 0px 12px;
  }

  .searchIcon {
    width: 13px;
  }

  .border {
    height: 40%;
    width: 1.3px;
    background-color: rgb(223, 223, 223);
  }

  .micIcon {
    width: 12px;
  }

  .micButton {
    padding: 0px 15px 0px 12px;
    border: none;
    background-color: transparent;
    height: 40px;
    cursor: pointer;
    transition-duration: .3s;
  }

  .searchIcon path {
    fill: rgb(114, 114, 114);
  }

  .micIcon path {
    fill: rgb(255, 81, 0);
  }

  .micButton:hover {
    background-color: rgb(255, 230, 230);
    transition-duration: .3s;
  }
  @media screen and (max-width: 1200px) {
    *{
        margin: 0;
        padding: 0;
    }
    
  }
</style>

<template>
    <div class="mother">
        <div class="InputContainer">
    <input type="text" name="text" class="input" id="input" placeholder="Search">

    <label for="input" class="labelforsearch">
  <svg viewBox="0 0 512 512" class="searchIcon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
  </label>
  <div class="border"></div>

  <button class="micButton"><svg viewBox="0 0 384 512" class="micIcon"><path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"></path></svg>
  </button>

  </div>
    </div>
 
</template>
