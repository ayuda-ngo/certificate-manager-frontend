import React, { Component } from "react";

import { CSVReader } from "react-papaparse";

const buttonRef = React.createRef();

export default class CSVReaderComponent extends Component {
  handleOpenDialog = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };

  handleOnFileLoad = (data) => {
    data.pop();
    this.props.setCSVData(data);
    console.log("---------------------------");
    console.log(data);
    console.log("---------------------------");
  };

  handleOnError = (err, file, inputElem, reason) => {
    console.log("---------------------------");
    console.log(err);
    console.log("---------------------------");
  };

  handleOnRemoveFile = (data) => {
    console.log("---------------------------");
    console.log(data);
    console.log("---------------------------");
  };

  handleRemoveFile = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.removeFile(e);
    }
  };

  render() {
    return (
      <CSVReader
        ref={buttonRef}
        onFileLoad={this.handleOnFileLoad}
        onError={this.handleOnError}
        noClick
        noDrag
        onRemoveFile={this.handleOnRemoveFile}
      >
        {({ file }) => (
          <aside className="flex flex-row w-full justify-center items-center">
            <button
              type="button"
              className="w-25 inline-block px-5 py-3 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500"
              onClick={this.handleOpenDialog}
            >
              Browse file
            </button>
            <div className="flex-auto w-50 inline-block h-12 text-sm border-2 rounded-lg border-black">
              {file && file.name}
            </div>
            <button
              type="button"
              className="w-25 inline-block px-5 py-3 font-medium text-white bg-red-600 rounded-lg hover:bg-red-500"
              onClick={this.handleRemoveFile}
            >
              Remove
            </button>
          </aside>
        )}
      </CSVReader>
    );
  }
}
