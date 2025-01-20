import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function FileUploadComponent() {
  const [file, setFile] = useState([]);
  const singlehandleFileChange = (e) => {
    const files = e.target.files;
    // const newFile = [];

    let fileName = files[0].name;
    console.log(fileName);
  };

  const singlehandleFileRemove = (fileName) => {
    setFile(file.filter((file) => file !== fileName));
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
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <h1>File Upload Demo</h1>
      <div className="custom-box">
        <div className="row">
          <div className="col">
            <p>Single file upload</p>
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
              {file.map((fileName, index) => (
                <div key={index} className="showfilebox">
                  <div className="file">{fileName}</div>
                  <div
                    className="close-icon"
                    onClick={() => singlehandleFileRemove(fileName)}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          <div className="col">
            <p>Multiple files upload</p>
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
            <p>Drag & drop file upload</p>
            <div {...getRootProps()} className="drag-files-box">
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
              )}
            </div>

            {/* preview */}
            <ul>
              {dragfiles.map(file =>(
                <li key={file.name}>{file.name}
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
