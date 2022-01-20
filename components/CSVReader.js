import React, { Component } from "react";

import { CSVReader } from "react-papaparse";
import Button from "../containers/Button";
import { FolderIcon, RemoveFolderIcon } from "../containers/icons";

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
    data.shift();
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
        onRemoveFile={this.handleOnRemoveFile}
      >
        {({ file }) => (
          <aside className="flex flex-col w-full justify-center items-center my-4">
            <input
              className="w-full input-field text-center"
              disabled
              value={file ? file.name : "Only .csv files allowed."}
            />
            <div className="flex w-full p-0 m-0">
              <Button
                icon={<FolderIcon />}
                className="btn-primary w-full mt-6 mr-4"
                onClick={this.handleOpenDialog}
              >
                Browse File
              </Button>
              <Button
                icon={<RemoveFolderIcon />}
                className="btn-error w-full mt-6"
                onClick={this.handleRemoveFile}
              >
                Remove
              </Button>
            </div>
          </aside>
        )}
      </CSVReader>
    );
  }
}
