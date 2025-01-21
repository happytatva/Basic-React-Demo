import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Typography } from "@mui/material";

const VisuallyHiddenInput = styled("input")({
  height: "100%",
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: "100%",
  opacity: 0,
});

function FileUploadComponent() {
  const [file, setFile] = useState([]);

  const singlehandleFileChange = (e) => {
    const files = e.target.files;
    const fileName = files[0]?.name;
    console.log(fileName);

    if (fileName) {
      setFile([fileName]); // Update the state with the selected file's name
    }
  };

  const singlehandleFileRemove = (fileName) => {
    setFile(file.filter((file) => file !== fileName)); // Remove the file from the state
  };

  // State to store uploaded file names
  const [uploadedFiles, setUploadedFiles] = useState(new Set());
  const [fileList, setFileList] = useState([]);

  const handleFileChange = (e) => {
    const files = e.target.files;
    const newFileList = [];

    for (let i = 0; i < files.length; i++) {
      let fileName = files[i].name;

      // Check if the file has already been uploaded
      if (!uploadedFiles.has(fileName)) {
        setUploadedFiles((prevFiles) => new Set(prevFiles.add(fileName)));
        newFileList.push(fileName);
      } else {
        console.log(`Duplicate file: ${fileName} was not uploaded.`);
      }
    }

    // Update the displayed file list
    setFileList((prevList) => [...prevList, ...newFileList]);
  };

  const handleFileRemove = (fileName) => {
    setFileList(fileList.filter((file) => file !== fileName));
    setUploadedFiles((prevFiles) => {
      const updatedFiles = new Set(prevFiles);
      updatedFiles.delete(fileName);
      return updatedFiles;
    });
  };

  // for Dropzone
  const [dragfiles, setDragFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles);

    if (acceptedFiles?.length) {
      setDragFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }
  }, []);

  const removeFile = (name) => {
    setDragFiles((dragfiles) => dragfiles.filter((file) => file.name !== name));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <Typography variant="h1">File Upload Demo</Typography>
      <div className="custom-box">
        <div className="row">
          <div className="col">
            <Typography variant="p">Single file upload</Typography>
            <Button
              fullWidth
              size="large"
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload file
              <VisuallyHiddenInput
                type="file"
                onChange={singlehandleFileChange}
              />
            </Button>
            <div id="filewrapper">
              {file.length > 0 && (
                <div key={file[0]} className="showfilebox">
                  <div className="file">{file[0]}</div>
                  <div
                    className="close-icon"
                    onClick={() => singlehandleFileRemove(file[0])}
                  ></div>
                </div>
              )}
            </div>
          </div>
          <div className="col">
            <Typography variant="p">Multiple files upload</Typography>
            <Button
              fullWidth
              size="large"
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              endIcon={<CloudUploadIcon />}
            >
              Upload files
              <VisuallyHiddenInput
                type="file"
                onChange={handleFileChange}
                multiple
              />
            </Button>
            <div id="filewrapper">
              {fileList.map((fileName, index) => (
                <div key={index} className="showfilebox">
                  <div className="file">{fileName}</div>
                  <div
                    className="close-icon"
                    onClick={() => handleFileRemove(fileName)}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          <div className="col">
            <Typography variant="p">Drag & drop file upload using Dropzone</Typography>
            <div {...getRootProps()} className="drag-files-box">
              <input {...getInputProps()} />
              {isDragActive ? (
                <Typography variant="p">Drop the files here ...</Typography>
              ) : (
                <Typography variant="p">
                  Drag 'n' drop some files here, or click to select files
                </Typography>
              )}
            </div>

            <ul id="filewrapper">
              {dragfiles.map((file) => (
                <li key={file.name}>
                  {file.name}
                  <div
                    className="close-icon"
                    onClick={() => removeFile(file.name)}
                  ></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default FileUploadComponent;
